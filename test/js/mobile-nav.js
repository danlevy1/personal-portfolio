/* =============================
 * File Path: js//index.js
 * Description: Scripts
 * Author: Dan Levy
 * Email: danlevy124@gmail.com
 * Created Date: 9/13/2019
============================= */

/**
 * Initial function when page loads
 */
document.addEventListener("DOMContentLoaded", () => {
    showHideMobileNav();
    onResize();
});

/**
 * Shows or hides the mobile navigation when the hamburger menu is clicked
 */
function showHideMobileNav() {
    const headerHamburgerMenu = document.querySelector("#nav-bar-hamburger-menu");
    const headerNav = document.querySelector("#main-nav");
    console.log(headerNav);
    const headerNavLinks = headerNav.children;

    headerHamburgerMenu.addEventListener("click", () => {
        headerNav.classList.toggle("nav-bar-nav-show");
        if (headerNav.classList.contains("nav-bar-nav-show")) {
            setTimeout(() => {
                showHideMobileNavLinks(headerNavLinks);
            }, 250);
        } else {
            showHideMobileNavLinks(headerNavLinks);
        }
    });
}

/**
 * Hides the mobile navigation when the screen becomes too large
 */
function onResize() {
    const headerNav = document.querySelector("#main-nav");
    let isMobile = window.innerWidth < 768 ? true : false;

    window.addEventListener('resize', () => {
        if (isMobile && window.innerWidth >= 768) {
            headerNav.classList.remove("nav-bar-nav-show");
            Array.from(headerNav.children).forEach(link => {
                link.classList.remove("main-nav-nav-item-show");
            });
            isMobile = false;
        }
    })
}

/**
 * Shows or hides the mobile navigation links when the hamburger menu is clciked
 * @param {*} links Mobile navigation links
 */
function showHideMobileNavLinks(links) {
    Array.from(links).forEach(link => {
        link.classList.toggle("main-nav-nav-item-show");
    });
}
