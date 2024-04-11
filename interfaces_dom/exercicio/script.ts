const linkss = document.querySelectorAll(".link");


function activeLink (elemento: HTMLElement) {
    if (elemento instanceof HTMLAnchorElement) {
        elemento.style.color = "red";
        elemento.style.backgroundColor = "blue"
    }
    if (elemento instanceof HTMLButtonElement) {
        elemento.style.backgroundColor = "red"
    }
}




linkss.forEach((link) => {
    if (link instanceof HTMLElement) {
        activeLink(link)
    }

});