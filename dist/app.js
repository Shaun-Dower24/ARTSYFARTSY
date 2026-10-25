const studioName = 'Artsy Fartsy Creative Laboratory';
const homeView = document.querySelector('#home-view');
const pageView = document.querySelector('#page-view');
const menuToggle = document.querySelector('#menu-toggle');
const primaryNav = document.querySelector('#primary-nav');
const menuDialog = document.querySelector('#navigation-sheet');
const announcer = document.querySelector('#route-announcement');
const arrow = '<span aria-hidden="true">↗</span>';
const homeSectionIds = ['main-content', 'ways-to-create', 'studio-intro', 'featured-classes', 'gatherings', 'studio-gallery'];

function updateScrollState() {
  document.body.classList.toggle('is-scrolled', window.scrollY > 60);
}

const classes = [
  { id: 'color', name: 'Little Color Explorers', audience: 'children', age: 'Ages 5–8', day: 'Saturday', time: '10:00 AM', duration: '60 minutes', price: 28, image: 'kids.jpg', alt: 'An illustrative children’s art activity', medium: 'Paint, play & possibility', description: 'Big ideas start with little experiments. Explore color, make playful marks, and enjoy the lovely surprise of making something your own.', materials: 'Paper, paint and creative tools', note: 'Parent / guardian participation and supervision arrangements will be confirmed before real registration opens.' },
  { id: 'clay', name: 'Clay Play', audience: 'children', age: 'Ages 8–12', day: 'Sunday', time: '1:00 PM', duration: '75 minutes', price: 32, image: 'pottery.jpg', alt: 'Hands shaping a piece of clay in an illustrative pottery session', medium: 'Small hands. Big ideas.', description: 'Squish, shape and experiment with clay. This playful introduction invites young makers to follow their curiosity and explore a new way to create.', materials: 'Clay and handbuilding tools', note: 'Firing, collection and supervision details will be confirmed before real registration opens.' },
  { id: 'paint', name: 'Paint & Unwind', audience: 'adults', age: 'Adults', day: 'Thursday', time: '6:00 PM', duration: '90 minutes', price: 38, image: 'painting.jpg', alt: 'Colorful paints and brushes at an illustrative art session', medium: 'A little time for yourself', description: 'Put the week down and pick a brush up. Make space to explore color, loosen up and enjoy the process, with no perfect outcome to chase.', materials: 'Painting surface, paints and brushes', note: 'The final class format and participation details will be confirmed before real registration opens.' },
  { id: 'handbuilding', name: 'Intro to Handbuilding', audience: 'adults', age: 'Adults', day: 'Saturday', time: '2:00 PM', duration: '90 minutes', price: 45, image: 'pottery.jpg', alt: 'Hands shaping clay on a pottery wheel, used as illustrative clay-work photography', medium: 'Make something with your hands', description: 'Slow down and meet a new material. Explore simple handbuilding ideas and discover the satisfaction of turning a lump of clay into something personal.', materials: 'Clay and handbuilding tools', note: 'Firing, glazing and collection arrangements will be confirmed before real registration opens.' },
];

const events = {
  birthday: { number: '01', name: 'Birthday Parties', title: 'A birthday.<br>A masterpiece.', intro: 'More color. More imagination. A celebration with room for everyone to make something wonderfully their own.', image: 'kids.jpg', alt: 'Illustrative children’s creative activity', details: ['A creative celebration for your group', 'An activity shaped around the occasion', 'Space to explore ideas together'], formTitle: 'Let’s imagine their big day.', type: 'Birthday party' },
  corporate: { number: '02', name: 'Corporate Events', title: 'Out of the office.<br>Into possibility.', intro: 'Bring your team together around something different. Trade the usual meeting for shared ideas, a little experimentation and time to create.', image: 'studio.jpg', alt: 'Illustrative creative workspace', details: ['A fresh setting for team connection', 'Creative experiences for your group', 'An enquiry shaped around your goals'], formTitle: 'Make room for a different kind of team day.', type: 'Corporate event' },
  private: { number: '03', name: 'Private Parties', title: 'Good company.<br>Great creations.', intro: 'A gathering with a creative twist. Bring your people, mark an occasion, or simply make a little time to make something together.', image: 'painting.jpg', alt: 'Illustrative art materials ready for a creative gathering', details: ['A creative gathering for your people', 'Ideas for celebrations and get-togethers', 'An experience planned around your occasion'], formTitle: 'Tell us what you have in mind.', type: 'Private party' },
};

