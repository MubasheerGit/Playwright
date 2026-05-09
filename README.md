# Playwright Automation

This repository contains a small Playwright project to open the Google homepage, navigate to Yahoo, close any popups, and inspect the default cursor focus.

## Files

- `googleopen.js` - Playwright script to launch Chromium maximized, open Google, navigate to Yahoo, handle popups, and log the focused element.
- `package.json` - Node.js project file with Playwright dependency.
- `package-lock.json` - Lockfile for the installed dependencies.
- `.gitignore` - Ignore `node_modules/`.

## Run

```bash
npm install
node googleopen.js
```

## Notes

- The browser is launched in non-headless mode so you can see the automation flow.
- The script closes the browser after execution.
