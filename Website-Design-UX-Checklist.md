# Artsy Fartsy Creative Laboratory — Website Design & UX Checklist

Prepared: 25 October 2026  
Repository: [Shaun-Dower24/ARTSYFARTSY](https://github.com/Shaun-Dower24/ARTSYFARTSY)  
Stage: planning only. This document does not authorise website implementation or deployment.

**Proposed direction:** a welcoming creative studio with an editorial, art-led layout: generous white space, expressive serif headings, authentic studio photography, deep teal structure and cheerful coral, yellow, mint and peach accents. Help people choose an activity, plan an event or donate with clear, familiar navigation.

**Status key:** checked items record completed research or supplied requirements. Unchecked items are proposed work, decisions or verification still to complete. No website design, functionality or accessibility test is marked complete.

## 1. Brief and source review

- [x] Record the supplied company name: **Artsy Fartsy Creative Laboratory**.
- [x] Record the supplied location: **Carmel, Indiana**.
- [x] Record required visitor routes: **Donate; children's classes; adult classes; birthday parties; corporate events; private parties**.
- [x] Review the supplied design image for colour, typography, hierarchy and graphic details.
- [x] Review [No Art's live homepage](https://www.noartmusic.com/) as design inspiration on 25 October 2026.
- [x] Review relevant material in **Dower-Skills-Updated-2026-10-03.zip**.
- [x] Apply **Dower Website Build** planning guidance: brand first, purposeful sections, explicit visitor flows, accessible interactions and verifiable outcomes.
- [x] Apply its bundled **Karpathy Guidelines**: make assumptions visible, keep scope focused, use the simplest complete approach and separate proposals from verified results.
- [x] Use the installed **UI/UX Pro Max** skill for supplementary accessibility and navigation guidance; retain the supplied brand instead of adopting its generic palette or page template.
- [x] Treat the attached recruitment poster as a visual reference. “Website designer wanted,” portfolio requests and LinkedIn recruitment instructions are not website content requirements.
- [ ] Confirm whether a separate formal brand guide exists. Until supplied, screenshot-derived tokens and all exact font choices remain provisional.

## 2. Business inputs needed before implementation

- [ ] Obtain the approved logo/wordmark, brand files, licensed fonts and original photography.
- [ ] Confirm the studio's mission, introductory copy, address, contact details, opening hours, directions, parking and physical access information.
- [ ] Collect children's and adult class names, age ranges, dates, times, duration, prices, materials, capacity and availability.
- [ ] Confirm children's class arrangements: parent/guardian involvement, supervision, drop-off/collection and any participation requirements.
- [ ] Collect separate birthday, corporate and private-party details: activities, age suitability, guest limits, duration, inclusions, pricing approach and lead time.
- [ ] Confirm booking responsibilities: self-service registration, external booking link or staff-managed enquiry; identify the existing system, if any.
- [ ] Confirm cancellation, rescheduling, payment and deposit policies before presenting them.
- [ ] Confirm the donation recipient, existing donation destination, permitted payment options, receipt arrangements and whether recurring gifts are offered.
- [ ] Obtain approved donation-purpose statements and evidence for any impact claims. Do not assume nonprofit status, tax deductibility or a specific use of funds.
- [ ] Obtain permission for published images, especially identifiable children, and use only approved testimonials or community claims.
- [ ] Identify the staff member responsible for updating schedules, prices, availability and enquiries.

**Content rule:** keep unknown details in this checklist until confirmed. Do not turn invented prices, schedules, reviews, policies or impact statistics into public copy.

## 3. Navigation and page structure

- [ ] Use the desktop navigation: **Classes · Parties & Events · About · Visit / Contact**, plus a visually prominent **Donate** action.
- [ ] Give Classes two clearly labelled destinations: **Children's Classes** and **Adult Classes**.
- [ ] Give Parties & Events three clearly labelled destinations: **Birthday Parties**, **Corporate Events** and **Private Parties**.
- [ ] Keep Donate visible in the mobile header while the menu is closed; allow the wordmark to shorten gracefully without removing the accessible company name.
- [ ] Use tap/click and keyboard-operated menus with visible expanded states; provide direct links on the overview pages as well.
- [ ] Link the logo to Home and repeat essential activity, contact and donation links in the footer.
- [ ] Keep every required offering within two deliberate navigation actions from Home.

Proposed sitemap; final slugs should follow any existing domain and URL requirements:

| Page | Visitor's question | Main next action |
| --- | --- | --- |
| Home | What can I do here? | Explore classes |
| Classes overview | Is this for children or adults? | Choose an audience |
| Children's Classes | Which class suits my child? | View a class |
| Adult Classes | What would I like to try? | View a class |
| Class detail | Is this the right session? | Register, or enquire if registration is staff-managed |
| Parties & Events overview | Which event type suits my group? | Choose an event type |
| Birthday Parties | What would a birthday here involve? | Request a birthday party |
| Corporate Events | Can our team create together? | Enquire about a corporate event |
| Private Parties | Can I organise a gathering here? | Request a private party |
| Donate | Why give, and how do I donate? | Continue to the approved donation flow |
| About | What is the studio's story? | Explore activities |
| Visit / Contact | Where is it, and how do I get help? | Get directions or send an enquiry |

## 4. Visual direction and reference adaptation

Observed patterns on [No Art's homepage](https://www.noartmusic.com/) inform the recommendations below; they are not Artsy Fartsy business facts.

| Reference observation | Proposed Artsy Fartsy adaptation |
| --- | --- |
| Immersive photographic hero and distinctive wordmark | One strong, authentic studio image with an immediately readable offer and clear action |
| Oversized editorial headings and generous white space | Expressive serif titles, short supporting paragraphs and a confident reading order |
| Small uppercase navigation and utility labels | Retain uppercase for brief labels; increase navigation size and legibility |
| Square bullets and fine corner details | Subtle square markers, thin rules and a multicolour strip inspired by the supplied poster |
| Image-led upcoming-event carousel | An accessible class/program grid with useful dates and age information visible |
| Motion and an international globe section | Optional restrained transitions; prioritise local visit information and static fallbacks |

- [ ] Preserve the supplied identity: bright, warm, artistic and welcoming to adults as well as children.
- [ ] Use a clear grid, broad margins and occasional asymmetrical image/text compositions.
- [ ] Prefer square or subtly softened blocks, thin rules and flat colour to heavily decorated cards.
- [ ] Keep key headings as real text and use photography to show the studio experience.
- [ ] Keep all service routes available without a carousel, hover effect, animation or video.
- [ ] Use a useful static hero by default. Consider motion only if it supports the experience and meets accessibility and performance requirements.

### Provisional colour tokens

Colours below are approximate samples from the attached image, except the explicitly proposed deeper text colour. They require confirmation against original brand files.

| Role | Proposed value | Intended use |
| --- | --- | --- |
| Canvas | `#FFFFFF` | Main page background and breathing room |
| Teal | `#2E6563` | Feature panels, footer and strong brand structure |
| Deep ink — accessibility extension | `#163D36` | Body text and text on coral/light accents |
| Coral | `#FF8363` | Donate emphasis and occasional highlights |
| Pale yellow | `#FFFF9F` | Selected program highlights |
| Pale mint | `#FAFFF9` | Quiet class or information surfaces |
| Peach | `#FFEDD1` | Party/event highlights |

- [ ] Confirm a small set of semantic roles: page background, text, muted text, border, primary action, donation action, focus and validation.
- [ ] Use deep ink on coral for normal-sized Donate text. The proposed pair calculates to approximately **4.95:1**; white on this coral calculates to **2.42:1** and is unsuitable for normal-sized button text.
- [ ] Use white on the sampled teal where appropriate; the proposed pair calculates to approximately **6.65:1**.
- [ ] Recheck final rendered colours, imagery overlays, borders and hover/focus/disabled states. These calculations do not establish whole-site accessibility.
- [ ] Keep category names visible alongside colour so meaning does not depend on colour alone.

### Typography, spacing and imagery

- [ ] Select an editorial serif resembling the poster for headings and a clear sans serif for body text, navigation and forms; confirm exact families and licences.
- [ ] Start with body text at 16–18px and comfortable line spacing; reserve uppercase/tracking for short labels.
- [ ] Use fluid display sizing, approximately 36–48px on mobile and 64–88px on larger screens, adjusted for real title lengths.
- [ ] Keep paragraph widths around 60–70 characters and use a consistent 8px-based spacing rhythm.
- [ ] Plan approximately 20px mobile gutters, wider desktop margins and a readable maximum content width around 1200–1280px.
- [ ] Request a balanced photo selection: children creating, adults creating, artwork details, groups and the real studio.
- [ ] Specify image crops with safe space for nearby text and meaningful alt text; decorative graphics should not create screen-reader noise.
- [ ] Use placeholders only in design drafts and label them. Do not represent generated premises or participants as the real studio.

## 5. Homepage composition checklist

| Order | Section and purpose | Content / destination |
| --- | --- | --- |
| 1 | Header: orient and offer immediate action | Readable navigation, logo and Donate |
| 2 | Hero: explain the studio at a glance | Carmel, Indiana; a short welcoming proposition; **Explore classes** and **Plan an event** |
| 3 | Activity selector: expose the full offer | Children's Classes, Adult Classes, Birthday Parties, Corporate Events, Private Parties |
| 4 | Class preview: help visitors choose | Confirmed sessions with audience/age, date and price; link to all classes |
| 5 | Parties & events: distinguish group experiences | Three concise summaries with specific enquiry links |
| 6 | Studio story: build understanding | Approved mission, authentic photographs and brief supporting copy |
| 7 | Support the studio: explain giving | Verified donation purpose and a repeated Donate action |
| 8 | Visit and footer: resolve practical questions | Confirmed location, hours, access information, contact and useful links |

- [ ] Draft a short hero message around creativity and participation; clearly mark draft wording until approved.
- [ ] Ensure a first-time visitor can identify the studio, location and next actions within ten seconds.
- [ ] Keep the activity selector easy to scan on mobile, with all five activity destinations visible in the page flow.
- [ ] Use real class previews only when schedules exist; otherwise provide honest links to the class pages.
- [ ] Give each section one clear purpose and descriptive links rather than repeated “Learn more” labels.
- [ ] Keep the persistent Donate action visually distinct while allowing each page a clear task-specific primary action.

## 6. Critical journeys and content requirements

### Find and register for a class

- [ ] Plan the flow: **Home → Children / Adults → class detail → registration → confirmation**.
- [ ] Show audience, age suitability, date, local time, duration, location, price, materials and availability together.
- [ ] Use an accessible list/grid; add filters only when the actual class volume makes them useful.
- [ ] Preserve selected audience/filter and navigation context when visitors return from class details.
- [ ] Show sold-out, no-upcoming-class and temporary-unavailability states with an appropriate contact or alternative-class route.
- [ ] Identify external registration handoffs clearly. Use “Register” only when the destination supports that action.
- [ ] Keep children's registration adult-facing and collect only information needed at the relevant stage.

### Request a party or event

- [ ] Plan the flow: **Choose event type → review details → send enquiry → confirmation and next steps**.
- [ ] Give birthday, corporate and private-party pages distinct audience-specific copy and examples.
- [ ] Explain confirmed group sizes, activities, inclusions, duration, pricing approach and booking process before the form.
- [ ] Keep initial enquiry fields focused: organiser name, email, event type, preferred date, approximate group size and message; make phone optional unless operationally necessary.
- [ ] Carry the selected event type into the form.
- [ ] Use enquiry wording until a real availability/booking process is confirmed. An enquiry confirmation must not imply a reserved date.
- [ ] State a response timeframe only when the studio has confirmed it.

### Donate

- [ ] Plan the flow: **Donate → purpose / approved giving destination → review amount and payment → confirmation / receipt**.
- [ ] Confirm whether the Donate page explains giving before an external checkout or whether the button links directly to an existing approved donation page.
- [ ] Make recipient, amount, frequency if offered and any fees clear before the payment commitment.
- [ ] Provide completion, cancellation, failure and return-to-site states appropriate to the chosen donation service.
- [ ] Keep the path usable without requiring a website account where the approved service permits.
- [ ] Verify the actual donation outcome separately from a Donate-button click.

## 7. Responsive, interaction and accessibility checks

Target [WCAG 2.2 AA](https://www.w3.org/WAI/WCAG22/quickref/) during later design and implementation; the following is a focused checklist, not a conformance claim.

- [ ] Review layouts at 320, 375, 768, 1024 and 1440px, plus in-between widths and long real content.
- [ ] Reflow grids into a clear single-column reading order on narrow screens; avoid page-level horizontal scrolling.
- [ ] Keep body text, menu labels, dates, prices and action labels readable without truncation.
- [ ] Check text resize to 200% and reflow at 400% zoom; ensure sticky headers do not cover content or keyboard focus.
- [ ] Aim for at least 44 × 44px primary touch targets with comfortable spacing.
- [ ] Meet normal-text contrast of at least 4.5:1 and qualifying large-text contrast of at least 3:1; test meaningful controls and focus indicators too.
- [ ] Provide keyboard access, visible focus, logical reading/tab order, a skip link and an appropriate heading hierarchy.
- [ ] Specify mobile menu focus handling, Escape dismissal, expanded/collapsed announcement and focus return.
- [ ] Use persistent form labels, clear required/optional indicators and useful validation associated with the affected field.
- [ ] Define idle, hover, focus, active, loading, success, error, empty and unavailable states wherever relevant.
- [ ] Preserve form entries after recoverable errors, prevent accidental repeated submission and announce completion or failure.
- [ ] Respect reduced motion. Pause/stop any applicable moving content and keep essential content available in a static presentation.
- [ ] Review informative image descriptions, decorative-image handling and any video captions as applicable.
- [ ] Check third-party registration and donation journeys as part of the full visitor experience.

## 8. Content, maintenance and launch planning

- [ ] Draft concise US English copy with descriptive page titles, useful headings and Carmel, Indiana context where relevant.
- [ ] Plan basic metadata, social sharing imagery, crawlable navigation and a sitemap for the final public pages.
- [ ] Preserve useful existing URLs and plan redirects if an existing site is being replaced; current domain/site details remain unconfirmed.
- [ ] Add structured business information only after relevant facts and the final content are confirmed.
- [ ] Confirm which content staff must update and choose an editing approach around that need before selecting the technical stack.
- [ ] Establish who receives enquiries and how failed delivery will be noticed; test an actual received enquiry during implementation.
- [ ] Keep analytics and conversion tracking as a separate scope decision. If included, distinguish enquiry submission, registration and donation completion from clicks.
- [ ] Plan responsive, compressed images, limited font weights and a lightweight initial page; verify performance on the eventual build.
- [ ] Confirm appropriate privacy, booking and donation information with the owner and chosen services.
- [ ] Keep extra features such as memberships, shops, newsletters or a custom payment system outside the initial scope unless requested.

## 9. Design review and acceptance gates

### Before website code

- [ ] Resolve missing brand assets and business details needed for the affected pages.
- [ ] Agree the sitemap, navigation labels, donation destination and registration/enquiry approach.
- [ ] Produce desktop and mobile wireframes for Home, class listing/detail, an event page and Donate.
- [ ] Apply the proposed art direction to a small set of high-fidelity screens and review readable contrast, real content and mobile fit.
- [ ] Review the plan and designs with the owner. This checklist records the future work; website implementation requires a subsequent request.

### During later prototype/build validation

- [ ] Run task-based checks with representative parents, adult learners, event organisers and supporters.
- [ ] Proposed usability target: at least four of five participants find an appropriate class, party/event enquiry and donation route without assistance; record failures and revise.
- [ ] Verify desktop and mobile Donate remain discoverable with the menu closed.
- [ ] Complete one children's class path and one adult class path through the actual agreed outcome.
- [ ] Complete birthday, corporate and private-party enquiries with correct type, visible confirmation and verified receipt.
- [ ] Verify donation success, cancellation and failure handling using the chosen service's appropriate test process.
- [ ] Complete manual keyboard, zoom/reflow and screen-reader spot checks alongside any automated accessibility checks.
- [ ] Record actual browser/device checks and unresolved limitations; a plan or successful build alone does not prove visitor behaviour.
- [ ] Complete the owner handover for content updates and enquiry handling before any separately authorised launch.

## Planning handoff

This deliverable is the design and UX checklist only. Website code, generated visual assets, integrations, payment configuration and deployment have not been created. The next design work should begin with the missing business inputs, agreed information architecture and desktop/mobile wireframes above.