function breadcrumb(label, parent = 'Home', parentRoute = '#home') {
  return `<nav class="breadcrumb" aria-label="Breadcrumb"><a href="${parentRoute}">${parent}</a><span aria-hidden="true">/</span><span aria-current="page">${label}</span></nav>`;
}

function classCard(item, context = 'listing', sequence = null) {
  const heading = context === 'home' ? 'h3' : 'h2';
  const titleId = `${context}-class-title-${item.id}`;
  const sequenceMarkup = context === 'home' && sequence ? `<span class="class-sequence" aria-hidden="true">[${String(sequence).padStart(2, '0')}]</span>` : '';
  return `<article class="class-card"><a href="#class/${item.id}" class="class-card-link" aria-labelledby="${titleId}"><div class="class-image"><img src="assets/${item.image}" alt="${item.alt}" width="800" height="600" loading="lazy"><span class="image-label class-badge">${item.age}</span></div><div class="class-card-body">${sequenceMarkup}<div class="class-meta"><span>${item.audience === 'children' ? 'LITTLE MAKERS' : 'GROWN-UP CREATIVITY'}</span><span>SAMPLE CLASS</span></div><${heading} class="class-title" id="${titleId}">${item.name}</${heading}><p>${item.medium}</p><dl class="class-facts"><div><dt>Who</dt><dd>${item.age}</dd></div><div><dt>Sample session</dt><dd>${item.day} · ${item.time}</dd></div><div><dt>Duration</dt><dd>${item.duration}</dd></div><div><dt>Sample price</dt><dd>$${item.price} / person</dd></div></dl><span class="text-link">Explore this class ${arrow}</span></div></a></article>`;
}

function classesPage(audience = 'all') {
  const filtered = audience === 'all' ? classes : classes.filter(item => item.audience === audience);
  const heading = audience === 'children' ? 'Little makers.<br>Limitless ideas.' : audience === 'adults' ? 'Make time.<br>Make something.' : 'Find your<br>creative thing.';
  return `<section class="page-hero section-shell">${breadcrumb(audience === 'children' ? 'Children’s Classes' : audience === 'adults' ? 'Adult Classes' : 'Classes')}<p class="eyebrow">A LITTLE CURIOSITY GOES A LONG WAY</p><h1 class="display-title" tabindex="-1">${heading}</h1><p class="body-copy">For small hands and grown-up imaginations. Choose your audience, compare a few possibilities, and find something you would love to try.</p></section><section class="section-shell class-listing"><nav class="filter-bar" aria-label="Choose a class audience"><a href="#classes" class="filter-button ${audience === 'all' ? 'active' : ''}" ${audience === 'all' ? 'aria-current="page"' : ''}>All classes <span>4</span></a><a href="#classes/children" class="filter-button ${audience === 'children' ? 'active' : ''}" ${audience === 'children' ? 'aria-current="page"' : ''}>Children <span>2</span></a><a href="#classes/adults" class="filter-button ${audience === 'adults' ? 'active' : ''}" ${audience === 'adults' ? 'aria-current="page"' : ''}>Adults <span>2</span></a></nav><p class="notice">A preview of the possibilities. These sample classes, times and prices are for this demo only.</p><div class="class-grid">${filtered.map(item => classCard(item)).join('')}</div></section>`;
}

