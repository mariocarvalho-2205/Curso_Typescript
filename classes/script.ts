// classes
/*
As classes/funções construtoras são responsáveis pela 
construção de objetos que já vimos, como MouseEvent, 
HTMLElement e os demais.
*/
console.log(document.constructor)

// criando classe
class Produto {
    nome: string
    tipo: string | undefined  // sempre que for opcional, tem que colocar o undefined com opcionao
    

    constructor(nome: string, tipo?: string) {
        this.nome = nome
        this.tipo = tipo
    }
}

const livro = new Produto("Javascript")
console.log(livro.nome)

// modificadores
/*
O TypeScript fornece diversas palavras-chave (Modifiers) 
que podem ser utilizadas em propriedades de classes modificar 
o comportamento/uso das mesmas.
*/

class Produto2 { 
    // public é o padrão
    nome: string;
    // private: só pde ser acessada dentro
    // para ter acesso ao valor do privent, somente acessando atraves do metodo getPreco como exemplo
    private id: number;
    // protected: só pde ser acessada dentro e subclasse
    // no exemplo usaremos um classe com extends
    // class Book extends Produto2
    protected preco: number;
    
    // readonly: só permite leitura
    readonly quantidade: number;

    constructor (nome: string, id: number, preco: number, quantidade: number) {
        this.nome = nome;
        this.id = id;
        this.preco = preco;
        this.quantidade = quantidade
    }

    getPreco() {
        return this.preco
    }

}

const novoLivro = new Produto2("A Saga", 1, 500, 10);

console.log(novoLivro.getPreco(), livro)