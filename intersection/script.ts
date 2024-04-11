type Produto = {
  preco: number;
};

type Carro = {
  rodas: number;
  portas: number;
};

function handleProdutoCarro(dados: Carro & Produto) {
  console.log(dados.portas, dados.rodas, dados.preco);
}

handleProdutoCarro({
  preco: 2000,
  rodas: 4,
  portas: 5,
});

// com interface

interface interfaceProduto {
    preco2: number;
}

interface interfaceCarro {
    rodas2: number;
    portas2: number;
}


type TipoCarro = {
    rodas: number;
    portas: number;
}

// criando um novo tipo com novas propriedades
type TipoCarroComPreco = TipoCarro & {
    preco: number;
}

const dados2: TipoCarroComPreco = {
    preco: 5000,
    rodas: 4,
    portas: 4
}

console.log(dados2.preco)

// window

interface Window {
    userId: number;
}
window.userId = 200

