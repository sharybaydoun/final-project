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

// Form logic
const form = document.querySelector('.bookmark-form');
const titleInput = document.querySelector('.title');
const urlInput = document.querySelector('.url');
const errorMsg = document.querySelector('.error');
const container = document.querySelector('.bookmarks-container');

form.addEventListener('submit', e => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const url = urlInput.value.trim();

  if (!title) {
    errorMsg.textContent = "Title cannot be empty.";
    return;
  }

  if (!/^https?:\/\//.test(url)) {
    errorMsg.textContent = "URL must start with http:// or https://";
    return;
  }

  errorMsg.textContent = "";

  // Create bookmark element
  const bookmark = document.createElement('div');
  bookmark.className = 'bookmark';

  const link = document.createElement('a');
  link.href = url;
  link.target = "_blank";
  link.textContent = title;

  bookmark.appendChild(link);
  container.appendChild(bookmark);

  form.reset();
});
