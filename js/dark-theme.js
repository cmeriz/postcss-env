//console.log('dark-theme.js loaded');

const toggleDarkThemeClass = () =>
    document.querySelector('body').classList.toggle('theme--dark');

if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
) {
    toggleDarkThemeClass();
}

window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
        toggleDarkThemeClass();
    });