function classPage(item) {
  const audienceName = item.audience === 'children' ? 'Children’s Classes' : 'Adult Classes';
  return `<section class="section-shell page-hero">${breadcrumb(item.name, audienceName, `#classes/${item.audience}`)}<p class="eyebrow">SAMPLE CLASS · ${item.age.toUpperCase()}</p><h1 class="display-title" tabindex="-1">${item.name}</h1><p class="body-copy">${item.medium}</p></section><section class="section-shell detail-grid"><img class="detail-image" src="assets/${item.image}" alt="${item.alt}" width="900" height="1000"><div class="detail-copy"><p class="section-kicker">COME WITH CURIOSITY</p><h2>See what you can make.</h2><p class="body-copy">${item.description}</p><dl class="facts-list"><div><dt>Who it’s for</dt><dd>${item.age}</dd></div><div><dt>Sample session</dt><dd>${item.day} · ${item.time}</dd></div><div><dt>Duration</dt><dd>${item.duration}</dd></div><div><dt>Sample price</dt><dd>$${item.price} per person</dd></div><div><dt>Materials</dt><dd>${item.materials}</dd></div></dl><p class="notice">Illustrative class only. No actual session or place is available to book. ${item.note}</p><button class="btn btn-coral" type="button" data-scroll-form aria-controls="class-interest-form">Try demo registration ${arrow}</button></div></section><section class="section-shell"><div class="form-intro"><p class="eyebrow">YOUR NEXT LITTLE ADVENTURE</p><h2 class="form-heading">A little more color in your calendar.</h2><p>Try the registration experience with sample details. This demo does not send or store your information.</p></div>${classForm(item)}</section>`;
}

function classForm(item) {
  return `<div class="enquiry-layout"><aside class="enquiry-aside"><p class="section-kicker">YOUR CHOSEN CLASS</p><h3>${item.name}</h3><dl class="facts-list"><div><dt>Who</dt><dd>${item.age}</dd></div><div><dt>Sample session</dt><dd>${item.day} · ${item.time}</dd></div><div><dt>Duration</dt><dd>${item.duration}</dd></div><div><dt>Sample price</dt><dd>$${item.price} / person</dd></div></dl><p>A preview, not a reservation. Try the next step with sample details.</p></aside><form id="class-interest-form" class="form-grid" data-demo-form="class" data-class-name="${item.name}"><div class="field"><label for="class-name">${item.audience === 'children' ? 'Parent / guardian name' : 'Your name'}</label><input id="class-name" name="name" autocomplete="name" placeholder="Sample name" required maxlength="100"></div><div class="field"><label for="class-email">Email address</label><input id="class-email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required maxlength="200"></div><p class="form-note full-width">Both fields are required. Demo only: nothing is sent or stored, no reservation is created, and no payment is collected.</p><div class="full-width"><button class="btn btn-dark" type="submit">Preview registration ${arrow}</button></div></form></div>`;
}

function eventsPage() {
  return `<section class="page-hero section-shell">${breadcrumb('Parties & Events')}<p class="eyebrow">MAKE AN OCCASION OF IT</p><h1 class="display-title" tabindex="-1">Together is<br>a work of art.</h1><p class="body-copy">Birthdays, team days and just-because days. Choose your occasion and explore the kind of gathering you have in mind.</p></section><section class="section-shell event-grid">${Object.entries(events).map(([id, item]) => `<a href="#events/${id}" class="event-card" aria-labelledby="event-title-${id}"><div class="event-card-image"><img src="assets/${item.image}" alt="${item.alt}" width="800" height="600" loading="lazy"></div><div class="event-card-body"><span class="event-number">${item.number} / ${id === 'birthday' ? 'MAKE A WISH' : id === 'corporate' ? 'OUT OF OFFICE' : 'YOUR PEOPLE'}</span><h2 class="event-title" id="event-title-${id}">${item.name}</h2><p class="event-summary">${id === 'birthday' ? 'A colorful celebration for a birthday worth making something of.' : id === 'corporate' ? 'Bring the team together for shared ideas and hands-on creativity.' : 'Your friends, your occasion, and something new to make together.'}</p><span class="text-link">${id === 'birthday' ? 'Plan a birthday' : id === 'corporate' ? 'Explore a team event' : 'Plan a private party'} ${arrow}</span></div></a>`).join('')}</section>`;
}

