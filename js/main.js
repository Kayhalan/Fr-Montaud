
document.addEventListener('DOMContentLoaded', () => {
  // Navigation: highlight active link based on URL
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) {
      a.classList.add('active');
    }
  });

  if (document.getElementById('activities-container')) {
    renderActivities('all');
  }
});

// Filter & render activities
function filterActivities(cat) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === (cat === 'all' ? 'toutes' : cat));
  });
  renderActivities(cat);
}

function renderActivities(category) {
  const container = document.getElementById('activities-container');
  if (!container) return;
  container.innerHTML = '';
  const filtered = activities.filter(act => category === 'all' || act.category.includes(category));
  filtered.forEach(act => {
    container.insertAdjacentHTML('beforeend', `
      <div class="activity-card">
        <div class="activity-header">
          <span class="activity-title">${act.name}</span>
          <span class="activity-price">${act.price}</span>
        </div>
        <div class="activity-details">
          <div class="detail-item"><span class="detail-icon">👥</span>${act.public}</div>
          <div class="detail-item"><span class="detail-icon">📅</span>${act.day}</div>
          <div class="detail-item"><span class="detail-icon">⏰</span>${act.time}</div>
          <div class="detail-item"><span class="detail-icon">📍</span>${act.location}</div>
          <div class="detail-item"><span class="detail-icon">📞</span>${act.phone}</div>
        </div>
      </div>
    `);
  });
}
