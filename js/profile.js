const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function applyTheme(theme) {
    if (theme === 'light') {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    } else if (theme === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        // Auto or default
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        body.classList.toggle('dark-mode', prefersDark);
        body.classList.toggle('light-mode', !prefersDark);
    }
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'auto';
applyTheme(savedTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.setAttribute('aria-pressed', newTheme === 'dark');
});

// Profile selection
document.querySelectorAll('.profile').forEach(profile => {
    profile.addEventListener('click', () => {
        const name = profile.querySelector('p').textContent;
        const imgSrc = profile.querySelector('img').src;
        localStorage.setItem('perfilAtivoNome', name);
        localStorage.setItem('perfilAtivoImagem', imgSrc);
        window.location.href = 'catalogo/catalogo.html';
    });
});