function eventForm(type = '') {
  const isGeneral = !type;
  const topics = [...(isGeneral ? ['General question', 'Classes', 'Access / visiting'] : []), ...Object.values(events).map(item => item.type)];
  const selectedTopic = type || 'General question';
  return `<div class="enquiry-layout"><aside class="enquiry-aside"><p class="section-kicker">${isGeneral ? 'A QUESTION IS A GOOD START' : 'YOUR CREATIVE GET-TOGETHER'}</p><h3>${isGeneral ? 'What would you like to know?' : type}</h3><p>${isGeneral ? 'Ask about a class, visiting the studio, or a gathering you have in mind. Choose the topic that feels closest.' : 'Start with your occasion and an idea. You can add a preferred date or group details if you already know them.'}</p><p class="notice">Demo enquiry only. Nothing is sent or stored. Event availability and arrangements will be confirmed before real enquiries open.</p></aside><form id="event-enquiry-form" class="form-grid" data-demo-form="${isGeneral ? 'contact' : 'event'}"><div class="field"><label for="event-name">Your name</label><input id="event-name" name="name" placeholder="Sample name" autocomplete="name" required maxlength="100"></div><div class="field"><label for="event-email">Email address</label><input id="event-email" name="email" placeholder="you@example.com" type="email" autocomplete="email" required maxlength="200"></div><div class="field full-width"><label for="event-type">${isGeneral ? 'What would you like to talk about?' : 'What are you planning?'}</label><select id="event-type" name="eventType" required>${topics.map(topic => `<option ${topic === selectedTopic ? 'selected' : ''}>${topic}</option>`).join('')}</select></div><div class="field full-width"><label for="event-message">${isGeneral ? 'Your question or idea' : 'Tell us a little about it'}</label><textarea id="event-message" name="message" rows="4" placeholder="${isGeneral ? 'What would you like to know?' : 'The occasion, your ideas, your questions…'}" required maxlength="2000"></textarea></div><details class="optional-details full-width"><summary>Add a few details <span>(optional)</span></summary><div class="optional-fields"><div class="field"><label for="event-date">Preferred date</label><input id="event-date" name="date" type="date"></div><div class="field"><label for="event-guests">Approximate group size</label><input id="event-guests" name="guests" type="number" min="1" max="999" step="1" placeholder="e.g. 12" inputmode="numeric"></div><div class="field full-width"><label for="event-phone">Phone</label><input id="event-phone" name="phone" type="tel" autocomplete="tel" placeholder="A number to reach you" maxlength="40"></div></div></details><p class="form-note full-width">Name, email, topic and message are required. Please use sample details. This demo does not send a message or reserve a date.</p><div class="full-width"><button class="btn btn-dark" type="submit">Preview enquiry ${arrow}</button></div></form></div>`;
}

function eventPage(item) {
  return `<section class="page-hero section-shell">${breadcrumb(item.name, 'Parties & Events', '#events')}<p class="eyebrow">${item.name.toUpperCase()}</p><h1 class="display-title" tabindex="-1">${item.title}</h1><p class="body-copy">${item.intro}</p></section><section class="section-shell detail-grid"><img class="detail-image" src="assets/${item.image}" alt="${item.alt}" width="900" height="1000"><div class="detail-copy"><p class="section-kicker">YOUR PEOPLE. YOUR OCCASION.</p><h2>A little out of the ordinary.</h2><ul class="detail-facts">${item.details.map(detail => `<li>${detail}</li>`).join('')}</ul><p class="body-copy">Start with your idea and the kind of gathering you have in mind. The next step would be a conversation about the experience that suits your group.</p><p class="notice">Demo concept. Activities, age suitability, capacity, duration, pricing and booking arrangements are still to be confirmed by the studio.</p><button class="btn btn-coral" type="button" data-scroll-form aria-controls="event-enquiry-form">Let’s plan something ${arrow}</button></div></section><section class="section-shell"><div class="form-intro"><p class="eyebrow">START WITH A LITTLE IDEA</p><h2 class="form-heading">${item.formTitle}</h2><p>Explore the enquiry experience below. This demo does not send an enquiry or reserve a date.</p></div>${eventForm(item.type)}</section>`;
}

function aboutPage() {
  return `<section class="page-hero section-shell">${breadcrumb('About')}<p class="eyebrow">ARTSY FARTSY CREATIVE LABORATORY</p><h1 class="display-title" tabindex="-1">A place for<br>possibility.</h1><p class="body-copy">A creative studio in Carmel, Indiana, bringing classes, celebrations and creative experiences together.</p></section><section class="section-shell detail-grid"><img class="detail-image about-image" src="assets/studio.jpg" alt="Illustrative creative studio photography" width="900" height="1000"><div class="detail-copy about-copy"><p class="section-kicker">CURIOUS MINDS WELCOME</p><h2>Some things are better made together.</h2><p class="body-copy">Artsy Fartsy Creative Laboratory is about finding your way into creativity, whether you’re choosing a class for a child, making time for yourself, or bringing a group together.</p><p class="body-copy">This website demo explores a welcoming way to discover children’s and adult classes, birthday parties, corporate events and private gatherings.</p><a href="#classes" class="btn btn-dark">Find your creative thing ${arrow}</a><p class="notice">The studio’s full story, mission and original photography will be added with approved content.</p></div></section>`;
}

