/**
 * Handles showing/hiding the mobile navigation
 * @author Dan Levy <danlevy124@gmail.com>
 * @module
 */
import "../img/about-me-header-img.png";
import "../img/florida-tech-logo.jpg";
import "../img/github-logo.svg";
import "../img/linkedin-logo.svg";
import "../img/projects-header-img.png";
import "../img/the-music-assistant-screenshot.png";
import "../img/treehouse-logo.svg";
import "../img/udemy-logo.svg";
import "../img/web-app-dashboard-screenshot.png";
import "../img/web-style-guide-screenshot.png";

import "../files/daniel-levy-resume.pdf";

import "../scss/styles.scss";

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
    const headerHamburgerMenu = document.querySelector(
        "#nav-bar-hamburger-menu"
    );
    const headerNav = document.querySelector("#main-nav");
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

    window.addEventListener("resize", () => {
        if (isMobile && window.innerWidth >= 768) {
            headerNav.classList.remove("nav-bar-nav-show");
            Array.from(headerNav.children).forEach((link) => {
                link.classList.remove("main-nav-nav-item-show");
            });
            isMobile = false;
        }
    });
}

/**
 * Shows or hides the mobile navigation links when the hamburger menu is clciked
 * @param {*} links Mobile navigation links
 */
function showHideMobileNavLinks(links) {
    Array.from(links).forEach((link) => {
        link.classList.toggle("main-nav-nav-item-show");
    });
}
