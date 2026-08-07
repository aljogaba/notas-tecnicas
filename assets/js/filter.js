(() => {
  const cards = [...document.querySelectorAll('[data-note]')];
  const search = document.querySelector('#note-search');
  const count = document.querySelector('#visible-count');
  const noResults = document.querySelector('#no-results');
  const clear = document.querySelector('#clear-filters');
  const buttons = [...document.querySelectorAll('.filter-button')];
  const toggle = document.querySelector('.sidebar-toggle');

  const state = { topic: 'all', type: 'all', year: 'all', query: '' };

  const normalize = (value = '') =>
    value.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  function applyFilters() {
    let visible = 0;

    cards.forEach((card) => {
      const text = normalize(card.dataset.search);
      const queryMatch = !state.query || text.includes(normalize(state.query));
      const topicMatch = state.topic === 'all' || card.dataset.topic === state.topic;
      const typeMatch = state.type === 'all' || card.dataset.type === state.type;
      const yearMatch = state.year === 'all' || card.dataset.year === state.year;
      const show = queryMatch && topicMatch && typeMatch && yearMatch;

      card.hidden = !show;
      if (show) visible += 1;
    });

    if (count) count.textContent = visible;
    if (noResults) noResults.hidden = visible !== 0;
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const group = button.dataset.filterGroup;
      const value = button.dataset.filterValue;
      state[group] = value;

      buttons
        .filter((item) => item.dataset.filterGroup === group)
        .forEach((item) => item.classList.toggle('is-active', item === button));

      applyFilters();

      if (window.innerWidth <= 760) {
        document.body.classList.remove('sidebar-open');
        toggle?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  search?.addEventListener('input', (event) => {
    state.query = event.target.value.trim();
    applyFilters();
  });

  clear?.addEventListener('click', () => {
    state.topic = 'all';
    state.type = 'all';
    state.year = 'all';
    state.query = '';
    if (search) search.value = '';

    ['topic', 'type', 'year'].forEach((group) => {
      buttons
        .filter((item) => item.dataset.filterGroup === group)
        .forEach((item) => item.classList.toggle('is-active', item.dataset.filterValue === 'all'));
    });

    applyFilters();
  });

  toggle?.addEventListener('click', () => {
    const open = document.body.classList.toggle('sidebar-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  applyFilters();
})();
