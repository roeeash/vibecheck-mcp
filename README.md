# vibecheck-mcp

Audit your local dev server with Claude. Drop one `.mcp.json` into any project and call `audit_dev_server()` to get a full performance report — Vibe-Score, ranked findings, and actionable recommendations — without leaving your editor.

Powered by [VibeCheck Ultra](https://github.com/roeeash/VibeCheck).

---

## Requirements

- Node.js 20+
- Playwright Chromium (one-time install):
  ```bash
  npx playwright install chromium
  ```

---

## Setup

Add `.mcp.json` to your project root:

```json
{
  "mcpServers": {
    "vibecheck": {
      "command": "npx",
      "args": ["vibecheck-mcp@latest"],
      "env": {
        "DEV_PORT": "3000"
      }
    }
  }
}
```

Change `DEV_PORT` to match your dev server's port (default: `5173`).

Open the project in **Claude Code** — the MCP server loads automatically. Start your dev server, then call:

```
audit_dev_server()
audit_dev_server(/dashboard)
get_last_audit()
```

---

## Tools

| Tool | Description |
|---|---|
| `audit_dev_server(path?)` | Audit your dev server at the given path (default `/`). Starts the audit API automatically. |
| `get_last_audit()` | Return results from the most recently completed audit without re-running. |

---

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `DEV_PORT` | `5173` | Port your dev server runs on |
| `VIBECHECK_API_URL` | — | Point at a hosted VibeCheck API instead of starting one locally |

---

## What Gets Audited

VibeCheck runs a headless Chromium browser against your dev server and reports on:

- **Web Vitals** — LCP, CLS, INP, FCP with reproduction traces
- **Network** — N+1 chains, waterfalls, duplicate fetches, missing cache headers
- **Assets** — oversized images, render-blocking scripts, unused CSS, bloated JS bundles
- **Render** — React re-render storms, missing memoization, unvirtualized lists
- **Memory** — leaked intervals, detached listeners, unbounded state growth

Every finding includes what was observed, where, confidence level, and a specific recommendation.