function visitPage() {
  return `<section class="page-hero section-shell">${breadcrumb('Visit / Contact')}<p class="eyebrow">CARMEL, INDIANA</p><h1 class="display-title" tabindex="-1">Come curious.<br>Leave inspired.</h1><p class="body-copy">Find a class, plan a gathering, or start with a question. There’s a creative route for every kind of occasion.</p></section><section class="section-shell visit-grid"><div class="visit-card"><span class="section-kicker">FIND THE STUDIO</span><h2>Carmel, Indiana.</h2><p>The studio address, opening hours, directions, parking and accessibility information will be added here once confirmed.</p><p class="notice">Visit information is a placeholder in this demo. Please don’t use it to plan a real visit.</p><a href="#classes" class="text-link">Explore sample classes ${arrow}</a></div><div class="visit-card"><span class="section-kicker">PLAN A LITTLE SOMETHING</span><h2>Let’s make it happen.</h2><p>For a birthday, team day or private gathering, choose your occasion and try the demo enquiry experience.</p><a href="#events" class="btn btn-coral">Plan an event ${arrow}</a></div></section><section class="section-shell"><div class="form-intro"><p class="eyebrow">SOMETHING IN MIND?</p><h2 class="form-heading">Start a creative conversation.</h2><p>Use sample details to explore this demo form. Messages are not sent or stored.</p></div>${eventForm()}</section>`;
}

function donatePage() {
  return `<section class="page-hero section-shell">${breadcrumb('Donate')}<p class="eyebrow">A LITTLE GENEROSITY. A LOT OF POSSIBILITY.</p><h1 class="display-title" tabindex="-1">Help creativity<br>keep growing.</h1><p class="body-copy">Make space for more creative possibilities. Explore a simple giving experience designed around a clear, thoughtful next step.</p><button class="btn btn-coral" data-donate type="button">Try a demo donation ${arrow}</button></section><section class="section-shell"><div class="notice"><h2>A preview of giving.</h2><p>This donation experience is for demonstration only. No payment is collected. The studio’s approved giving purpose, recipient, payment destination and receipt arrangements will be confirmed before real donations are enabled.</p></div></section>`;
}

let returnMenuFocus = true;

function syncMenuState() {
  const isOpen = Boolean(menuDialog?.open);
  menuToggle?.setAttribute('aria-expanded', String(isOpen));
  menuToggle?.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
}

function closeMenu(restoreFocus = false) {
  returnMenuFocus = restoreFocus;
  if (menuDialog?.open) menuDialog.close();
  syncMenuState();
  if (restoreFocus) menuToggle?.focus();
}

function closeDropdowns(except = null) {
  primaryNav?.querySelectorAll('.nav-dropdown[open]').forEach(dropdown => {
    if (dropdown !== except) dropdown.open = false;
  });
}

