"use strict";
// annptation é quando definimos o type ao declararmos uma variavel
const produto = "livro";
const num = 100;
// definindo um objeto
const obj = {
    name: "mario",
    idade: 49
};
// Inferencia = O TS consegue inferir o tipo de dado de expressoes em Javascript.
// Sempre que ele conseguir inferir, você não pecisa fazer a anotação do lado, 
// sendo uma boa pratica nao anotar quando ele inferir
const preço = 70 < 80 ? true : "caro"; // nesse caso e nao e necessario inferir
// console.log(preço)
// quando e necessario inferir = quando utilizarmos funções
function somar(a, b) {
    return a + b;
}
somar(7, 8);
const nintendo = {
    name: "Nitendo",
    preco: "1000"
};
function tranformPrice(produtos) {
    produtos.preco = "R$ " + produtos.name;
    return produtos;
}
const produtoNovo = tranformPrice(nintendo);
// console.log(produtoNovo)
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto(" JOao é Tecnico "));
