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

// erro TS, possíveis dados devem ser compatíveis com Element | null
// const link = document.querySelector('.link') as string;

const video = document.querySelector(".player") as HTMLVideoElement
// erro runtime, não existe volume de null se nao tiver a tag no html
// video.volume

/*
any
Podemos usar o Type Assertion para definir que um tipo any 
é qualquer tipo de dado possível.
*/

interface Produto {
    nome: string;
    preco: number;
}

async function fetchProdutoAssertion () {
    const response = await fetch("https://api.origamid.dev/json/notebook.json")
    const json = response.json()
    return json as Promise<Produto>
}



async function handleProduto1 () {
    const produto = await fetchProdutoAssertion()
    produto.nome
}

async function handleProduto2 () {
    const produto = (await fetchProdutoAssertion()) as Produto
    produto.nome
}

async function handleProduto3 () {
    const produto = await fetchProdutoAssertion()
    return (produto as Produto).nome
}

/*
! non-null operator
Indica que não existe a possibilidade do dado 
ser null. Cuidado com o uso, pois pode levar 
a erros no runtime. Use apenas se tiver certeza.

Esse é um operador de TS !. e não de JS como o ?.. 
Durante a compilação ele será removido.
*/

const video2 = document.querySelector('.player')
// erro runtime, não existe volume de null
// video2.volume

// erro runtime
// document.querySelector('a')!.href = 'https://www.origamid.com';

// Outras sintaxes alternativas possiveis
const video3 = document.querySelector(".player") as HTMLVideoElement
const video4 = <HTMLVideoElement>document.querySelector(".player")
const video5 = document.querySelector<HTMLVideoElement>(".player")
const video6 = document.querySelector(".player")

video3.volume;
video4.volume;
video5?.volume;
(video6 as HTMLVideoElement).volume