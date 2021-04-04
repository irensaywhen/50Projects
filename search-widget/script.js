const search = document.querySelector('.search');
const btn = document.querySelector('.search');
const input = document.querySelector('.search');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});
