# Northstar Admin — Semantic HTML5 & Accessible Component Architecture

A responsive, multi-page enterprise dashboard demonstration built with semantic HTML5, CSS and vanilla JavaScript.

## Pages
- `index.html` — Overview dashboard, KPI cards, activity table, task form and modal dialogs.
- `analytics.html` — Analytics summary and traffic-source visualisation.
- `reports.html` — Searchable reports table and information dialog.
- `settings.html` — Profile form, grouped notification preferences and accessibility statement.

## Run locally
No build tools, API keys, package installation or database are required.

1. Download and extract the ZIP.
2. Open the folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Use the top navigation to move between pages.

## Accessibility features
- Semantic landmarks: `header`, labelled `nav`, `main`, `aside`, `section`, `article` and `footer`.
- Skip link and visible keyboard focus.
- Page-specific document titles and one primary `h1` per page.
- Data tables with captions, column headers and row headers.
- Explicit form labels, helpful descriptions, required fields and native validation.
- Fieldset and legend for related preferences.
- Native HTML `dialog` elements with labelled dialogs and keyboard support.
- Status messages announced with `role="status"` and `aria-live`.
- Responsive layout and reduced-motion preference support.
- `aria-current="page"` identifies the current navigation destination.

## Validation
Validate each HTML page using the W3C Nu HTML Checker:
https://validator.w3.org/nu/

Choose **File Upload** and validate `index.html`, `analytics.html`, `reports.html` and `settings.html` individually. The pages are authored as HTML5 and should be checked after any edits.

## Notes
All names, figures and report rows are fictional sample content. Form submissions are front-end demonstrations only; no data is transmitted or stored. The external Google Fonts import is optional; system fallbacks are provided.
