const btnLight = document.querySelector('.theme-light');
const btnDark = document.querySelector('.theme-dark');

// Apply theme
function setTheme(mode) {
  const isDark = mode === 'dark';
  document.body.classList.toggle('dark-mode', isDark);

  btnLight.setAttribute('aria-pressed', String(!isDark));
  btnDark.setAttribute('aria-pressed', String(isDark));

  localStorage.setItem('theme', mode);
}

// Init
setTheme(localStorage.getItem('theme') || 'light');

// Event handlers
btnLight.addEventListener('click', () => setTheme('light'));
btnDark.addEventListener('click', () => setTheme('dark'));
