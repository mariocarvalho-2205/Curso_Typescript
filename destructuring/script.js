"use strict";
/*
Destructuring
Durante a desestruturação de objetos,
podemos indicar o tipo de dado com a
sintaxe: { key1, key2 }: { key1: type1; key2: type2; }
*/
const { body } = document;
// desestruturando o htmlelement na função
function handleData({ nome, preco }) {
    console.log(nome.includes("book"));
    console.log(preco.toFixed(2));
}
handleData({
    nome: "Notebook",
    preco: 2000
});
/*
Conhecer os Dados
Durante a desestruturação é necessário indicar o
tipo exato do dado esperado pelo TypeScript.
Ex: um currentTarget pode ser EventTarget | null.

*/
function handleClick({ currentTarget, pageX }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML = `<h1>Mouse Click em x: ${pageX}</h1>`;
    }
}
document.documentElement.addEventListener('click', handleClick);
/*
...rest
O operador ...rest retorna uma Array.
*/
function comparar(tipo, ...numeros) {
    console.log(tipo, numeros);
    if (tipo === "menor") {
        return Math.min(...numeros);
    }
    if (tipo === "maior") {
        return Math.max(...numeros);
    }
}
console.log(comparar('menor', 3, 4, 5, 6, 7, 8, 9));
console.log(comparar('maior', 3, 4, 5, 6, 7, 8, 9));
