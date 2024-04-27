

class ProdutoNovo {
    nome = 'Produto'

    constructor( nome: string) {
        this.nome = nome
    }
    
}

const livroLivro = new ProdutoNovo("joao")

console.log(livroLivro.nome)