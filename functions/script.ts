// a declaração do tipo implicito na propria função

function soma (a: number, b: number, c?: number):number {
    return a + b + (c ? c : 0)
}

console.log(soma(5, 6, 9))

const sub = (a: number, b: number, c?: number) => a - b - (c ? c : 0)

console.log(sub(20, 5, 6))

// declaração usando type

type Callback = (event: MouseEvent) => void

// Void
/* No JavaScript, uma função sem return irá retornar undefined. 
No TypeScript o retorno é definido como void. Isso evita usos 
errados como checagens booleanas de métodos que não 
possuem retorno. */

// O retorno de void e acontece quando uma função nao retorna nada

function pintarTela(cor: string) {
    document.body.style.backgroundColor = cor
}

pintarTela("gray")
// dessa forma nao conseguimos fazer validação booleana

const btn = document.querySelector('button')

btn?.click()

// retornando a função como underfined
function isString (value: any) {
    if (typeof value === "string") {
        return true
    }
}

console.log(isString("teste"))
console.log(isString(10))

/*
Never
O never é utilizado em casos onde a 
função gera um erro ou termina a aplicação.
Ou seja, para toda a aplicação
reduzindo ate a opacidade do codigo 
que segue apos a função
*/

// function abortar (mensagem: string): never {
//     throw new Error (mensagem)
// }

// abortar('um erro ocorreu')
// console.log('tente novamente')

// =-=-=-=-=-=-=-=-=-=-= Metodos
/*
Métodos nativos são definidos utilizando generics, 
assim podemos indicar durante a execução qual 
será o tipo esperado.
*/

interface Quadrado {
    lado: number;
    perimetro( lado: number ): number
}

function calcularQuadrado (forma: Quadrado) {
    forma.perimetro(3)
}
/**
 * 
 * Overload
Existem funções que retornam diferentes dados dependendo do argumento.

Podemos declarar a interface dessas funções utilizando function overload. Basta declarar a interface antes da definição da mesma, utilizando o mesmo nome.

O Overload deve ser compatível com a função original.

sintaxe

function normalizar(valor: string):string;
function normalizar(valor: string[]):string[];
function normalizar (valor: string | string[]): string | string[] {
    if ( typeof valor === "string") {
        return valor.trim().toUpperCase()
    } else {
        return valor.map((item) => item.trim().toUpperCase())
    }
}



 */

// function normalizar (valor: string) {
//     return valor.trim().toUpperCase()
// }
function normalizar (valor: string[]):string[]
function normalizar(valor: string):string
function normalizar (valor: string | string[]): string | string[] {
    if ( typeof valor === "string") {
        return valor.trim().toUpperCase()
    } else {
        return valor.map((item) => item.trim().toUpperCase())
    }
}

console.log(normalizar(" ProdutO Assim"))
console.log(normalizar([" banana ", "Uva"]))
