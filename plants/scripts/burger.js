const nav = document.querySelector('.nav');
const darkBackground = document.querySelector('.darkBackground');

const openMenu = () => {
    nav.style.width = '200px';
    darkBackground.style.visibility = 'visible';
    darkBackground.style['background-color'] = 'rgba(0, 0, 0, 0.8)';

    const navLinks = document.querySelectorAll('.nav-link');
    for (link of navLinks) {
        link.onclick = closeMenu;
    }
}

const closeMenu = () => {
    nav.style.width = '0px';
    darkBackground.style.visibility = 'hidden';
    darkBackground.style['background-color'] = 'rgba(0, 0, 0, 0)';
}