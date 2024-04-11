// valores de string, number e boolean
const frase: string = "Front End"
const preco: number = 1500.50
const condi: boolean = preco > 1000

console.log(typeof frase)
console.log(typeof preco)
console.log(typeof condi)
console.log(typeof null) 

// conhecido como type guard
if (typeof frase === "string") {
    console.log('frase e string')
}

if (typeof preco === "number") {
    console.log('frase e number')
}

if (typeof frase === "boolean") {
    console.log('frase e boolean')
}

// ! Não confundir String Number Boolean
const frase1 = new String("Frase 1")
const frase2 = String("frase 2")

console.log(frase1) // retorn String {"frase"}
console.log(typeof frase1) // retorna object
console.log(typeof frase2) // retorna string
