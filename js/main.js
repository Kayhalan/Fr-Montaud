
document.addEventListener('DOMContentLoaded', () => {
  // Navigation: highlight active link based on URL
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) {
      a.classList.add('active');
    }
  });

  if (document.getElementById('activities-container')) {
    // Check for filter parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    const viewParam = urlParams.get('view');
    const initialFilter = filterParam || 'all';
    const initialView = viewParam === 'calendar' ? 'calendar' : 'cards';

    activityViewState.view = initialView;
    setActiveViewButton(initialView);
    
    // Apply the filter
    if (filterParam) {
      filterActivities(initialFilter);
    } else {
      renderActivities(initialFilter);
    }
  }
});

const activityViewState = {
  filter: 'all',
  view: 'cards'
};

const activityCalendarDays = [
  { key: 'lundi', label: 'Lundi' },
  { key: 'mardi', label: 'Mardi' },
  { key: 'mercredi', label: 'Mercredi' },
  { key: 'jeudi', label: 'Jeudi' },
  { key: 'vendredi', label: 'Vendredi' },
  { key: 'samedi', label: 'Samedi' },
  { key: 'dimanche', label: 'Dimanche' },
  { key: 'autres', label: 'Autres creneaux' }
];

// Filter & render activities (fonctions globales pour compatibilité)
window.filterActivities = function(cat) {
  activityViewState.filter = cat;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const btnFilter = btn.getAttribute('data-filter') || btn.textContent.toLowerCase();
    const targetFilter = cat === 'all' ? 'all' : cat;
    btn.classList.toggle('active', btnFilter === targetFilter);
  });
  renderActivities(activityViewState.filter);
}

window.switchActivitiesView = function(view) {
  activityViewState.view = view === 'calendar' ? 'calendar' : 'cards';
  setActiveViewButton(activityViewState.view);
  renderActivities(activityViewState.filter);
}

function setActiveViewButton(view) {
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-view') === view);
  });
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const activityTextStyleDefaults = {
  fontFamily: 'inherit',
  fontSize: 14,
  color: '#2c3e50',
  fontWeight: '400',
  fontStyle: 'normal',
  textDecoration: 'none',
  textAlign: 'left'
};

function sanitizeActivityTextStyle(style = {}) {
  const safe = {
    fontFamily: String(style.fontFamily || activityTextStyleDefaults.fontFamily),
    fontSize: Number.parseInt(style.fontSize, 10),
    color: /^#[0-9a-fA-F]{6}$/.test(String(style.color || '')) ? String(style.color).toLowerCase() : activityTextStyleDefaults.color,
    fontWeight: style.fontWeight === '700' ? '700' : '400',
    fontStyle: style.fontStyle === 'italic' ? 'italic' : 'normal',
    textDecoration: style.textDecoration === 'underline' ? 'underline' : 'none',
    textAlign: ['left', 'center', 'right'].includes(style.textAlign) ? style.textAlign : 'left'
  };

  if (Number.isNaN(safe.fontSize)) {
    safe.fontSize = activityTextStyleDefaults.fontSize;
  }

  safe.fontSize = Math.min(72, Math.max(10, safe.fontSize));
  return safe;
}

function styleCssFromMap(stylesMap = {}, fieldKey, extra = '') {
  if (!stylesMap || typeof stylesMap !== 'object' || !stylesMap[fieldKey]) {
    return extra;
  }

  const safe = sanitizeActivityTextStyle(stylesMap[fieldKey]);
  return `${extra}font-family:${safe.fontFamily};font-size:${safe.fontSize}px;color:${safe.color};font-weight:${safe.fontWeight};font-style:${safe.fontStyle};text-decoration:${safe.textDecoration};text-align:${safe.textAlign};`;
}

