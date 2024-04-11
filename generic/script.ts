// Generic é uma forma dinamica de passar o tipo do argumento da função, 
// classe ou interface

function retorno<T> (a: T) {
    return a
}

// a tipagem generic ao chamar a função e opcional, pois o tipo 

console.log(retorno("A Game").toUpperCase())
console.log(retorno(500).toFixed(2))

function fisrtFive<T>(lista: T[]):T[] {
    return lista.slice(0, 4)
}

// lista de valores para ser passado para a função
const numeros: number[] = [1,2,3,4,5,6,7,8,9,0]
const frutas = ["maça", "pera", "uva", "laranja", "melancia", "abacaxi", "limão"]

const fiveNumbers = fisrtFive<number>(numeros) // nao precisa ser passado o tipo
const fiveFruits = fisrtFive(frutas)

// fiveFruits.forEach((fruit) => console.log(fruit[0].toUpperCase() + fruit.substring(1)))
// fiveFruits.forEach((fruit) => console.log(`${fruit[0].toUpperCase()}${fruit.substring(1)}`))
console.log(fiveNumbers)
console.log(fiveFruits)

// validação para saber se retorna null
function notNull<T>(arg: T) {
    if (arg !== null) return arg
    else return null
}

console.log(notNull("Mario"))
console.log(notNull(200))
console.log(notNull(200)?.toString())

// verificando o tipo de dado na função
// para ser explicito no retorno, é preciso passar um objeto 
function tipoDado <T>(a: T): {dado: T, tipo: string} {
    const resultado = {
        dado: a,
        tipo: typeof a

    }
    console.log(resultado)
    return resultado
}

tipoDado("Teste")

// para selecionar o tipo de um elemento via generic, utilizamos o extends
// function extractLink<T extends HTMLElement> (el: T ) {
//     return {
//         texto: el.innerText,
//         el

//     } 
// }
// const link = document.querySelector('a')
// if (link) {

//     console.log(extractLink(link).el.href)
// }


function $<T extends Element> (selector: string): T | null {
    return document.querySelector(selector)
}
// para utilizar os metodos do elemento e necessario passar o tipo de elemento no generic
const link = $<HTMLAnchorElement>("a")?.href
console.log(link)

const url = "https://api.origamid.dev/json/notebook.json"

async function getData<T>(url: string): Promise<T> {
    const res = await fetch(url)
    return await res.json()
}

// para que nao seja retornado any, e preciso criar uma inteface

interface Notebook {
    nome: string,
    preco: number,
    descricao: string

}
// ou pode ser passado como extends na função getData
async function handleData() {
    const notebook = await getData<Notebook>(url)
    console.log(notebook)
}

handleData()