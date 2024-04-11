"use strict";
// Generic é uma forma dinamica de passar o tipo do argumento da função, 
// classe ou interface
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;
function retorno(a) {
    return a;
}
// a tipagem generic ao chamar a função e opcional, pois o tipo 
console.log(retorno("A Game").toUpperCase());
console.log(retorno(500).toFixed(2));
function fisrtFive(lista) {
    return lista.slice(0, 4);
}
// lista de valores para ser passado para a função
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const frutas = ["maça", "pera", "uva", "laranja", "melancia", "abacaxi", "limão"];
const fiveNumbers = fisrtFive(numeros); // nao precisa ser passado o tipo
const fiveFruits = fisrtFive(frutas);
// fiveFruits.forEach((fruit) => console.log(fruit[0].toUpperCase() + fruit.substring(1)))
// fiveFruits.forEach((fruit) => console.log(`${fruit[0].toUpperCase()}${fruit.substring(1)}`))
console.log(fiveNumbers);
console.log(fiveFruits);
// validação para saber se retorna null
function notNull(arg) {
    if (arg !== null)
        return arg;
    else
        return null;
}
console.log(notNull("Mario"));
console.log(notNull(200));
console.log((_a = notNull(200)) === null || _a === void 0 ? void 0 : _a.toString());
// verificando o tipo de dado na função
// para ser explicito no retorno, é preciso passar um objeto 
function tipoDado(a) {
    const resultado = {
        dado: a,
        tipo: typeof a
    };
    console.log(resultado);
    return resultado;
}
tipoDado("Teste");
// para selecionar o tipo de um elemento via generic, utilizamos o extends
// function extractLink<T extends HTMLElement> (el: T ) {
//     return {
//         texto: el.innerText,
//         el
//     } 
// }
// const link = document.querySelector('a')
// if (link) {
//     console.log(extractLink(link).el.href)
// }
function $(selector) {
    return document.querySelector(selector);
}
// para utilizar os metodos do elemento e necessario passar o tipo de elemento no generic
const link = (_b = $("a")) === null || _b === void 0 ? void 0 : _b.href;
console.log(link);
const url = "https://api.origamid.dev/json/notebook.json";
function getData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(url);
        return yield res.json();
    });
}
// ou pode ser passado como extends na função getData
function handleData() {
    return __awaiter(this, void 0, void 0, function* () {
        const notebook = yield getData(url);
        console.log(notebook);
    });
}
handleData();
