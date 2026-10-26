const filterButtons = [...document.querySelectorAll('.filter-button')];
const proposalCards = [...document.querySelectorAll('.proposal-card')];
function setFilter(filter) {
  const selected = ['todas', 'practica', 'formacion'].includes(filter) ? filter : 'todas';
  filterButtons.forEach((button) => {
    const active = button.dataset.filter === selected;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  proposalCards.forEach((card) => {
    card.hidden = selected !== 'todas' && card.dataset.axis !== selected;
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => setFilter(button.dataset.filter));
});

document.querySelectorAll('[data-filter-link]').forEach((link) => {
  link.addEventListener('click', () => setFilter(link.dataset.filterLink));
});

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  mainNav.classList.toggle('open', open);
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
    mainNav.classList.remove('open');
  });
});

setFilter('todas');
