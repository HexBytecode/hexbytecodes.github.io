// Keep the Projects menu behaving like a compact click-toggle dropdown.
document.addEventListener('click', (event) => {
  const menu = document.querySelector('.projects-menu');
  if (!menu) return;
  if (!menu.contains(event.target)) menu.removeAttribute('open');
});
