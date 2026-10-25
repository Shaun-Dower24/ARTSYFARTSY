# Demo implementation and QA — 25 October 2026

The accepted 21st shortlist has been adapted into the existing HTML/CSS/JavaScript demo with original implementation. No React catalog component was installed. Design references and individual component links remain in `21st-Component-Review.md`.

## Applied

- Two image-led class audience routes, explicit hero offer and compact event selector.
- Grouped desktop dropdowns and native mobile navigation sheet with focus handling.
- Shared class cards with age, sample session, duration, sample price and one link per card.
- Class audience filters with counts and URL/history preservation.
- Responsive event cards, distinct gathering summaries, refined story and direct Donate CTA.
- Contextual enquiry forms, optional extra details and general contact topics.
- Native donation amount/frequency radios, custom amount validation, live summary and a persistent preview action.
- Grouped footer links to every requested offering.

## Checks completed

- `npm run check`: JavaScript syntax passed.
- `21st review` on the three implementation files: no errors or warnings; informational colour suggestions concern token definitions and overlay/shadow values. No automatic fixes applied.
- Browser visual checks: desktop at 1265px content width, tablet/current panel at approximately 617px, and 375px/320px mobile frames. No observed page overflow in checked views; desktop/tablet DOM width matched scroll width. Event-card media was bounded after the tablet check.
- Shared homepage cards each contain exactly one link; no broken images observed.
- Class audience → detail → browser Back retains the selected audience.
- Mobile sheet opens, exposes grouped routes, closes on route selection and focuses the destination; Escape and close return focus appropriately.
- Donation native-radio arrow selection updates the summary. Custom $37.50 monthly works; $0 is blocked. Returning to a preset disables invalid custom input. Confirmation matches the selected amount/frequency.
- Donation Escape returns focus to a visible trigger, including after opening it from the mobile sheet.
- General contact validates email and completes with name, email, topic and message alone; optional event details are not required.
- No browser console errors observed in the checked demo tab.

All confirmations remain local demonstrations. No information is sent or saved; no registration, enquiry, donation, recurring commitment or payment is created. These are focused demo checks, not a complete accessibility conformance assessment or a real-service integration test.
