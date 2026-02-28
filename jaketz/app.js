// ===== UNSPLASH CONFIG =====
const UNSPLASH_ACCESS_KEY = 'l9PKxOdxIFFdPvMRbLQ8MSCOiNqzjwObOGV3MioQCZw';
const UNSPLASH_API = 'https://api.unsplash.com';

// ===== PLANET LISTINGS DATA =====
const listings = [
  {
    id: 1,
    planet: 'Mars',
    pricePerNight: 12500,
    rating: 4.8,
    reviews: 342,
    oxygen: 'supplied',
    lifeSupport: 'full',
    gravity: 'low',
    amenities: ['radiation', 'temp', 'comms', 'landing', 'dust-storm-deck', 'rover-rental'],
    searchQuery: 'mars planet red surface',
    imageUrl: null,
    photographer: null,
    photographerUrl: null,
  },
  {
    id: 2,
    planet: 'Mars',
    pricePerNight: 8900,
    rating: 4.6,
    reviews: 218,
    oxygen: 'supplied',
    lifeSupport: 'full',
    gravity: 'low',
    amenities: ['radiation', 'temp', 'comms', 'canyon-rappelling', 'fossil-hunt-kit'],
    searchQuery: 'mars canyon landscape',
    imageUrl: null,
    photographer: null,
    photographerUrl: null,
  },
  {
    id: 3,
    planet: 'Moon',
    pricePerNight: 4200,
    rating: 4.9,
    reviews: 1023,
    oxygen: 'supplied',
    lifeSupport: 'full',
    gravity: 'low',
    amenities: ['radiation', 'temp', 'comms', 'landing', 'apollo-museum', 'earth-gazing-lounge', 'low-g-playground'],
    searchQuery: 'moon surface lunar',
    imageUrl: null,
    photographer: null,
    photographerUrl: null,
  },
  {
    id: 4,
    planet: 'Venus',
    pricePerNight: 22000,
    rating: 4.3,
    reviews: 87,
    oxygen: 'supplied',
    lifeSupport: 'full',
    gravity: 'earth-like',
    amenities: ['radiation', 'temp', 'comms', 'acid-rain-observatory', 'cloud-surfing-gear'],
    searchQuery: 'venus planet clouds atmosphere',
    imageUrl: null,
    photographer: null,
    photographerUrl: null,
  },
  {
    id: 5,
    planet: 'Jupiter — Europa',
    pricePerNight: 45000,
    rating: 4.7,
    reviews: 56,
    oxygen: 'supplied',
    lifeSupport: 'full',
    gravity: 'low',
    amenities: ['radiation', 'temp', 'comms', 'landing', 'submarine-tour', 'bioluminescence-viewer'],
    searchQuery: 'europa moon ice ocean',
    imageUrl: null,
    photographer: null,
    photographerUrl: null,
  },
  {
    id: 6,
    planet: 'Saturn',
    pricePerNight: 78000,
    rating: 4.9,
    reviews: 134,
    oxygen: 'supplied',
    lifeSupport: 'full',
    gravity: 'zero',
    amenities: ['radiation', 'temp', 'comms', 'landing', 'ring-surfing', 'zero-g-spa', 'space-champagne-bar'],
    searchQuery: 'saturn rings planet space',
    imageUrl: null,
    photographer: null,
    photographerUrl: null,
  },
  {
    id: 7,
    planet: 'Saturn — Titan',
    pricePerNight: 35000,
    rating: 4.5,
    reviews: 92,
    oxygen: 'supplied',
    lifeSupport: 'full',
    gravity: 'low',
    amenities: ['radiation', 'temp', 'comms', 'methane-fishing', 'haze-photography-studio'],
    searchQuery: 'titan moon saturn orange haze',
    imageUrl: null,
    photographer: null,
    photographerUrl: null,
  },
  {
    id: 8,
    planet: 'Mercury',
    pricePerNight: 18000,
    rating: 4.1,
    reviews: 41,
    oxygen: 'supplied',
    lifeSupport: 'partial',
    gravity: 'low',
    amenities: ['radiation', 'temp', 'solar-oven-kitchen', 'shadow-ice-skating'],
    searchQuery: 'mercury planet surface crater',
    imageUrl: null,
    photographer: null,
    photographerUrl: null,
  },
  {
    id: 9,
    planet: 'Neptune',
    pricePerNight: 120000,
    rating: 4.4,
    reviews: 19,
    oxygen: 'supplied',
    lifeSupport: 'full',
    gravity: 'zero',
    amenities: ['radiation', 'temp', 'comms', 'landing', 'wind-listening-room', 'deep-space-telescope'],
    searchQuery: 'neptune blue planet deep space',
    imageUrl: null,
    photographer: null,
    photographerUrl: null,
  },
  {
    id: 10,
    planet: 'Earth',
    pricePerNight: 2800,
    rating: 5.0,
    reviews: 4521,
    oxygen: 'natural',
    lifeSupport: 'full',
    gravity: 'earth-like',
    amenities: ['radiation', 'temp', 'comms', 'landing', 'rain-room', 'real-food-restaurant', 'pet-a-dog-lounge'],
    searchQuery: 'earth planet blue atmosphere',
    imageUrl: null,
    photographer: null,
    photographerUrl: null,
  },
  {
    id: 11,
    planet: 'Jupiter',
    pricePerNight: 55000,
    rating: 4.2,
    reviews: 38,
    oxygen: 'supplied',
    lifeSupport: 'partial',
    gravity: 'high',
    amenities: ['radiation', 'comms', 'storm-viewing-platform', 'magnetic-field-spa'],
    searchQuery: 'jupiter planet storm red spot',
    imageUrl: null,
    photographer: null,
    photographerUrl: null,
  },
  {
    id: 12,
    planet: 'Pluto',
    pricePerNight: 150000,
    rating: 4.6,
    reviews: 7,
    oxygen: 'none',
    lifeSupport: 'minimal',
    gravity: 'low',
    amenities: ['temp', 'edge-certificate', 'nitrogen-ice-skating', 'starlight-observatory'],
    searchQuery: 'pluto planet dwarf icy',
    imageUrl: null,
    photographer: null,
    photographerUrl: null,
  },
];

