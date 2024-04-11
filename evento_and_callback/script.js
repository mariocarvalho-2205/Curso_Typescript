"use strict";
const button = document.querySelector('button');
// function handleClick(event: MouseEvent) {
//     console.log(event)
// }
// button?.addEventListener("pointerdown", handleClick)
// function handleScroll(event: Event) {
//     console.log(event)
// }
// // window.addEventListener("scroll", handleScroll)
// function activeMenu(e: Event) {
//     if (e instanceof MouseEvent) {
//         console.log(e.pageX)
//     }
//     if (e instanceof TouchEvent) {
//         console.log(e)
//     }
//     console.log(e)
// }
// document.documentElement.addEventListener("mousedown", activeMenu)
// document.documentElement.addEventListener('touchstart', activeMenu)
// usando o this
// para utilizar o this é preciso passar ele como primeiro argumento da função
// e usar o tipo de elemento 
// No lugar de usar o this, e recomendado utilizar o currentTarget
// dessa forma ele retorna o elemento 
// para verificar e acessar as propriedade e necessario fazer uma validação
// com o instanceof
// function handleClick(this: HTMLButtonElement, e: MouseEvent) {
//     console.log(this)
// }
function handleClick(e) {
    const element = e.currentTarget;
    if (element instanceof HTMLElement) {
        console.log(element.innerText);
        element.innerHTML = "Clicou";
    }
    console.log();
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', handleClick);
