const navLinks = document.querySelectorAll('[data-navLink]')
console.log({ navLinks })
navLinks.forEach(link => {
    console.log({ link })
    if (link.getAttribute('href') == window.location.pathname) {
        link.setAttribute('aria-current', 'page')
    }
})