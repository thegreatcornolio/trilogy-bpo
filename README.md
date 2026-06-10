# Trilogy BPO — Website

Marketing landing page for Trilogy BPO, a business process outsourcing company.

## Stack

Plain HTML, CSS, and JavaScript — no build tools or dependencies. Fast to load, easy to edit, deployable anywhere.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Page content and structure (hero, services, why us, process, testimonials, contact) |
| `styles.css` | All styling, design tokens, and responsive layout |
| `script.js` | Mobile nav, scroll-reveal animations, stat counters, contact form handling |

## Run locally

Open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080.

## Deploy

Upload the three files to any static host — Netlify, Vercel, GitHub Pages, Cloudflare Pages, or a plain web server.

## To do

- Replace placeholder contact details (email, phone) in the footer
- Wire the contact form to a backend or form service (e.g. Formspree, Netlify Forms)
- Swap testimonial placeholders for real client quotes
