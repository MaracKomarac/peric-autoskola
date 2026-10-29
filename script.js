const gumb = document.querySelector('.hamburger');
const izbornik = document.querySelector('#izbornik');

gumb.addEventListener('click', () => {
  const otvoren = izbornik.classList.toggle('otvoren');
  gumb.setAttribute('aria-expanded', otvoren);
  gumb.setAttribute('aria-label', otvoren ? 'Zatvori izbornik' : 'Otvori izbornik');
});
