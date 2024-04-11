// Type cria um atalho(alias) para o tipo customizado

type Produto = {
    nome: string;
    preco: number;
    teclado?: boolean;
  }

  /*
Interface
interface geralmente da mesma forma que type, 
porém possui uma sintaxe diferente. 
As intefaces são geralmente utilizadas para definirmos objetos.

A diferença será explorada em aulas mais avançadas. 
Por agora, vamos utilizar Type para tipos primitivos 
e Interface para objetos.
Na sintaxe nao se usa o sinal de igual

para visualizar os dados da interfaze com o mouse pressionameo o ctrl
*/

interface ProdutoInterface {
    nome: string;
    preco: number;
    teclado?: boolean;
  }

  // passamos o type como valor da propriedade na função ou variavel
function preencherDados(dados: ProdutoInterface) {

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
})

preencherDados({
    nome: "Pc",
    preco: 7500,
    teclado: true
})

preencherDados({
    nome: "Mouse",
    preco: 50
})

type Categorias = "desing" | "codigo" | "descod" | any

function pintarCategorias (categoria: Categorias) {
    if (categoria === "desing") {
        console.log("pintar de vermelho")
    } else if (categoria === "codigo") {
        console.log("pintar de Verde")
    } else if (categoria === "descod") {
        console.log("pintar de preto")
    } else {
        console.log("nao sera pintado")
    }
}

pintarCategorias("desing")
pintarCategorias("codigo")
pintarCategorias("descod")
pintarCategorias("descodd")


