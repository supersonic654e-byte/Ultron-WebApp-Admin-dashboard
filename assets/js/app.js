(function () {
  const body = document.body;
  const openBtn = document.querySelector('[data-open-drawer]');
  const closeBtn = document.querySelector('[data-close-drawer]');
  const backdrop = document.querySelector('.drawer-backdrop');

  function openDrawer() {
    body.classList.add('drawer-open');
    openBtn?.setAttribute('aria-expanded', 'true');
  }
  function closeDrawer() {
    body.classList.remove('drawer-open');
    openBtn?.setAttribute('aria-expanded', 'false');
  }
  openBtn?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeDrawer();
  });

  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === current || (current.startsWith('version-') && href === 'robots.html')) {
      link.classList.add('active');
    }
  });

  const toast = document.querySelector('.toast');
  window.showToast = function (message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  };

  document.querySelectorAll('[data-toast]').forEach((button) => {
    button.addEventListener('click', () => window.showToast(button.dataset.toast || 'Action saved.'));
  });

  document.querySelectorAll('[data-print]').forEach((button) => {
    button.addEventListener('click', () => window.print());
  });

  const globalSearch = document.querySelector('#globalSearch');
  globalSearch?.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    const query = globalSearch.value.trim().toLowerCase();
    if (!query) return;
    const destinations = [
      ['robot', 'robots.html'],
      ['ultron', 'robots.html'],
      ['hospital', 'hospitals.html'],
      ['mission', 'missions.html'],
      ['patient', 'patient-monitoring.html'],
      ['feedback', 'feedback.html'],
      ['maintenance', 'maintenance.html'],
      ['alert', 'alerts.html']
    ];
    const match = destinations.find(([keyword]) => query.includes(keyword));
    if (match) location.href = match[1];
    else window.showToast('No matching section found.');
  });

  // Feedback form persistence for the static MVP.
  const feedbackForm = document.querySelector('#feedbackForm');
  feedbackForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(feedbackForm).entries());
    const saved = JSON.parse(localStorage.getItem('supersonicFeedback') || '[]');
    saved.unshift({ ...data, id: `FB-${Date.now().toString().slice(-7)}`, status: 'New' });
    localStorage.setItem('supersonicFeedback', JSON.stringify(saved));
    feedbackForm.reset();
    window.showToast('Feedback ticket saved in this browser.');
  });

  const missionForm = document.querySelector('#missionForm');
  missionForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(missionForm).entries());
    const saved = JSON.parse(localStorage.getItem('supersonicMissions') || '[]');
    saved.unshift({ ...data, id: `MS-${Date.now().toString().slice(-7)}`, status: 'Scheduled' });
    localStorage.setItem('supersonicMissions', JSON.stringify(saved));
    missionForm.reset();
    window.showToast('Mission created locally.');
    setTimeout(() => location.reload(), 500);
  });

  const missionRows = document.querySelector('#localMissionRows');
  if (missionRows) {
    const saved = JSON.parse(localStorage.getItem('supersonicMissions') || '[]');
    saved.forEach((item) => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${escapeHtml(item.id)}</td><td>${escapeHtml(item.version || 'ULTRON-UV-001')}</td><td>${escapeHtml(item.hospital || 'Demo Hospital')}</td><td>${escapeHtml(item.zone || 'Assigned Zone')}</td><td>${escapeHtml(item.mission || 'Scheduled Mission')}</td><td><span class="status pending">Scheduled</span></td>`;
      missionRows.prepend(row);
    });
  }

  document.querySelectorAll('[data-ack-alert]').forEach((button) => {
    const id = button.dataset.ackAlert;
    if (localStorage.getItem(`alert-${id}`) === 'ack') {
      button.textContent = 'Acknowledged';
      button.disabled = true;
    }
    button.addEventListener('click', () => {
      localStorage.setItem(`alert-${id}`, 'ack');
      button.textContent = 'Acknowledged';
      button.disabled = true;
      window.showToast(`Alert ${id} acknowledged.`);
    });
  });

  document.querySelectorAll('[data-report-filter]').forEach((select) => {
    select.addEventListener('change', () => {
      const target = select.dataset.reportFilter;
      const value = select.value;
      document.querySelectorAll(`[data-filter-group="${target}"]`).forEach((row) => {
        row.hidden = value !== 'all' && row.dataset.filterValue !== value;
      });
    });
  });

  function escapeHtml(input) {
    return String(input ?? '').replace(/[&<>'"]/g, (char) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[char]));
  }
})();
