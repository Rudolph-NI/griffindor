const check = document.getElementById('check');

check.addEventListener('change', () => {
  document.body.classList.toggle('no-scroll', check.checked);
});
