"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://api.origamid.dev/json/notebook.json");
        const data = yield response.json();
        showProduct(data);
    });
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML += `
    <div>
        <h2>${data.nome}</h2>
        <p>R$ ${data.preco}</p>
        <p>${data.descricao}</p>
        <p>${data.garantia}</p>
        <p>${data.seguroAcidentes}</p>
        <p>${data.empresaFabricante.nome}</p>
        <p>${data.empresaFabricante.fundacao}</p>
        <p>${data.empresaFabricante.pais}</p>
        <p>${data.empresaMontadora.nome}</p>
        <p>${data.empresaMontadora.fundacao}</p>
        <p>${data.empresaMontadora.pais}</p>
    </div>
    `;
}
