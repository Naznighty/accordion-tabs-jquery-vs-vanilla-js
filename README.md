# Accordion & Tabs: jQuery vs Vanilla JavaScript

The same accordion and tabs component built twice, once with jQuery 3.7.1 and once with plain ES6 JavaScript, so you can compare code size and readability side by side.

The HTML and CSS are shared. Only the JavaScript differs.

## Features

- Accordion: one section open at a time, click again to close
- Tabs: switch between panels
- Accessible: `aria-expanded`, `aria-selected`, `aria-controls`, keyboard focus styles
- Responsive, light and dark theme, respects `prefers-reduced-motion`
- Live size and line-count comparison of both implementations

## Project structure

```
index.html
css/style.css
js/render.js            # generates the shared markup
js/jquery-version.js    # jQuery implementation
js/vanilla-version.js   # vanilla JS implementation
js/stats.js             # size comparison
```

## Run locally

Serve the folder over HTTP (the size comparison uses `fetch`, which does not work from `file://`):

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Comparison

| | jQuery | Vanilla JS |
|---|---|---|
| Dependency | jQuery 3.7.1 (~87 KB min, ~30 KB gzip) | None |
| Own code | Slightly shorter, chainable | Slightly longer, explicit loops |
| Best for | Projects that already use jQuery | New projects |

## Tech

HTML5, CSS3, JavaScript (ES6), jQuery 3.7.1 (CDN)