// ===== LISTING REVIEWS =====
const listingReviews = {
  1: [
    { id: 'r1_1', user: 'AstroNeil42', rating: 5, date: '2146-11-15' },
    { id: 'r1_2', user: 'MarsDustLover', rating: 4, date: '2146-09-22' },
    { id: 'r1_3', user: 'RedPlanetShutterbug', rating: 5, date: '2146-07-08' },
  ],
  2: [
    { id: 'r2_1', user: 'GeoRockHound', rating: 5, date: '2146-10-03' },
    { id: 'r2_2', user: 'LightSleeper99', rating: 2, date: '2146-08-15' },
    { id: 'r2_3', user: 'RoverRider2145', rating: 3, date: '2146-06-20' },
  ],
  3: [
    { id: 'r3_1', user: 'HistoryBuff3000', rating: 5, date: '2146-12-01' },
    { id: 'r3_2', user: 'BouncyTraveler', rating: 5, date: '2146-10-18' },
    { id: 'r3_3', user: 'LunarLarry', rating: 2, date: '2146-09-05' },
    { id: 'r3_4', user: 'QuietSeeker77', rating: 3, date: '2146-07-22' },
  ],
  4: [
    { id: 'r4_1', user: 'SunsetChaser', rating: 5, date: '2146-11-28' },
    { id: 'r4_2', user: 'QueasyQuin', rating: 2, date: '2146-09-10' },
    { id: 'r4_3', user: 'NoseKnows', rating: 1, date: '2146-08-01' },
  ],
  5: [
    { id: 'r5_1', user: 'AstroBiologist', rating: 5, date: '2146-11-02' },
    { id: 'r5_2', user: 'DeepDiver22', rating: 3, date: '2146-08-30' },
    { id: 'r5_3', user: 'CosmicExplorer', rating: 5, date: '2146-06-15' },
  ],
  6: [
    { id: 'r6_1', user: 'RingWatcher', rating: 5, date: '2146-12-10' },
    { id: 'r6_2', user: 'ChampagneFail', rating: 3, date: '2146-10-25' },
    { id: 'r6_3', user: 'GroundedGreta', rating: 2, date: '2146-09-14' },
  ],
  7: [
    { id: 'r7_1', user: 'AlienLandscaper', rating: 5, date: '2146-11-20' },
    { id: 'r7_2', user: 'WetSuitWoes', rating: 2, date: '2146-08-12' },
  ],
  8: [
    { id: 'r8_1', user: 'TempTantrum', rating: 2, date: '2146-10-05' },
    { id: 'r8_2', user: 'SolarGazer', rating: 5, date: '2146-08-22' },
    { id: 'r8_3', user: 'CrispyTraveler', rating: 1, date: '2146-07-03' },
  ],
  9: [
    { id: 'r9_1', user: 'HermitHank', rating: 5, date: '2146-11-08' },
    { id: 'r9_2', user: 'MarcusFriend', rating: 1, date: '2146-04-17' },
    { id: 'r9_3', user: 'IsolationStation', rating: 2, date: '2146-09-29' },
  ],
  10: [
    { id: 'r10_1', user: 'HomesickHannah', rating: 5, date: '2146-12-15' },
    { id: 'r10_2', user: 'EarlyBirdHater', rating: 3, date: '2146-10-30' },
    { id: 'r10_3', user: 'PetrichorFan', rating: 5, date: '2146-09-18' },
  ],
  11: [
    { id: 'r11_1', user: 'AdrenalineJax', rating: 5, date: '2146-11-25' },
    { id: 'r11_2', user: 'SpaceChuck', rating: 1, date: '2146-10-12' },
    { id: 'r11_3', user: 'DentalDave', rating: 2, date: '2146-08-28' },
  ],
  12: [
    { id: 'r12_1', user: 'EdgeLord2146', rating: 5, date: '2146-12-20' },
    { id: 'r12_2', user: 'LonelyLisa', rating: 2, date: '2146-11-01' },
  ],
};

