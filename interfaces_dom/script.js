"use strict";
// caso seja passado pelo id ou classe, 
// o typescript nao tem como identificar o tipo real do html
const video = document.querySelector('#videoEl');
const audio = document.querySelector('audio');
const links = document.querySelectorAll('.link');
console.dir(video);
console.dir(audio);
// verificando se o item da lista e um element
links.forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
        console.log(link.href);
    }
});
// o nodelist nao tem todos os metodos do array
// para transfomr um nodelist em array 
const novosLinks = Array.from(links);
// dessa forma conseguimos pegar os links separados
const anchorList = novosLinks.filter((link) => link instanceof HTMLAnchorElement);
console.log(anchorList);
