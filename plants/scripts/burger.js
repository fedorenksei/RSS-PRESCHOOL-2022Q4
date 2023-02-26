const nav = document.querySelector('.nav');
const darkBackground = document.querySelector('.darkBackground');

const openMenu = function() {
    nav.classList.add('nav_opened');
    darkBackground.classList.add('darkBackground_applied');

    const navLinks = document.querySelectorAll('.nav-link');
    for (link of navLinks) {
        link.onclick = closeMenu;
    }
}

const closeMenu = function() {
    nav.classList.remove('nav_opened');
    darkBackground.classList.remove('darkBackground_applied');
}