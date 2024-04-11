/**
Any
O any indica que o dado pode conter qualquer 
tipo de dado do TypeScript. Devemos evitar ao máximo 
o uso do any, pois o mesmo remove todas
as seguranças e conveniências que o TS fornece.
no tsconfig.json se colocarmos o noimplicityany como true, ele da erro

*/

function normalize (text: any) {
    return text.trim().toLowerCase()
}

console.log(normalize(" deSigN"))