function renderRoute(moveFocus = true) {
  const fragment = (location.hash.slice(1) || 'home').replace(/\/$/, '');
  const inPageId = homeSectionIds.includes(fragment) ? fragment : null;
  const route = inPageId ? 'home' : fragment;
  let title = 'Creative classes, parties & possibilities';
  let markup = '';
  if (route === 'classes' || route === 'classes/children' || route === 'classes/adults') {
    const audience = route.split('/')[1] || 'all';
    markup = classesPage(audience);
    title = audience === 'all' ? 'Classes' : audience === 'children' ? 'Children’s Classes' : 'Adult Classes';
  } else if (route.startsWith('class/')) {
    const item = classes.find(item => item.id === route.split('/')[1]);
    if (item) { markup = classPage(item); title = item.name; }
  } else if (route === 'events') {
    markup = eventsPage(); title = 'Parties & Events';
  } else if (route.startsWith('events/')) {
    const item = events[route.split('/')[1]];
    if (item) { markup = eventPage(item); title = item.name; }
  } else if (route === 'about') { markup = aboutPage(); title = 'About';
  } else if (route === 'visit') { markup = visitPage(); title = 'Visit / Contact';
  } else if (route === 'donate') { markup = donatePage(); title = 'Donate'; }

  const isHome = route === 'home';
  document.body.dataset.view = isHome ? 'home' : 'page';
  document.body.dataset.route = route;
  if (!isHome && !markup) {
    title = 'Page not found';
    markup = '<section class="page-hero section-shell"><p class="eyebrow">A LITTLE DETOUR</p><h1 class="display-title" tabindex="-1">Let’s find<br>your way back.</h1><p class="body-copy">This page isn’t part of the demo, but there’s plenty to explore.</p><a href="#home" class="btn btn-dark">Back to home ↗</a></section>';
  }
  homeView.hidden = !isHome;
  pageView.hidden = isHome;
  pageView.innerHTML = markup;
  document.title = `${title} | ${studioName}`;
  closeMenu(false);
  closeDropdowns();
  document.querySelectorAll('#primary-nav a[href^="#"], #navigation-sheet a[href^="#"]').forEach(link => {
    const destination = link.getAttribute('href').slice(1);
    const current = route === destination;
    if (current) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
  });
  primaryNav?.querySelectorAll('.nav-dropdown').forEach(dropdown => {
    const section = dropdown.dataset.section;
    dropdown.classList.toggle('is-current', section === 'classes' ? route.startsWith('class') : section === 'events' && route.startsWith('events'));
  });
  if (moveFocus) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    updateScrollState();
    const heading = (isHome ? homeView : pageView).querySelector('h1');
    heading?.setAttribute('tabindex', '-1');
    heading?.focus({ preventScroll: true });
    if (announcer) announcer.textContent = `${title} page`;
  }
  if (inPageId) requestAnimationFrame(() => {
    const target = document.getElementById(inPageId);
    target?.setAttribute('tabindex', '-1');
    target?.focus({ preventScroll: true });
    target?.scrollIntoView({ behavior: 'instant', block: 'start' });
    updateScrollState();
  });
}

const donationDialog = document.createElement('dialog');
donationDialog.id = 'donation-dialog';
donationDialog.className = 'donation-dialog';
donationDialog.setAttribute('aria-labelledby', 'donation-title');
donationDialog.setAttribute('aria-describedby', 'donation-intro');
document.body.append(donationDialog);
let donationTrigger = null;

function donationMarkup() {
  return `<div class="dialog-panel"><button class="dialog-close" type="button" data-close-dialog aria-label="Close donation preview">×</button><form id="donation-form"><div class="dialog-scroll"><div class="dialog-header"><p class="eyebrow">A LITTLE GENEROSITY</p><h2 id="donation-title">Make room<br>for possibility.</h2><p id="donation-intro" class="dialog-copy">Explore the giving experience. This is a demo, and no payment will be taken.</p></div><fieldset class="donation-fieldset"><legend class="dialog-label">Choose a sample amount</legend><div class="donation-options">${['25', '50', '100', 'other'].map(value => `<label class="amount-choice"><input type="radio" name="amount" value="${value}" ${value === '50' ? 'checked' : ''} required><span class="choice-content">${value === 'other' ? 'Other' : `$${value}`}</span></label>`).join('')}</div></fieldset><div class="field custom-amount" hidden><label for="custom-donation">Your amount in US dollars</label><input id="custom-donation" class="amount-input" name="customAmount" type="number" min="1" max="100000" step="0.01" inputmode="decimal" placeholder="Enter $1 or more" disabled><small>Choose an amount from $1 to $100,000 for this preview.</small></div><fieldset class="donation-fieldset"><legend class="dialog-label">Giving frequency</legend><div class="frequency-options"><label class="frequency-choice"><input type="radio" name="frequency" value="one-time" checked required><span class="choice-content">One time</span></label><label class="frequency-choice"><input type="radio" name="frequency" value="monthly"><span class="choice-content">Monthly</span></label></div></fieldset><p class="form-note">Sample giving options only. The approved giving purpose and real donation arrangements will be confirmed by the studio.</p></div><div class="dialog-footer"><span class="donation-summary" aria-live="polite">$50.00 · One-time preview</span><button class="btn btn-coral" type="submit">Preview donation ${arrow}</button><p class="form-note">No payment details. No donation or commitment is created.</p></div></form></div>`;
}

