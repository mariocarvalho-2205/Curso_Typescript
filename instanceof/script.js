"use strict";
/*
class
Em JavaScript, Classes class são funções construtoras que geram
objetos. Quando definimos uma classe,
o TypeScript gera a interface do objeto produzido pela mesma.
*/
class Product {
    // preco: number;
    constructor(nome /*, preco: number*/) {
        this.nome = nome;
        // this.preco = preco;
    }
}
// const livro = new Product("Velozes e Furiosos", 500)
// console.log(livro.nome, livro.total())
/*
instanceof - verifica se o obejeto e de determinada classe
Existem funções que retornam diferentes tipos de objetos.
Com a palavra-chave instanceof podemos verificar se um objeto
é uma instância (foi construído ou herda) de uma função construtora
(class).
*/
// console.log(livro instanceof Product)
// extends e quando uma classe herda caracteristicas de outra classe
class Livro extends Product {
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Product {
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === "O Hobbit") {
        return new Livro("O Hobbit", "J. R. R. Tolkins");
    }
    if (busca === "Dark Souls") {
        return new Jogo("Dark Souls", 1);
    }
    return null;
}
// agora podemos verificar se o produot faz parte da uma das classes
// const produto = buscarProduto("O Hobbit")
const produto = buscarProduto("Dark Souls");
if (produto instanceof Livro) {
    console.log(produto.autor);
}
if (produto instanceof Jogo) {
    console.log(produto.jogadores);
}
// O instanceof so funcionara com class, e nao com a interface ou type
