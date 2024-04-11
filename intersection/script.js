"use strict";
function handleProdutoCarro(dados) {
    console.log(dados.portas, dados.rodas, dados.preco);
}
handleProdutoCarro({
    preco: 2000,
    rodas: 4,
    portas: 5,
});
const dados2 = {
    preco: 5000,
    rodas: 4,
    portas: 4
};
console.log(dados2.preco);
window.userId = 200;
