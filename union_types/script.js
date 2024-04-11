"use strict";
// type of é uma maneira de atribuirmos varios tipos a uma mesma variavel
// Ex: const total: string | number = 200 ou "200"
let total = 200;
console.log(typeof total);
total = "400";
console.log(typeof total);
// se a função nao tiver retorno boleano ela retornara undefined quando falso
function isNumber(value) {
    if (typeof value === "number") {
        return true;
    }
    else {
        return false;
    }
}
console.log(isNumber(total));
// usando no DOM ele nao retorna false e sim null, para evitar isso fazemos a verificação para ver se e tru
const button = document.querySelector("button");
// em javascript moderno fazemos a validação no inicio
button === null || button === void 0 ? void 0 : button.click();
