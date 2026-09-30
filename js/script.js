const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    const setMenuOpen = (isOpen) => {
        navLinks.classList.toggle("active", isOpen);
        menuBtn.setAttribute("aria-expanded", String(isOpen));
        menuBtn.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    };

    menuBtn.addEventListener("click", () => {
        setMenuOpen(menuBtn.getAttribute("aria-expanded") !== "true");
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target.closest("a")) setMenuOpen(false);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") setMenuOpen(false);
    });
}
