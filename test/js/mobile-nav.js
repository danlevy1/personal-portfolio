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
document.addEventListener('DOMContentLoaded', () => {
    showHideMobileNav()
})

/**
 * Shows or hides the mobile navigation when the hamburger menu is clicked
 */
function showHideMobileNav () {
    const headerHamburgerMenu = document.querySelector('#header-hamburger-menu')
    const headerNav = document.querySelector('#header-nav')
    const headerNavLinks = headerNav.children

    headerHamburgerMenu.addEventListener('click', () => {
        headerNav.classList.toggle('header-nav-show')
        if (headerNav.classList.contains('header-nav-show')) {
            setTimeout(() => {
                showHideMobileNavLinks(headerNavLinks)
            }, 250)
        } else {
            showHideMobileNavLinks(headerNavLinks)
        }
    })
}

/**
 * Shows or hides the mobile navigation links when the hamburger menu is clciked
 * @param {*} links Mobile navigation links
 */
function showHideMobileNavLinks (links) {
    Array.from(links).forEach(link => {
        link.classList.toggle('header-nav-item-show')
    })
}
