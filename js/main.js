const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector("#nav-menu");
const navLinks = navMenu.querySelectorAll("a");


function openMenu() {
    navMenu.classList.add("active");
    menuButton.classList.add("active");

    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute(
        "aria-label",
        "Cerrar menú de navegación"
    );
}


function closeMenu() {
    navMenu.classList.remove("active");
    menuButton.classList.remove("active");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute(
        "aria-label",
        "Abrir menú de navegación"
    );
}


function toggleMenu() {
    const menuIsOpen = navMenu.classList.contains("active");

    if (menuIsOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}


menuButton.addEventListener("click", toggleMenu);


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        closeMenu();
    });

});


document.addEventListener("click", function (event) {

    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedMenuButton = menuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
        closeMenu();
    }

});


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeMenu();
    }

});


window.addEventListener("resize", function () {

    if (window.innerWidth >= 768) {
        closeMenu();
    }

});