function openDonation(trigger) {
  donationTrigger = trigger;
  donationDialog.innerHTML = donationMarkup();
  donationDialog.showModal();
  donationDialog.querySelector('input[name="amount"]:checked')?.focus();
}

menuToggle?.addEventListener('click', () => {
  if (!menuDialog) return;
  if (menuDialog.open) { closeMenu(true); return; }
  returnMenuFocus = true;
  closeDropdowns();
  menuDialog.showModal();
  syncMenuState();
  menuDialog.querySelector('[data-close-menu]')?.focus();
});

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape' || menuDialog?.open || donationDialog.open) return;
  const openDropdown = primaryNav?.querySelector('.nav-dropdown[open]');
  if (openDropdown) {
    event.preventDefault();
    closeDropdowns();
    openDropdown.querySelector('summary')?.focus();
  }
});

menuDialog?.addEventListener('cancel', () => { returnMenuFocus = true; });
menuDialog?.addEventListener('close', () => {
  syncMenuState();
  if (returnMenuFocus) menuToggle?.focus();
});
menuDialog?.addEventListener('click', event => {
  const bounds = menuDialog.getBoundingClientRect();
  if (event.target === menuDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) closeMenu(true);
});
primaryNav?.querySelectorAll('.nav-dropdown').forEach(dropdown => {
  dropdown.addEventListener('toggle', () => { if (dropdown.open) closeDropdowns(dropdown); });
});

document.addEventListener('click', event => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  if (target.closest('[data-close-menu]')) { closeMenu(true); return; }
  if (target.closest('#navigation-sheet a')) closeMenu(false);
  if (target.closest('#primary-nav a') || !target.closest('.nav-dropdown')) closeDropdowns();
  const inPageLink = target.closest('a[href^="#"]');
  const inPageId = inPageLink?.getAttribute('href').slice(1);
  if (inPageLink && homeSectionIds.includes(inPageId)) {
    event.preventDefault();
    if (inPageId !== 'main-content' && homeView.hidden) {
      location.hash = inPageId;
      return;
    }
    const section = document.getElementById(inPageId);
    section?.setAttribute('tabindex', '-1');
    section?.focus({ preventScroll: true });
    section?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    updateScrollState();
    return;
  }
  const currentRouteLink = target.closest('a[href^="#"]');
  if (currentRouteLink && currentRouteLink.getAttribute('href') === location.hash && !target.closest('[data-donate]')) {
    event.preventDefault();
    renderRoute(true);
    return;
  }
  const donate = target.closest('[data-donate]');
  if (donate) { event.preventDefault(); closeMenu(false); openDonation(donate); return; }
  const classLink = target.closest('[data-class]');
  if (classLink && !classLink.getAttribute('href')) {
    const id = classLink.dataset.class;
    if (classes.some(item => item.id === id)) location.hash = `class/${id}`;
  }
  const scrollForm = target.closest('[data-scroll-form]');
  if (scrollForm) {
    const form = document.getElementById(scrollForm.getAttribute('aria-controls'));
    form?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
    form?.querySelector('input')?.focus({ preventScroll: true });
  }
  if (target.closest('[data-close-dialog]')) donationDialog.close();
});

donationDialog.addEventListener('click', event => {
  const bounds = donationDialog.getBoundingClientRect();
  if (event.target === donationDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) donationDialog.close();
});
donationDialog.addEventListener('close', () => {
  const visibleTrigger = donationTrigger?.isConnected && donationTrigger.getClientRects().length > 0;
  const focusTarget = visibleTrigger ? donationTrigger : document.querySelector('.donate-header') || menuToggle;
  focusTarget?.focus();
});

function updateDonationSummary() {
  const form = donationDialog.querySelector('#donation-form');
  if (!form) return;
  const values = new FormData(form);
  const selected = values.get('amount');
  const amount = Number(selected === 'other' ? values.get('customAmount') : selected);
  const frequency = values.get('frequency') === 'monthly' ? 'Monthly preview' : 'One-time preview';
  const summary = form.querySelector('.donation-summary');
  summary.textContent = Number.isFinite(amount) && amount >= 1 && amount <= 100000
    ? `${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)} · ${frequency}`
    : `Choose an amount · ${frequency}`;
}

