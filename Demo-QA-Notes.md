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

## No Art visual layout pass

Inspected the reference site visually and adapted its page composition: full-screen photographic opening and corner metadata, an expressive central brand signature, large asymmetrical editorial introduction, unboxed numbered class images, an oversized circular feature, original event posters and a thin framed footer. Artsy Fartsy retains its own content, palette and stock assets. The opening photograph is static; no No Art artwork, logo, video or event copy is reused.

- Desktop visual checks at 1265px and mobile frames at 375px and 320px cover the hero, large headings, class routes and navigation. No page overflow or broken images observed in the checked views.
- Enter the Lab scrolls to and focuses the introduction. The fixed header changes from transparent over the hero to a solid background on scroll and on detail pages.
- Desktop disclosures open and close with Escape. Mobile route selection closes the native sheet and opens the requested class audience.
- Children classes → class detail → Back preserves the audience. Long class headings fit the narrow mobile views.
- Donation custom $35 monthly produces the matching local preview. General contact produces its local confirmation. Existing demo limits remain unchanged.
- JavaScript syntax checks pass; 21st review reports zero errors and warnings, with nine informational color suggestions. No browser console errors observed in the checked desktop tab.
