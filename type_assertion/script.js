"use strict";
/*
as
Com o Type Assertion é possível "indicar"
ao TypeScript qual o tipo de dado esperado
com a palavra-chave as. Só é possível indicar
tipos que possuam relação com o tipo original.

Evitar ao máximo o uso de Type Assertion,
pois a segurança (Type Safety) é perdida quando
indicamos algo que nem sempre será verdade.
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// erro TS, possíveis dados devem ser compatíveis com Element | null
// const link = document.querySelector('.link') as string;
const video = document.querySelector(".player");
function fetchProdutoAssertion() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/notebook.json");
        const json = response.json();
        return json;
    });
}
function handleProduto1() {
    return __awaiter(this, void 0, void 0, function* () {
        const produto = yield fetchProdutoAssertion();
        produto.nome;
    });
}
function handleProduto2() {
    return __awaiter(this, void 0, void 0, function* () {
        const produto = (yield fetchProdutoAssertion());
        produto.nome;
    });
}
function handleProduto3() {
    return __awaiter(this, void 0, void 0, function* () {
        const produto = yield fetchProdutoAssertion();
        return produto.nome;
    });
}
/*
! non-null operator
Indica que não existe a possibilidade do dado
ser null. Cuidado com o uso, pois pode levar
a erros no runtime. Use apenas se tiver certeza.

Esse é um operador de TS !. e não de JS como o ?..
Durante a compilação ele será removido.
*/
const video2 = document.querySelector('.player');
// erro runtime, não existe volume de null
// video2.volume
// erro runtime
// document.querySelector('a')!.href = 'https://www.origamid.com';
// Outras sintaxes alternativas possiveis
const video3 = document.querySelector(".player");
const video4 = document.querySelector(".player");
const video5 = document.querySelector(".player");
const video6 = document.querySelector(".player");
video3.volume;
video4.volume;
video5 === null || video5 === void 0 ? void 0 : video5.volume;
video6.volume;
