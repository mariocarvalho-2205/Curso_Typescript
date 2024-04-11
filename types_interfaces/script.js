"use strict";
// Type cria um atalho(alias) para o tipo customizado
// passamos o type como valor da propriedade na função ou variavel
function preencherDados(dados) {
    document.body.innerHTML += `
        <div>
            <h2>${dados.nome}</h2>
            <p>R$ ${dados.preco}</p>
            <p>Inclui Teclado ${dados.teclado ? "Sim" : "Não"}</p>
        </div>
    `;
}
preencherDados({
    nome: "Computador",
    preco: 5000,
    teclado: false
});
preencherDados({
    nome: "Pc",
    preco: 7500,
    teclado: true
});
preencherDados({
    nome: "Mouse",
    preco: 50
});
function pintarCategorias(categoria) {
    if (categoria === "desing") {
        console.log("pintar de vermelho");
    }
    else if (categoria === "codigo") {
        console.log("pintar de Verde");
    }
    else if (categoria === "descod") {
        console.log("pintar de preto");
    }
    else {
        console.log("nao sera pintado");
    }
}
pintarCategorias("desing");
pintarCategorias("codigo");
pintarCategorias("descod");
pintarCategorias("descodd");
