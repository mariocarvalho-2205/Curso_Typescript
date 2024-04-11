"use strict";
function toNumber(value) {
    if (typeof value === "string") {
        return Number(value);
    }
    else if (typeof value === "number") {
        return value;
    }
    else {
        throw "Insira um numero ou uma string";
    }
}
console.log(toNumber(200));
console.log(toNumber("400"));
console.log(toNumber("maskdkdo")); // retorna um NaN
// console.log(toNumber(true)) // retorna o erro
