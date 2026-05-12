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
      "args": ["@roeeash/vibecheck-mcp@latest"],
      "env": {
        "DEV_PORT": "5173"
      }
    }
  }
}
```

Change `DEV_PORT` to match your dev server's port if it isn't `5173`.

Open the project in **Claude Code** — the MCP server loads automatically. Start your dev server, then run:

> ```
> ToolSearch select:vibecheck
> ```

This is because `vibecheck` is a deferred tool. Before calling it, Claude must load its schema via `ToolSearch`. 

Then, run:

```
vibecheck
```

---

## Tools

| Tool | Description |
|---|---|
| `vibecheck` | Audit your dev server. Starts the audit API automatically and returns a full report. |

---

## What Gets Audited

VibeCheck runs a headless Chromium browser against your dev server and reports on:

- **Web Vitals** — LCP, CLS, INP, FCP with reproduction traces
- **Network** — N+1 chains, waterfalls, duplicate fetches, missing cache headers
- **Assets** — oversized images, render-blocking scripts, unused CSS, bloated JS bundles
- **Render** — React re-render storms, missing memoization, unvirtualized lists
- **Memory** — leaked intervals, detached listeners, unbounded state growth

Every finding includes what was observed, where, confidence level, and a specific recommendation.
