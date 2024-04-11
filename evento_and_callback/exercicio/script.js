"use strict";
const btnMobile = document.getElementById("btn-mobile");
function toogleMenu(event) {
    const button = event.currentTarget;
    const nav = document.querySelector("nav");
    if (button instanceof HTMLElement && nav) {
        nav.classList.toggle("active");
        const active = nav.classList.contains("active"); // podemos utilizar o toggle que funcionará
        if (active) {
            // nav.classList.remove("active")
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Abrir Menu");
            console.log(nav, button);
        }
        else {
            // nav.classList.add("active")
            button.setAttribute("aria-expanded", "true");
            button.setAttribute("aria-label", "Fechar Menu");
            console.log(nav, button);
        }
    }
}
btnMobile === null || btnMobile === void 0 ? void 0 : btnMobile.addEventListener("pointerdown", toogleMenu);