document.addEventListener('change', event => {
  const input = event.target;
  if (input instanceof HTMLSelectElement && input.id === 'event-type') {
    const topicHeading = input.closest('.enquiry-layout')?.querySelector('.enquiry-aside h3');
    if (topicHeading) topicHeading.textContent = input.value;
    return;
  }
  if (!(input instanceof HTMLInputElement) || !input.closest('#donation-form')) return;
  if (input.name === 'amount') {
    const custom = donationDialog.querySelector('.custom-amount');
    const amountInput = donationDialog.querySelector('#custom-donation');
    const isCustom = input.value === 'other';
    custom.hidden = !isCustom;
    amountInput.disabled = !isCustom;
    amountInput.required = isCustom;
  }
  updateDonationSummary();
});
document.addEventListener('input', event => {
  if (event.target instanceof HTMLInputElement && event.target.id === 'custom-donation') updateDonationSummary();
});
document.addEventListener('invalid', event => {
  if (event.target instanceof Element) {
    const optionalDetails = event.target.closest('details.optional-details');
    if (optionalDetails) optionalDetails.open = true;
  }
}, true);

document.addEventListener('submit', event => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  if (form.id === 'donation-form') {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const selected = values.get('amount');
    const amount = Number(selected === 'other' ? values.get('customAmount') : selected);
    if (!Number.isFinite(amount) || amount < 1 || amount > 100000) return;
    const frequency = values.get('frequency') || 'one-time';
    donationDialog.innerHTML = '<div class="dialog-panel"><button class="dialog-close" type="button" data-close-dialog aria-label="Close donation preview">×</button><div class="dialog-scroll"><p class="eyebrow">DEMO COMPLETE</p><h2 id="donation-title" tabindex="-1">That’s a lovely<br>possibility.</h2><p class="donation-summary"></p><p id="donation-intro">This was a demo. No payment was taken and no donation or recurring commitment was created.</p></div><div class="dialog-footer"><button class="btn btn-dark" type="button" data-close-dialog>Back to exploring ↗</button></div></div>';
    donationDialog.querySelector('.donation-summary').textContent = `${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)} · ${frequency === 'monthly' ? 'Monthly giving preview' : 'One-time giving preview'}`;
    donationDialog.querySelector('#donation-title').focus();
    return;
  }
  if (!form.matches('[data-demo-form]')) return;
  event.preventDefault();
  if (!form.reportValidity()) return;
  const isClass = form.dataset.demoForm === 'class';
  const isContact = form.dataset.demoForm === 'contact';
  const className = form.dataset.className;
  const topic = new FormData(form).get('eventType');
  form.innerHTML = `<div class="success-panel full-width" role="status"><p class="eyebrow">DEMO COMPLETE</p><h2 tabindex="-1">${isClass ? 'A little creativity, previewed.' : isContact ? 'A conversation, previewed.' : 'Your idea has a place to start.'}</h2><p>${isClass ? 'You’ve explored the registration experience. No registration or reservation was created and no payment was taken.' : 'You’ve explored the enquiry experience. No message was sent and no event date was reserved.'}</p><p>Your details have not been stored.</p><a href="${isClass ? '#classes' : isContact ? '#visit' : '#events'}" class="btn btn-dark">${isClass ? 'Explore more classes' : isContact ? 'Ask another question' : 'Explore more gatherings'} ${arrow}</a></div>`;
  if (isClass && className) {
    const label = document.createElement('p');
    label.className = 'notice';
    label.textContent = `Sample class: ${className}`;
    form.querySelector('.success-panel').insertBefore(label, form.querySelector('.btn'));
  }
  if (topic) {
    const label = document.createElement('p');
    label.className = 'notice';
    label.textContent = `Your chosen topic: ${topic}`;
    form.querySelector('.success-panel').insertBefore(label, form.querySelector('.btn'));
  }
  form.querySelector('h2')?.focus({ preventScroll: true });
});

document.querySelectorAll('[data-year]').forEach(element => { element.textContent = String(new Date().getFullYear()); });
const homeCards = document.querySelector('#home-class-cards');
if (homeCards) homeCards.innerHTML = ['color', 'handbuilding', 'paint'].map((id, index) => classCard(classes.find(item => item.id === id), 'home', index + 1)).join('');
syncMenuState();
window.addEventListener('hashchange', () => renderRoute(true));
window.addEventListener('scroll', updateScrollState, { passive: true });
renderRoute(false);
updateScrollState();
