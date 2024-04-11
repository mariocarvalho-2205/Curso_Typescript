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
function fetchCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/cursos.json");
        const data = yield response.json();
        handleCursosData(data);
    });
}
fetchCursos();
// verificando se curso e um objeto
function isCurso(cursos) {
    if (cursos &&
        typeof cursos === "object" &&
        "nome" in cursos &&
        "horas" in cursos &&
        "tags" in cursos) {
        return true;
    }
    else {
        return false;
    }
}
function handleCursosData(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach((item) => {
            document.body.innerHTML += `
        <div>
        <h2>${item.nome}</h2>
        <p>${item.horas} Horas</p>
        <p>Materias: ${item.tags.join(", ")}</p>
        </div>
        `;
        });
    }
}
