"use strict";
/*
 null
null é um tipo primitivo que representa a ausência de valor.
É comum em funções do DOM que fazem uma busca,
retornarem null quando não são bem sucedidas.

strictNullChecks
Sem o strictNullChecks como true, o TypeScript assume que qualquer valor pode incluir null | undefined e consequentemente para de checar casos onde realmente o null | undefined podem ser retornados.

tsconfig.json

{
  "compilerOptions": {
    "target": "ESNext",
    "strict": true, // já incluso no strict
    "strictNullChecks": true
  }
}

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

undefined
undefined representa variáveis/propriedades que foram instanciadas,
porém, os seus valores ainda não foram definidos.

OBS: Sempre que o elemento retornar null, é preciso fazer uma validação com if
para saber se o elemento existe ou nao

E nunca verificamos o typeof de null

Propriedades Opcionais
Podemos definir propriedades opcionais
utilizando opcional?: string. Quando opcional,
elas poderão sempre retornar como o valor definido ou undefined.

*/
const jogo = {
    nome: "Ragnarok",
};
const livro = {};
jogo.nome;
livro.nome;
if (jogo) {
    console.log("foi definido");
}
else {
    console.log("nao foi definido");
}
if (livro.nome) {
    console.log("foi definido");
}
else {
    console.log("nao foi definido");
}
