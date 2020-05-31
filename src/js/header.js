/**
 * Handles the header
 * @author Dan Levy <danlevy124@gmail.com>
 * @module
 */

/**
 * Creates listeners for:
 * (1) Window resize (show/hide main nav)
 * (2) Hamburger button click (show/hide main nav)
 */
const initHeader = () => {
    const mainNav = document.querySelector("#main-nav");

    const hamburgerButton = document.querySelector("#hamburger-button");

    // Calls the window size change handler immediately in order to set up the main nav (show/hide)
    windowSizeChangedHandler(mainNav);

    // Hamburger button click listener
    hamburgerButton.addEventListener("click", () => showHideMainNav(mainNav));

    // Window resize listener
    window.addEventListener("resize", () => windowSizeChangedHandler(mainNav));
};

/**
 * Shows or hides the main nav
 * @param {HTMLElement} mainNav The main navigation component
 */
const windowSizeChangedHandler = (mainNav) => {
    if (window.innerWidth < 768) {
        // Hides the main nav
        if (!mainNav.classList.contains("main-nav-hide")) {
            // Hides the main nav (no transition)
            mainNav.classList.add("main-nav-hide-instantly", "main-nav-hide");

            setTimeout(() => {
                // Removes the class that removed the transition
                mainNav.classList.remove("main-nav-hide-instantly");
            }, 1);
        }
    } else {
        // Shows the main nav
        if (mainNav.classList.contains("main-nav-hide")) {
            // Shows the main nav (no transition)
            mainNav.classList.remove("main-nav-hide");
            mainNav.classList.add("main-nav-show-instantly");

            setTimeout(() => {
                // Removes the class that removed the transition
                mainNav.classList.remove("main-nav-show-instantly");
            }, 1);
        }
    }
};

/**
 * Shows or hides the main navigation
 * @param {HTMLElement} mainNav The main navigation component
 */
const showHideMainNav = (mainNav) => {
    mainNav.classList.toggle("main-nav-hide");
};

// Initializes the header component
initHeader();
