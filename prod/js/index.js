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
    hamburgerMenuShowHide()
})

/**
 * Shows or hides the header navigation when the hamburger menu is clicked
 */
function hamburgerMenuShowHide () {
    // Hamburger menu elements
    const hamburgerMenu = document.querySelector('#header-hamburger-menu')
    const headerNavigation = document.querySelector('#header-nav')
    const header = document.querySelector('header')

    hamburgerMenu.addEventListener('click', () => {
        // If navigation is hidden, show it; otherwise, hide it
        if (getComputedStyle(headerNavigation).display === 'none') {
            header.style.height = '234px'
            header.style.gridTemplateRows = '50px 1fr'
            setTimeout(() => {
                headerNavigation.style.display = 'block'
            }, 200)
        } else {
            header.style.height = '50px'
            header.style.gridTemplateRows = '50px'
            headerNavigation.style.display = 'none'
        }
    })
}