// ===== ADD-ONS =====
const addons = [
  {
    id: 'life-insurance',
    icon: '🛡️',
    pricePerNight: 1500,
  },
  {
    id: 'rescue-plan',
    icon: '🚀',
    pricePerNight: 2200,
  },
  {
    id: 'medical-kit',
    icon: '🏥',
    pricePerNight: 800,
  },
  {
    id: 'oxygen-premium',
    icon: '💨',
    pricePerNight: 350,
  },
];

// ===== STATE =====
let cart = [];
let imageCache = {};

// ===== UNSPLASH FETCH =====
async function fetchUnsplashImage(query) {
  if (imageCache[query]) return imageCache[query];
  try {
    const res = await fetch(
      `${UNSPLASH_API}/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
      { headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` } }
    );
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      const photo = data.results[0];
      const result = {
        url: photo.urls.regular,
        photographer: photo.user.name,
        photographerUrl: photo.user.links.html,
      };
      imageCache[query] = result;
      return result;
    }
  } catch (err) {
    console.error('Unsplash fetch error:', err);
  }
  return { url: '', photographer: '', photographerUrl: '' };
}

// ===== RENDER HELPERS =====
function getListingTitle(listing) {
  return t(`listing.${listing.id}.title`);
}

function getListingDesc(listing) {
  return t(`listing.${listing.id}.desc`);
}

function getAddonName(addon) {
  return t(`addon.${addon.id}.name`);
}

function getAddonDesc(addon) {
  return t(`addon.${addon.id}.desc`);
}

function oxygenTag(type) {
  const map = {
    natural: { label: t('tag.oxygen.natural'), cls: 'tag-green' },
    supplied: { label: t('tag.oxygen.supplied'), cls: 'tag-yellow' },
    none: { label: t('tag.oxygen.none'), cls: 'tag-red' },
  };
  const tag = map[type] || map.none;
  return `<span class="tag ${tag.cls}">${tag.label}</span>`;
}

function lifeSupportTag(type) {
  const map = {
    full: { label: t('tag.lifeSupport.full'), cls: 'tag-green' },
    partial: { label: t('tag.lifeSupport.partial'), cls: 'tag-yellow' },
    minimal: { label: t('tag.lifeSupport.minimal'), cls: 'tag-red' },
  };
  const tag = map[type] || map.minimal;
  return `<span class="tag ${tag.cls}">${tag.label}</span>`;
}

function gravityTag(type) {
  const map = {
    'earth-like': t('tag.gravity.earth-like'),
    low: t('tag.gravity.low'),
    high: t('tag.gravity.high'),
    zero: t('tag.gravity.zero'),
  };
  return `<span class="tag tag-blue">${map[type] || type}</span>`;
}

function formatPrice(n) {
  return '$' + n.toLocaleString('en-US');
}

function starsHTML(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
}

