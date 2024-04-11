"use strict";
const numeros = [10, 20, 30, 4, 50];
const valores = [10, "Taxas", 20, "Produtos", 3, 30];
function maiorQue(data) {
    return data.filter((n) => n > 10);
}
console.log(maiorQue(numeros));
function filtrarValores(data) {
    return data.filter((item) => typeof item === "number");
}
console.log(filtrarValores(valores));
const dados = [
    ["Senhor dos Aneis", 80],
    ["a guerra dos tronos", 50],
];
console.log(dados[1][1]);
