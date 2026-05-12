#!/usr/bin/env node

// src/index.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { spawn } from "child_process";
import { existsSync } from "fs";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";
var API_URL = process.env.VIBECHECK_API_URL ?? "http://localhost:4000";
var DEV_PORT = process.env.DEV_PORT ?? "5173";
var POLL_INTERVAL_MS = 3e3;
var POLL_TIMEOUT_MS = 5 * 60 * 1e3;
var API_BIN = resolve(dirname(fileURLToPath(import.meta.url)), "../vendor/server.bundle.js");
var lastAuditId = null;
async function isApiReady() {
  try {
    const res = await fetch(`${API_URL}/health`, { signal: AbortSignal.timeout(1e3) });
    return res.ok;
  } catch {
    return false;
  }
}
function assertApiBundleExists() {
  if (!existsSync(API_BIN)) {
    throw new Error(
      `vibecheck-mcp: vendor/server.bundle.js is missing at ${API_BIN}.
Try reinstalling: npx clear-npx-cache && npx vibecheck-mcp@latest
If using a local install: npm install vibecheck-mcp`
    );
  }
}
async function ensureApiRunning() {
  if (process.env.VIBECHECK_API_URL) return;
  assertApiBundleExists();
  if (await isApiReady()) return;
  process.stderr.write(`VibeCheck API not running \u2014 starting ${API_BIN}
`);
  const child = spawn("node", [API_BIN], {
    detached: true,
    stdio: ["ignore", "ignore", "inherit"],
    env: { ...process.env }
  });
  child.unref();
  for (let i = 0; i < 10; i++) {
    await new Promise((r) => setTimeout(r, 500));
    if (await isApiReady()) return;
  }
  throw new Error(
    "VibeCheck API failed to start within 5 seconds.\nMake sure Playwright Chromium is installed: npx playwright install chromium"
  );
}
function buildDevUrl(path) {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `http://localhost:${DEV_PORT}${normalised}`;
}
async function startAudit(url) {
  const res = await fetch(`${API_URL}/api/audit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url, output: { dir: "/tmp/vibecheck-mcp" } })
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Failed to start audit (${res.status}): ${body}`);
  }
  const data = await res.json();
  return data.id;
}
async function pollAudit(id) {
  const res = await fetch(`${API_URL}/api/audit/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch audit ${id}: ${res.status}`);
  return res.json();
}
async function runAuditAndWait(url) {
  const id = await startAudit(url);
  lastAuditId = id;
  const deadline = Date.now() + POLL_TIMEOUT_MS;
  while (Date.now() < deadline) {
    await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS));
    const result = await pollAudit(id);
    if (result.status === "completed" || result.status === "failed") {
      return result;
    }
  }
  throw new Error(`Audit timed out after 5 minutes (id: ${id})`);
}
function formatAuditResult(result) {
  if (result.status === "failed") {
    return `Audit ID: ${result.id}
Audit failed: ${result.error ?? "unknown error"}`;
  }
  const findings = result.findings ?? [];
  const top = [...findings].sort((a, b) => b.scoreImpact - a.scoreImpact).slice(0, 10);
  const lines = [
    `Audit ID: ${result.id}`,
    `Vibe-Score: ${result.score ?? "N/A"}/100 (${result.scoreResult?.grade ?? "?"})`,
    `${result.scoreResult?.summary ?? ""}`,
    "",
    `Top findings (${findings.length} total):`
  ];
  for (const f of top) {
    lines.push(`[${f.severity.toUpperCase()}] ${f.title}`);
    lines.push(`  ${f.description}`);
    lines.push(`  Recommendation: ${f.recommendation}`);
    lines.push("");
  }
  return lines.join("\n");
}
var server = new McpServer({
  name: "vibecheck",
  version: "0.1.0"
});
server.tool(
  "audit_dev_server",
  `Audit the local dev server running on port ${DEV_PORT}. Starts the VibeCheck API if needed, runs a full performance audit, and returns Vibe-Score and prioritized findings.`,
  { path: z.string().default("/").describe('URL path to audit (e.g. "/dashboard"). Defaults to "/".') },
  async ({ path }) => {
    await ensureApiRunning();
    const url = buildDevUrl(path);
    process.stderr.write(`Auditing ${url}
`);
    const result = await runAuditAndWait(url);
    return { content: [{ type: "text", text: formatAuditResult(result) }] };
  }
);
server.tool(
  "get_last_audit",
  "Return the results of the most recently completed audit without re-running it.",
  {},
  async () => {
    if (!lastAuditId) {
      return { content: [{ type: "text", text: "No audit has been run yet in this session." }] };
    }
    const result = await pollAudit(lastAuditId);
    return { content: [{ type: "text", text: formatAuditResult(result) }] };
  }
);
var transport = new StdioServerTransport();
await server.connect(transport);
process.stderr.write(`VibeCheck MCP server running (dev port: ${DEV_PORT})
`);
