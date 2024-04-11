/**
 * Guard, Safety e Narrowing
O Type Guard (defesa) garante a 
Type Safety (segurança) do dado dentro do 
bloco condicional. 
Esse processo é chamado de Type Narrowing 
(estreitamento).

O TypeScript faz Control Flow (controle de fluxo) para entender qual o dado dentro da condicional.
 */

/**
Unknown
Indica que não sabemos o tipo de dados que 
pode ser passado. Diferente do any, o unknown 
só irá permitir o uso de métodos quando a 
Type Safety estiver garantida.

ou seja ele deixa passar 
 */
function typeGuard(value: any) {
  // return value.toLowerCase() // para a funçao
  if (typeof value === "string") {
    return value.toLowerCase();
  }
  if (typeof value === "number") {
    return value.toFixed(2);
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

console.log(typeGuard("ss"));
console.log(typeGuard(200));
console.log(typeGuard(document.body));

/**
 * in
O operador in verifica se o objeto possui uma 
propriedade com o mesmo nome da string comparada 
"propriedade" in obj.
 */

const obj = {
  nome: "Mario",
};

if ("nome" in obj) {
  console.log("sim");
}
if ("preço" in obj) {
  console.log("sim");
}

// verificando em uma api
interface Produto {
  nome: string;
  preco: number;
}
async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  handleProduto(data);
}

function handleProduto(data: Produto) {
  // o type guard faz a verificação para ver se realmente existe o dado passado
  if ("preco" in data) {
    document.body.innerHTML += `
        <p>Nome: ${data.nome}</p>
        <p>Preço R$ ${data.preco + 100}</p>
        `;
  } else {
    document.body.innerHTML = `
            <p>Produto nao encontrado</p>
        `;
  }
}

fetchProduto();

/*
User Type Guard

Array
Uma array não pode ser verificada com 
o typeof pois a mesma é um object. 
Podemos verificar se o dado é instanceof 
Array ou podemos usar a função Array.isArray().
*/

// interface Cursos2 {
//   nome: string;
// }

async function fetchCursos2() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  handleCursos(data);
}

fetchCursos2();

// o type guard so passa a acessar os atributos quando e feito o type guard

function handleCursos(data: unknown) {
  console.log(data);
  if (data instanceof Array) {
    console.log("É uma instancia de Array");
  }

  if (Array.isArray(data)) {
    console.log("É Array");
  }
}

/*
Type Predicate
TypeScript não executa JavaScript

Sabemos já que o TS não executa o 
JS durante a checagem dos tipos. 
Se isso ocorre, então como a 
função isArray consegue ser usada
 como Type Guard?

Com o Type Predicate :arg is type, 
podemos indicar qual o tipo de argumento 
uma função booleana (que retorna boolean) 
recebeu para ser verdadeira.

! é preciso fazer a type guard com seguraça para não retornar erro no site
*/

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function handleData(data: unknown) {
  if (isString(data)) {
    console.log(data.toUpperCase() + " o codigo esta depois da async function");
  }
}

handleData("mario");
handleData(200);

/*

Objetos
O Type Predicate pode ser especialmente 
utilizado para criarmos Type Guards para 
objetos específicos e garantirmos a Type 
Safety (segurança) do projeto.
*/

interface Produto2{
    nome: string;
    preco: number;
}

async function fetchProduto2() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json')
    const data = await response.json()
    handleProduto2(data)
}

fetchProduto2()

function isProduto2(value: unknown): value is Produto2{
    if ( value && typeof value === 'object' && 'nome' in value && 'preco' in value) {
        return true
    } else {
        return false
    }
}

function handleProduto2(data: unknown) {
    if (isProduto2(data)) {
        console.log(data)
    }
}
