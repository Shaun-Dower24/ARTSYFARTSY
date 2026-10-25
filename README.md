# Artsy Fartsy Creative Laboratory — demo

A responsive, interactive website concept based on [the design and UX checklist](Website-Design-UX-Checklist.md), the supplied brand reference, and the editorial composition of No Art.

## Run locally

Requires Node.js 18 or later. There are no package dependencies or build step.

```sh
npm run dev
```

Open `http://127.0.0.1:4173`. Run `npm run check` for JavaScript syntax validation. Static hosting serves the `dist/` directory. Hash-based routes support direct links without server rewrites.

## Demo scope

- Children/adult class filters, class details and sample class-interest confirmations.
- Separate birthday, corporate and private-event pages with validated local enquiry demonstrations.
- A donation dialog with preset/custom amounts and frequency selection.
- Mobile navigation, keyboard focus handling and reduced-motion styling.

Forms **never send or save information**. Donations **never collect payment or card information**. Sample class names, prices, session times and availability illustrate the design and must be replaced with approved content. Photographs are illustrative stock, not actual studio photography. Image credits and source links are in [dist/assets/SOURCES.md](dist/assets/SOURCES.md).

The demo deliberately omits unverified street addresses, hours, contact details, nonprofit status and tax claims. It is marked `noindex`. The Sites hosting manifest identifies the private demo host; no live registration, enquiry delivery or payment service is connected.

## Editing

The approved [21st component shortlist](21st-Component-Review.md) is now adapted into the existing stack: image-led class routes, shared class information cards, grouped navigation, simpler forms, native-radio giving controls and a complete footer directory. These are original HTML/CSS/JavaScript implementations of the selected patterns; no React component package or animation library was added. See [implementation and QA notes](Demo-QA-Notes.md) for the checked flows and limitations.

- `dist/index.html` — homepage, shared header/footer and metadata.
- `dist/styles.css` — brand tokens, responsive layouts and interaction states.
- `dist/app.js` — route views and demo interactions.
- `dist/assets/` — local photo assets and favicon.
- `scripts/serve.mjs` — dependency-free local preview server.

Before a real launch, obtain approved content/assets, connect and verify the selected booking/enquiry/donation services, review policies, complete full accessibility testing, and replace the demo notices and search-engine settings as appropriate.
