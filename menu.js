
const menuButton = document.querySelector(".site-nav__toggle");
const menuLinks = document.querySelector(".site-nav__links");

if (menuButton && menuLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuLinks.classList.toggle("is-open", !isOpen);
  });
}