// ===== RENDER CARDS =====
function renderSkeletons() {
  const grid = document.getElementById('listingsGrid');
  grid.innerHTML = Array(6).fill('<div class="skeleton skeleton-card"></div>').join('');
}

async function renderListings(filteredListings) {
  const grid = document.getElementById('listingsGrid');
  grid.innerHTML = '';

  if (filteredListings.length === 0) {
    grid.innerHTML = `<p style="color:var(--text-muted);text-align:center;grid-column:1/-1;padding:60px 0;">${t('listings.noResults')}</p>`;
    return;
  }

  // Fetch all images in parallel
  const imagePromises = filteredListings.map(l => fetchUnsplashImage(l.searchQuery));
  const images = await Promise.all(imagePromises);

  filteredListings.forEach((listing, i) => {
    const img = images[i];
    listing.imageUrl = img.url;
    listing.photographer = img.photographer;
    listing.photographerUrl = img.photographerUrl;

    const title = getListingTitle(listing);
    const card = document.createElement('div');
    card.className = 'listing-card';
    card.onclick = () => openModal(listing);
    card.innerHTML = `
      <img class="card-image" src="${img.url}" alt="${title}" loading="lazy">
      <div class="card-body">
        <div class="card-planet">${listing.planet}</div>
        <div class="card-title">${title}</div>
        <div class="card-tags">
          ${oxygenTag(listing.oxygen)}
          ${lifeSupportTag(listing.lifeSupport)}
          ${gravityTag(listing.gravity)}
        </div>
        <div class="card-price">${formatPrice(listing.pricePerNight)} <span>${t('listings.perNight')}</span></div>
        <div class="card-rating">
          <span class="stars">${starsHTML(listing.rating)}</span>
          ${listing.rating} (${listing.reviews} ${t('listings.reviews')})
        </div>
        <div class="photo-credit">${t('listings.photoBy')} <a href="${img.photographerUrl}?utm_source=jaketz&utm_medium=referral" target="_blank">${img.photographer}</a> ${t('listings.onUnsplash')} <a href="https://unsplash.com?utm_source=jaketz&utm_medium=referral" target="_blank">Unsplash</a></div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ===== MODAL =====
function openModal(listing) {
  const modal = document.getElementById('listingModal');
  const body = document.getElementById('modalBody');

  const title = getListingTitle(listing);
  const desc = getListingDesc(listing);

  body.innerHTML = `
    <img class="modal-image" src="${listing.imageUrl}" alt="${title}">
    <div class="photo-credit" style="margin-bottom:16px;">${t('listings.photoBy')} <a href="${listing.photographerUrl}?utm_source=jaketz&utm_medium=referral" target="_blank">${listing.photographer}</a> ${t('listings.onUnsplash')} <a href="https://unsplash.com?utm_source=jaketz&utm_medium=referral" target="_blank">Unsplash</a></div>
    <h2>${title}</h2>
    <div class="planet-name">${listing.planet}</div>
    <p class="description">${desc}</p>

    <div class="detail-grid">
      <div class="detail-item">
        <div class="label">${t('modal.oxygen')}</div>
        <div class="value">${oxygenTag(listing.oxygen)}</div>
      </div>
      <div class="detail-item">
        <div class="label">${t('modal.lifeSupport')}</div>
        <div class="value">${lifeSupportTag(listing.lifeSupport)}</div>
      </div>
      <div class="detail-item">
        <div class="label">${t('modal.gravity')}</div>
        <div class="value">${gravityTag(listing.gravity)}</div>
      </div>
      <div class="detail-item">
        <div class="label">${t('modal.amenities')}</div>
        <div class="value amenity-tags">${listing.amenities.map(a => `<span class="amenity-tag">${t('modal.amenity.' + a)}</span>`).join('')}</div>
      </div>
      <div class="detail-item">
        <div class="label">${t('modal.rating')}</div>
        <div class="value"><span class="stars">${starsHTML(listing.rating)}</span> ${listing.rating} (${listing.reviews} ${t('listings.reviews')})</div>
      </div>
      <div class="detail-item">
        <div class="label">${t('modal.basePrice')}</div>
        <div class="value">${formatPrice(listing.pricePerNight)} ${t('listings.perNight')}</div>
      </div>
    </div>

    <div class="addons">
      <h3>${t('modal.addons')}</h3>
      ${addons.map(a => `
        <label class="addon-option">
          <div class="addon-left">
            <input type="checkbox" class="addon-check" data-addon-id="${a.id}" data-price="${a.pricePerNight}">
            <div class="addon-icon">${a.icon}</div>
            <div>
              <div class="addon-name">${getAddonName(a)}</div>
              <div class="addon-desc">${getAddonDesc(a)}</div>
            </div>
          </div>
          <div class="addon-price">+${formatPrice(a.pricePerNight)}/${currentLang === 'en' ? 'night' : (currentLang === 'pt' ? 'noite' : 'noche')}</div>
        </label>
      `).join('')}
    </div>

    <div class="booking-bar">
      <div class="booking-nights">
        <label for="nightsInput" style="font-weight:600;">${t('modal.nights')}</label>
        <input type="number" id="nightsInput" class="nights-input" value="3" min="1" max="365">
      </div>
      <div class="booking-total" id="bookingTotal">${formatPrice(listing.pricePerNight * 3)}</div>
      <button class="btn btn-primary" id="bookNowBtn">${t('modal.bookNow')}</button>
    </div>

    ${(listingReviews[listing.id] || []).length > 0 ? `
    <div class="reviews-section">
      <h3>${t('reviews.heading')} (${listing.reviews})</h3>
      ${(listingReviews[listing.id] || []).map(review => {
        const dateLocales = { en: 'en-US', pt: 'pt-BR', es: 'es-ES' };
        const formattedDate = new Date(review.date).toLocaleDateString(dateLocales[currentLang] || 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        return `
        <div class="review-card">
          <div class="review-header">
            <div class="review-avatar">${review.user.charAt(0).toUpperCase()}</div>
            <div class="review-meta">
              <div class="review-user">${review.user}</div>
              <div class="review-date">${formattedDate}</div>
            </div>
            <div class="review-rating">${starsHTML(review.rating)}</div>
          </div>
          <div class="review-text">${t('review.' + review.id + '.text')}</div>
        </div>`;
      }).join('')}
    </div>` : ''}
  `;

  modal.classList.add('open');

  // Calculate totals
  const recalc = () => {
    const nights = parseInt(document.getElementById('nightsInput').value) || 1;
    let total = listing.pricePerNight;
    document.querySelectorAll('.addon-check:checked').forEach(cb => {
      total += parseInt(cb.dataset.price);
    });
    document.getElementById('bookingTotal').textContent = formatPrice(total * nights);
  };

  document.getElementById('nightsInput').addEventListener('input', recalc);
  document.querySelectorAll('.addon-check').forEach(cb => cb.addEventListener('change', recalc));

  // Book now
  document.getElementById('bookNowBtn').addEventListener('click', () => {
    const nights = parseInt(document.getElementById('nightsInput').value) || 1;
    let perNight = listing.pricePerNight;
    const selectedAddons = [];
    document.querySelectorAll('.addon-check:checked').forEach(cb => {
      const addon = addons.find(a => a.id === cb.dataset.addonId);
      if (addon) {
        selectedAddons.push(addon);
        perNight += addon.pricePerNight;
      }
    });

    cart.push({
      listing,
      nights,
      perNight,
      total: perNight * nights,
      addons: selectedAddons,
    });

    updateCartCount();
    modal.classList.remove('open');
    const notification = t('cart.addedNotification').replace('{title}', title);
    showNotification(notification);
  });
}

// ===== NOTIFICATION =====
function showNotification(msg) {
  const el = document.createElement('div');
  el.style.cssText = `
    position:fixed;bottom:30px;right:30px;z-index:999;
    background:var(--success);color:#fff;padding:16px 24px;border-radius:8px;
    font-weight:600;box-shadow:0 4px 20px rgba(0,0,0,.4);
    animation:slideIn .3s ease;
  `;
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .3s'; }, 2500);
  setTimeout(() => el.remove(), 3000);
}

// ===== CART =====
function updateCartCount() {
  document.getElementById('cartCount').textContent = cart.length;
}

function renderCart() {
  const items = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');

  if (cart.length === 0) {
    items.innerHTML = `<div class="cart-empty">${t('cart.empty')}</div>`;
    totalEl.innerHTML = '';
    return;
  }

  items.innerHTML = cart.map((item, i) => {
    const nightLabel = item.nights > 1 ? t('cart.nights') : t('cart.night');
    const title = getListingTitle(item.listing);
    return `
    <div class="cart-item">
      <div class="cart-item-info">
        <h4>${title}</h4>
        <p>${item.listing.planet} · ${item.nights} ${nightLabel} · ${formatPrice(item.perNight)}/${t('cart.night')}</p>
        ${item.addons.length > 0 ? `<p>${t('cart.addons')} ${item.addons.map(a => getAddonName(a)).join(', ')}</p>` : ''}
        <button class="cart-remove" data-index="${i}">${t('cart.remove')}</button>
      </div>
      <div class="cart-item-price">${formatPrice(item.total)}</div>
    </div>
  `}).join('');

  const grandTotal = cart.reduce((sum, item) => sum + item.total, 0);
  totalEl.innerHTML = `<span>${t('cart.total')}</span><span>${formatPrice(grandTotal)}</span>`;

  // Remove handlers
  document.querySelectorAll('.cart-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      cart.splice(parseInt(e.target.dataset.index), 1);
      updateCartCount();
      renderCart();
    });
  });
}

// ===== FILTERS =====
function getFilteredListings() {
  let result = [...listings];

  const price = document.getElementById('filterPrice').value;
  if (price !== 'all') {
    if (price === '100000+') {
      result = result.filter(l => l.pricePerNight >= 100000);
    } else {
      const [min, max] = price.split('-').map(Number);
      result = result.filter(l => l.pricePerNight >= min && l.pricePerNight <= max);
    }
  }

  const oxygen = document.getElementById('filterOxygen').value;
  if (oxygen !== 'all') result = result.filter(l => l.oxygen === oxygen);

  const ls = document.getElementById('filterLifeSupport').value;
  if (ls !== 'all') result = result.filter(l => l.lifeSupport === ls);

  const grav = document.getElementById('filterGravity').value;
  if (grav !== 'all') result = result.filter(l => l.gravity === grav);

  // Amenity checkboxes
  const amenityMap = {
    amenityRadiation: 'radiation',
    amenityTemp: 'temp',
    amenityComms: 'comms',
    amenityLanding: 'landing',
  };
  for (const [elId, amenity] of Object.entries(amenityMap)) {
    if (document.getElementById(elId).checked) {
      result = result.filter(l => l.amenities.includes(amenity));
    }
  }

  return result;
}

// ===== LANGUAGE SELECTOR =====
document.getElementById('langBtn').addEventListener('click', () => {
  document.getElementById('langDropdown').classList.toggle('open');
});

document.querySelectorAll('.lang-option').forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
    document.getElementById('langDropdown').classList.remove('open');
  });
});

// Close dropdown on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('.lang-selector')) {
    document.getElementById('langDropdown').classList.remove('open');
  }
});

// ===== EVENT LISTENERS =====
document.getElementById('applyFilters').addEventListener('click', () => {
  renderSkeletons();
  renderListings(getFilteredListings());
});

document.getElementById('clearFilters').addEventListener('click', () => {
  document.getElementById('filterPrice').value = 'all';
  document.getElementById('filterOxygen').value = 'all';
  document.getElementById('filterLifeSupport').value = 'all';
  document.getElementById('filterGravity').value = 'all';
  document.querySelectorAll('.checkbox-group input').forEach(cb => cb.checked = false);
  renderSkeletons();
  renderListings(listings);
});

// Modal close handlers
document.getElementById('modalClose').addEventListener('click', () => {
  document.getElementById('listingModal').classList.remove('open');
});
document.getElementById('listingModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) document.getElementById('listingModal').classList.remove('open');
});

// Cart modal
document.getElementById('cartBtn').addEventListener('click', (e) => {
  e.preventDefault();
  renderCart();
  document.getElementById('cartModal').classList.add('open');
});
document.getElementById('cartClose').addEventListener('click', () => {
  document.getElementById('cartModal').classList.remove('open');
});
document.getElementById('cartModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) document.getElementById('cartModal').classList.remove('open');
});

// Slide-in animation
const style = document.createElement('style');
style.textContent = `@keyframes slideIn { from { transform: translateX(100px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`;
document.head.appendChild(style);

// ===== INIT =====
// Apply saved language on load
const savedLang = localStorage.getItem('jaketz-lang');
if (savedLang && savedLang !== 'en') {
  setLanguage(savedLang);
} else {
  applyTranslations();
}

renderSkeletons();
renderListings(listings);
