# Artsy Fartsy — 21st Component Review

Reviewed: 25 October 2026  
Scope: section-by-section recommendations for the current local demo. This is a research and UX review; no replacement components have been installed or applied.

## Recommendation

Prioritise helping visitors choose and compare: class information, class audience selection, event categories and navigation. Then improve the hero's visual storytelling. Keep the supplied forest/teal, coral, pale yellow, mint and peach palette, serif headings and visible Donate action throughout.

The candidates below are verified 21st catalog entries. Their descriptions and public usage examples establish the patterns they offer; they do not establish accessibility or compatibility after adaptation. Expected benefits below are design hypotheses to test.

## Every homepage section

| Section | Current observation | 21st candidate / decision | Recommended change |
| --- | --- | --- | --- |
| Demo notice | A small strip correctly identifies the prototype. | **Keep the simple strip.** No replacement needed. | Use comfortably readable text and one concise demo notice. Do not turn it into a promotional ticker. |
| Header and mobile navigation | Desktop links are flat; the mobile menu offers four broad destinations. Donate is already separate and visible. | [Classic Header with Sheet Menu — LN](https://21st.dev/@ln-dev7/components/header-17) | Adapt the sheet/menu structure with grouped links for Children's Classes, Adult Classes, Birthday Parties, Corporate Events and Private Parties. Keep the wordmark and coral Donate outside the sheet. Remove the catalog's sign-in action. |
| Hero | Strong typography and colour, but one close-up photo and broad copy leave the actual offer understated. | [Split Hero With Image Cards — felipemenezes098](https://21st.dev/@felipemenezes098/components/hero-08) | Keep the headline personality, then explicitly describe classes for children/adults and creative celebrations in Carmel. Use two image routes for Children's Classes and Adult Classes, with Plan an Event as a secondary route. Retain message-first source order on mobile. |
| “Explore the lab” strip | A second exploration prompt repeats the hero's job and adds vertical distance before activity choices. | **Remove or merge into the next section heading.** | Let visitors move directly from the hero to the activity selector. No new component is needed. |
| Five activity/category blocks | All five routes are visible, but equal narrow blocks give limited space to explain differences. Small labels are hard to scan. | [Service Card — LaviKatiyar](https://21st.dev/@lavikatiyar/components/service-card) | Use two prominent class audience cards, followed by three compact event choices. Each needs a descriptive title, short benefit and one clear destination. Keep all five options visible without carousel interaction. |
| “What will you try next?” class previews | Photographs and names are attractive; homepage cards omit day/time, duration and price. The image, heading and CTA repeat the same destination. | [Event Card — Ravi Katiyar](https://21st.dev/@ravikatiyar162/components/event-card) | Borrow the practical metadata hierarchy while retaining photography: audience/age, sample session, duration and sample price. Give each card one clear primary link rather than three repeated keyboard stops. Keep sample labels explicit. |
| “Made together” parties/events | The three links expose the categories, but the section mostly repeats the earlier selector rather than helping visitors decide. | [Service Card — LaviKatiyar](https://21st.dev/@lavikatiyar/components/service-card), reused in a compact variant | Add distinct summaries for birthdays, teams and private gatherings, with specific enquiry actions. Add capacity/inclusions only when confirmed. Use enquiry-led cards rather than scheduled-event dates. |
| Studio story | The split image/copy layout already suits the brand; its image repeats an earlier photograph and the content remains broad. | [Split Content Section — felipemenezes098](https://21st.dev/@felipemenezes098/components/content-06), as a spacing/composition reference | Keep the basic structure, use a distinct studio/process photo and concise “what to expect” content, then a descriptive About link. Approved story content will matter more than exchanging an almost identical layout. |
| Donation call to action | Teal contrast is effective; “Give a little inspiration” is less explicit than “Donate.” The giving purpose is still unconfirmed. | [CTA Section — shadcndesign](https://21st.dev/@shadcndesign/components/cta-section-1) | Adapt the simple solid-colour CTA structure. Use a direct Donate label, a concise approved purpose when available, and the existing demo notice. Keep decorative treatment secondary to the action. |
| Footer | Class/event overview links exist, but individual offerings and About are not directly listed. | [Minimal Footer — Efferd](https://21st.dev/@efferd/components/minimal-footer) | Use grouped Explore, Celebrate and Visit/Support links so all required destinations are easy to find at the bottom. Preserve the coloured brand strip. Use confirmed contact/policy links when available; omit invented details and decorative smooth scrolling. |

## Supporting pages and interactions

| Area | Candidate | Adaptation |
| --- | --- | --- |
| Class audience filters | [Tabs — Origin UI](https://21st.dev/@originui/components/tabs) | Borrow the clear selected treatment for All / Children / Adults. Keep the current URL-based navigation and Back behaviour. These are route links; do not add tab semantics unless implementing the corresponding tab-panel keyboard behaviour. |
| Class listing/detail | [Event Card — Ravi Katiyar](https://21st.dev/@ravikatiyar162/components/event-card) | Reuse one class-card hierarchy on the homepage and listing. Keep the detail summary together: age, session, duration, price, materials and next action. Images should consistently match the activity. |
| Event overview | [Service Grid — Ravi Katiyar](https://21st.dev/@ravikatiyar162/components/service-grid) | A lighter alternative to full Service Cards. Use image/title/short description with a clear route. At narrow widths, stack image above copy rather than leaving a narrow text column beside a large photo. |
| Event enquiry / sample registration | [Contact Form — kevingirelli](https://21st.dev/@kevingirelli/components/contact-form) | Use a concise form with adjacent context and visible validation/status. Preserve the selected class/event. Initial event fields should focus on name, email, event type and message; put optional date, phone and group-size details behind an optional expansion if useful. Keep confirmation explicit that nothing is sent or reserved. |
| Visit / general contact | Same [Contact Form](https://21st.dev/@kevingirelli/components/contact-form) pattern | The current Visit form requires an event type and group size. A visitor asking about a class or access should have a general enquiry option. Keep address/hours/access placeholders honest until confirmed; a map component cannot resolve missing facts. |
| Donation amounts | [Radio Group, with-grid — Origin UI](https://21st.dev/@originui/components/radio-group/with-grid) | Use mutually exclusive amount cards with a visible selection marker and a labelled custom amount. Adapt the example's width constraints for small screens. Test arrow-key behaviour and announced selection. |
| Donation frequency | [Segmented Control — halaska-studio](https://21st.dev/@halaska-studio/components/segmented-control) | Use a compact One time / Monthly choice with a single selected indicator. Preserve readable labels, keyboard operation and a stable selected state without motion. |
| Donation dialog | [Dialog — Origin UI](https://21st.dev/@originui/components/dialog/scrollable-sticky-footer) | Keep the existing native dialog foundation and borrow the scrollable-body/sticky-action layout for short screens. Preserve Escape, focus containment/return and clear demo-only wording. No card fields or real payment connection are needed. |

## Preferred implementation order

1. **Class discovery:** consistent metadata-rich cards and clearer audience selection.
2. **Navigation and event choice:** grouped mobile menu, responsive event cards and direct footer destinations.
3. **Forms and giving:** clearer selection controls, fewer initially exposed fields, context-specific contact forms and predictable confirmations.
4. **Hero:** test the image-card version against the present split hero, maintaining an explicit offer and immediate actions.
5. **Story and finishing:** better photo variety, tighter copy, readable small labels and removal of repetitive exploration prompts.

Avoid repeating the same five full-size service cards twice. The activity selector should orient; the later event section should answer different decision questions.

## Observed issues to resolve alongside component work

- **Mobile menu label:** the toggle updates `aria-expanded` but retains “Open navigation” while open. Update the accessible label on both open and close. Relevant source: `dist/index.html:32`, `dist/app.js:69` and `dist/app.js:146`.
- **Event card proportions:** at the current narrow preview width, event images occupy most of each card and squeeze copy into a thin adjacent column. Stack/constrain media at that breakpoint. Relevant source: `dist/app.js:45` and the responsive `.event-card` rules in `dist/styles.css`.
- **Class comparison:** the homepage and listing use different information priorities. Put practical details in the shared card pattern and keep all prices/times marked as samples.
- **Form context:** the Visit form reuses the event-only form, which requires irrelevant fields for general questions. Relevant source: `eventForm()` and `visitPage()` in `dist/app.js`.

The very large focus outline shown around route headings is also a visual-polish consideration. Preserve the programmatic heading focus and interactive keyboard indicators while deciding how that destination focus should be presented.

## Candidates considered but not preferred

- [Editorial Collage Hero](https://21st.dev/@felipemenezes098/components/hero-04) is a good visual alternative, but the selected image-card hero adds clearer audience routes. A collage alone does less for class discovery.
- [Course Design Cards — kristen17](https://21st.dev/@kristen17/components/course-design-cards) is a course-progress dashboard pattern; progress percentages, avatars and countdowns do not help a new visitor choose an art class.
- [Footer with Minimal Outline — ScrollX UI](https://21st.dev/@scrollxui/components/footer-with-minimal-outline) has a large outlined wordmark and scroll animation. The smaller link-directory footer better addresses the current navigation gap.
- Shaders, cursor effects, autoplay galleries and essential-content carousels add interaction cost without addressing the current decision-making gaps.

## Integration and verification notes

- The current demo is dependency-free HTML/CSS/JavaScript. Catalog candidates are React/Tailwind patterns. Adapt the selected ideas into the present stack; a framework migration is not necessary for this review's recommendations.
- Several public examples include Motion, icon or balancing dependencies. Retain only behaviour that benefits the task. The Minimal Footer demo also includes a smooth-scroll setup; it is not needed for the proposed footer structure.
- The hero example includes social-proof avatars and a “40,000+” claim. Remove those example claims rather than importing them into Artsy Fartsy.
- Inspect the actual component source, licence and dependency requirements before copying code. A matching catalog title is not sufficient evidence of fitness.
- Test the adapted patterns at narrow, tablet and desktop widths; with keyboard, enlarged text and reduced motion; and through the complete class, enquiry and demo-giving flows.
- Proposed success checks: visitors can identify the right audience route, compare class age/time/price without opening every card, distinguish an enquiry from a booking, and understand the donation amount/frequency before previewing it.
- This pass visually reviewed the current homepage sections and donation/event views, inspected local HTML/CSS/JS, and reviewed public 21st catalog descriptions/usage examples. The selected hero's live preview was also inspected.
- `21st review dist --json` reported **0 errors, 0 warnings and 4 informational hardcoded-colour suggestions** across five files, including two temporary layout-QA wrappers. Palette-token declarations account for some suggestions. This result is a bounded static scan, not an accessibility pass or usability test.
- CLI catalog search required sign-in; public 21st pages provided the shortlist. No component source was retrieved through metered CLI commands, and no component installation, generation, application or deployment occurred in this review.

All 21st links were checked or retrieved from its public catalog on the review date. Public catalog descriptions establish the component patterns; the Artsy Fartsy adaptation and priority decisions above are recommendations.
