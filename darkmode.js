function toggleDarkMode() {
    if(localStorage.getItem('mode') === 'light') {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
    document.body.classList.toggle("dark-mode");
}

function loadMode() {
    if(localStorage.getItem('mode') === 'dark') {
        document.body.classList.toggle("dark-mode");
    }
}