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
;
function fetchCusros() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/cursos.json");
        const data = yield response.json();
        mostrarCurso(data);
    });
}
fetchCusros();
function mostrarCurso(cursos) {
    // foreach para fazer o loop
    cursos.forEach((curso) => {
        // validação para colocar a cor na variavel do estilo
        let colorName;
        let color;
        if (curso.nivel === "iniciante") {
            colorName = "blue";
        }
        else if (curso.nivel === "avancado") {
            colorName = "red";
        }
        if (curso.gratuito === true) {
            color = "Green";
        }
        else if (curso.gratuito === false) {
            color = "orange";
        }
        document.body.innerHTML += `
        <div>
            <h2 style="color: ${colorName}">${curso.nome}</h2>
            <p>${curso.aulas}</p>
            <p>${curso.horas}</p>
            <p style="color: ${color}">${curso.gratuito ? "Gratuito" : "Pago"}</p>
            <p>${curso.tags.join(", ")}</p>
            <p>${curso.idAulas.join(", ")}</p>
            <p>${curso.nivel}</p>
        </div>
        `;
    });
}
