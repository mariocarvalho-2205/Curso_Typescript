"use strict";
function arredondar(valor) {
    if (typeof valor === "number") {
        return Math.ceil(valor);
    }
    else {
        return Math.ceil(Number(valor)).toString();
    }
}
console.log(arredondar(548.38));
console.log(arredondar("548.38"));