function normalizeActivityName(name) {
  return (name || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function resolveActivityDetailUrl(act) {
  if (act && act.detailUrl) return act.detailUrl;

  const fallbackMap = {
    'arts plastiques': 'activites/arts-plastiques.html',
    'badminton': 'activites/badminton.html',
    'bibliotheque': 'activites/bibliotheque.html',
    'boxe pieds poings': 'activites/boxe-pieds-poings.html',
    'break dance': 'activites/break-dance.html',
    'cafe citoyen': 'activites/cafe-citoyen.html',
    'danse africaine enfants': 'activites/danse-africaine.html',
    'danse africaine adultes': 'activites/danse-africaine.html',
    'danse africaine': 'activites/danse-africaine.html',
    'danse latino': 'activites/danse-latino.html',
    'danse traditionnelle': 'activites/danse-traditionnelle.html',
    'danse jazz kpop': 'activites/danse-jazz-kpop.html',
    'danse jazz k pop': 'activites/danse-jazz-kpop.html',
    'eveil corporel': 'activites/eveil-corporel.html',
    'fanfare': 'activites/fanfare.html',
    'fusion jazz': 'activites/fusion-jazz.html',
    'gym douce': 'activites/gym-douce.html',
    'gym tonic': 'activites/gym-tonic.html',
    'initiation danses': 'activites/initiation-danses.html',
    'judo': 'activites/judo.html',
    'marche': 'activites/marche-jeudi.html',
    'percussions': 'activites/percussions.html',
    'petanque': 'activites/petanque.html',
    'pilates': 'activites/pilates.html',
    'rando vtt': 'activites/rando-vtt.html',
    'stretching': 'activites/stretching.html',
    'streching': 'activites/stretching.html',
    'theatre': 'activites/theatre-enfants.html',
    'theatre adultes': 'activites/theatre-adulte.html',
    'theatre enfants': 'activites/theatre-enfants.html',
    'yoga': 'activites/yoga.html',
    'zumba': 'activites/zumba.html'
  };

  const normalizedName = normalizeActivityName(act && act.name);
  return fallbackMap[normalizedName] || '';
}

function getActivitiesData() {
  const sourceActivities = window.activities || activities || [];
  const normalizedNames = new Set(sourceActivities.map(act => normalizeActivityName(act && act.name)));

  const requiredFallbackActivities = [
    {
      name: 'Bibliotheque',
      public: 'Tout public',
      day: 'Samedi',
      time: '10h00-12h00',
      price: 'gratuit + adhesion',
      referent: 'Mairie de Montaud',
      phone: '',
      animator: 'Benevoles',
      location: 'Ancienne Mairie',
      start: 'Septembre 2026',
      detailUrl: 'activites/bibliotheque.html',
      category: ['enfants', 'ados', 'adultes', 'culture'],
      textStyles: {}
    },
    {
      name: 'Cafe citoyen',
      public: 'Tout public',
      day: 'Samedi',
      time: '10h00-12h30',
      price: 'gratuit + adhesion',
      referent: 'Marion GARGANI-FARE',
      phone: '06 70 92 20 58',
      animator: "Mont'o cafe",
      location: 'Salle Mairie',
      start: '12/09/2026',
      detailUrl: 'activites/cafe-citoyen.html',
      category: ['enfants', 'ados', 'adultes', 'culture'],
      textStyles: {}
    }
  ];

  const missingRequired = requiredFallbackActivities.filter(act => !normalizedNames.has(normalizeActivityName(act.name)));
  if (!missingRequired.length) {
    return sourceActivities;
  }

  return [...sourceActivities, ...missingRequired];
}

function getFilteredActivities(category) {
  return getActivitiesData().filter(act => category === 'all' || (act.category && act.category.includes(category)));
}

function getDayKey(dayValue) {
  const normalizedDay = normalizeActivityName(dayValue);

  if (normalizedDay.includes('lundi')) return 'lundi';
  if (normalizedDay.includes('mardi')) return 'mardi';
  if (normalizedDay.includes('mercredi')) return 'mercredi';
  if (normalizedDay.includes('jeudi')) return 'jeudi';
  if (normalizedDay.includes('vendredi')) return 'vendredi';
  if (normalizedDay.includes('samedi')) return 'samedi';
  if (normalizedDay.includes('dimanche')) return 'dimanche';

  return 'autres';
}

function getStartMinutes(timeValue) {
  const match = String(timeValue || '').match(/(\d{1,2})h(\d{0,2})/i);
  if (!match) return Number.MAX_SAFE_INTEGER;

  const hours = Number.parseInt(match[1], 10);
  const minutes = match[2] ? Number.parseInt(match[2], 10) : 0;
  return (hours * 60) + minutes;
}

function normalizeTimeLabel(timeValue) {
  const source = String(timeValue || '').trim();
  if (!source) return 'Horaire a confirmer';

  return source.replace(/(\d{1,2})h(\d{0,2})/gi, (_, h, m) => {
    const hour = Number.parseInt(h, 10);
    const safeHour = Number.isFinite(hour) ? hour : h;
    const rawMinutes = String(m || '').trim();
    const safeMinutes = rawMinutes.length ? rawMinutes.padStart(2, '0').slice(0, 2) : '00';
    return `${safeHour}h${safeMinutes}`;
  });
}

function getCalendarLocationClass(locationValue) {
  const normalized = normalizeActivityName(locationValue);

  if (normalized.includes('salle pc haut')) return 'loc-salle-pc-haut';
  if (normalized.includes('salle pc bas')) return 'loc-salle-pc-bas';
  if (normalized.includes('grange')) return 'loc-grange';
  if (normalized.includes('exterieur') || normalized.includes('rdv') || normalized.includes('rdv salle pc')) return 'loc-exterieur';

  return 'loc-autre';
}

function renderActivitiesCards(category) {
  const container = document.getElementById('activities-container');
  if (!container) return;
  container.innerHTML = '';
  
  const filtered = getFilteredActivities(category);
  
  filtered.forEach(act => {
    const detailUrl = resolveActivityDetailUrl(act);
    const textStyles = act.textStyles || {};
    const cardInner = `
      <div class="activity-card">
        <div class="activity-header">
          <span class="activity-title" style="${styleCssFromMap(textStyles, 'activity-nom')}">${escapeHtml(act.name)}</span>
          <span class="activity-price" style="${styleCssFromMap(textStyles, 'activity-prix')}">${escapeHtml(act.price)}</span>
        </div>
        <div class="activity-details">
          <div class="detail-item" style="${styleCssFromMap(textStyles, 'activity-public')}"><span class="detail-icon">👥</span>${escapeHtml(act.public)}</div>
          <div class="detail-item" style="${styleCssFromMap(textStyles, 'activity-jour')}"><span class="detail-icon">📅</span>${escapeHtml(act.day)}</div>
          <div class="detail-item" style="${styleCssFromMap(textStyles, 'activity-horaires')}"><span class="detail-icon">⏰</span>${escapeHtml(act.time)}</div>
          <div class="detail-item" style="${styleCssFromMap(textStyles, 'activity-lieu')}"><span class="detail-icon">📍</span>${escapeHtml(act.location)}</div>
          <div class="detail-item" style="${styleCssFromMap(textStyles, 'activity-telephone')}"><span class="detail-icon">📞</span>${escapeHtml(act.phone)}</div>
        </div>
      </div>
    `;

    const cardHtml = detailUrl
      ? `<a href="${escapeHtml(detailUrl)}" class="activity-card-link" aria-label="Voir la fiche de ${escapeHtml(act.name)}">${cardInner}</a>`
      : cardInner;
    
    container.insertAdjacentHTML('beforeend', cardHtml);
  });
}

function renderCalendarActivityItem(act) {
  const detailUrl = resolveActivityDetailUrl(act);
  const locationClass = getCalendarLocationClass(act.location);
  const textStyles = act.textStyles || {};
  const normalizedTime = normalizeTimeLabel(act.time);
  const itemInner = `
    <article class="calendar-activity-item">
      <div class="calendar-zone calendar-zone-time">
        <p class="calendar-time" style="${styleCssFromMap(textStyles, 'activity-horaires')}">${escapeHtml(normalizedTime)}</p>
      </div>
      <div class="calendar-zone calendar-zone-name">
        <h3 class="calendar-activity-title" style="${styleCssFromMap(textStyles, 'activity-nom')}">${escapeHtml(act.name || 'Nom non renseigne')}</h3>
      </div>
      <div class="calendar-zone calendar-zone-public">
        <p class="calendar-activity-meta" style="${styleCssFromMap(textStyles, 'activity-public')}">${escapeHtml(act.public || 'Public non renseigne')}</p>
      </div>
      <div class="calendar-zone calendar-zone-location">
        <span class="calendar-location-badge ${locationClass}" style="${styleCssFromMap(textStyles, 'activity-lieu')}">${escapeHtml(act.location || 'Lieu non renseigne')}</span>
      </div>
    </article>
  `;

  if (detailUrl) {
    return `<a href="${escapeHtml(detailUrl)}" class="calendar-activity-link" aria-label="Voir la fiche de ${escapeHtml(act.name)}">${itemInner}</a>`;
  }

  return itemInner;
}

function renderActivitiesCalendar(category) {
  const container = document.getElementById('activities-calendar');
  if (!container) return;

  const filtered = getFilteredActivities(category);

  if (!filtered.length) {
    container.innerHTML = '<p class="calendar-empty-state">Aucune activite pour ce filtre.</p>';
    return;
  }

  const groupedActivities = {};
  activityCalendarDays.forEach(day => {
    groupedActivities[day.key] = [];
  });

  filtered.forEach(act => {
    const key = getDayKey(act.day);
    groupedActivities[key].push(act);
  });

  activityCalendarDays.forEach(day => {
    groupedActivities[day.key].sort((a, b) => {
      const startA = getStartMinutes(a.time);
      const startB = getStartMinutes(b.time);
      if (startA !== startB) return startA - startB;
      return String(a.name || '').localeCompare(String(b.name || ''), 'fr', { sensitivity: 'base' });
    });
  });

  const alwaysVisibleDays = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'];
  const visibleDays = activityCalendarDays.filter(day => alwaysVisibleDays.includes(day.key) || groupedActivities[day.key].length > 0);

  const columnsHtml = visibleDays.map(day => {
    const dayActivities = groupedActivities[day.key];
    const countText = `${dayActivities.length} ${dayActivities.length > 1 ? 'activites' : 'activite'}`;
    const itemsHtml = dayActivities.length
      ? dayActivities.map(renderCalendarActivityItem).join('')
      : '<p class="calendar-empty-slot">Aucune activite</p>';

    return `
      <section class="calendar-day-column">
        <header class="calendar-day-header">
          <h2>${day.label}</h2>
          <span class="calendar-day-count" aria-label="${countText}">${countText}</span>
        </header>
        <div class="calendar-day-content">
          ${itemsHtml}
        </div>
      </section>
    `;
  }).join('');

  container.innerHTML = `
    <div class="activities-calendar-grid">
      ${columnsHtml}
    </div>
  `;
}

window.renderActivities = function(category) {
  if (category) {
    activityViewState.filter = category;
  }

  const cardsContainer = document.getElementById('activities-container');
  const calendarContainer = document.getElementById('activities-calendar');
  if (!cardsContainer) return;

  if (activityViewState.view === 'calendar' && calendarContainer) {
    cardsContainer.classList.add('is-hidden');
    calendarContainer.classList.remove('is-hidden');
    renderActivitiesCalendar(activityViewState.filter);
    return;
  }

  cardsContainer.classList.remove('is-hidden');
  if (calendarContainer) {
    calendarContainer.classList.add('is-hidden');
  }
  renderActivitiesCards(activityViewState.filter);
}

// Aliases pour la compatibilité
function filterActivities(cat) { window.filterActivities(cat); }
function renderActivities(category) { window.renderActivities(category); }
function switchActivitiesView(view) { window.switchActivitiesView(view); }

// === Fonctions de partage pour les actualités ===
window.shareNews = {
  // Partager sur Facebook
  facebook: function(title, url) {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  },

  // Partager sur Twitter/X
  twitter: function(title, url) {
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  },

  // Partager sur WhatsApp
  whatsapp: function(title, url) {
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' - ' + url)}`;
    window.open(shareUrl, '_blank');
  },

  // Partager par email
  email: function(title, description, url) {
    const subject = encodeURIComponent(title + ' - Foyer Rural de Montaud');
    const body = encodeURIComponent(`${title}\n\n${description}\n\nPlus d'infos : ${url}\n\n--\nFoyer Rural de Montaud\nhttps://www.foyer-rural-montaud.com`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  },

  // Partager sur LinkedIn
  linkedin: function(title, url) {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  },

  // Copier le lien
  copyLink: function(url, button) {
    navigator.clipboard.writeText(url).then(() => {
      button.classList.add('copied');
      button.innerHTML = '✓';
      setTimeout(() => {
        button.classList.remove('copied');
        button.innerHTML = '🔗';
      }, 2000);
    }).catch(err => {
      console.error('Erreur lors de la copie:', err);
      // Fallback pour les navigateurs plus anciens
      const textarea = document.createElement('textarea');
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      button.classList.add('copied');
      button.innerHTML = '✓';
      setTimeout(() => {
        button.classList.remove('copied');
        button.innerHTML = '🔗';
      }, 2000);
    });
  }
};

// Génère le HTML des boutons de partage
window.generateShareButtons = function(title, description, link) {
  const baseUrl = 'https://www.foyer-rural-montaud.com';
  const fullUrl = link ? (link.startsWith('http') ? link : baseUrl + '/' + link) : baseUrl;
  const desc = description || '';
  
  return `
    <div class="share-container">
      <span class="share-label">Partager :</span>
      <div class="share-buttons">
        <button class="share-btn facebook" onclick="shareNews.facebook('${title.replace(/'/g, "\\'")}', '${fullUrl}')" title="Partager sur Facebook">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </button>
        <button class="share-btn twitter" onclick="shareNews.twitter('${title.replace(/'/g, "\\'")}', '${fullUrl}')" title="Partager sur X">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </button>
        <button class="share-btn whatsapp" onclick="shareNews.whatsapp('${title.replace(/'/g, "\\'")}', '${fullUrl}')" title="Partager sur WhatsApp">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </button>
        <button class="share-btn email" onclick="shareNews.email('${title.replace(/'/g, "\\'")}', '${desc.replace(/'/g, "\\'")}', '${fullUrl}')" title="Partager par email">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </button>
        <button class="share-btn copy-link" onclick="shareNews.copyLink('${fullUrl}', this)" title="Copier le lien">🔗</button>
      </div>
    </div>
  `;
};

