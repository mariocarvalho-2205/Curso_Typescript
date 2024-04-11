const input = document.querySelector("input");

const total = localStorage.getItem("Total");
// em typescript e preciso fazer a validação para sa
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value))
}


function calcularGanho(num: number) {
  const p = document.querySelector("p");
  if (p) {
      p.innerText = `Ganho total ${num + 100 - num * 0.2}`;
  }
}

function totalMudou() {
    if (input) {
        localStorage.setItem("Total ", input.value);
        calcularGanho(Number(input.value))
    }
}

if (input) {

    input.addEventListener("keyup", totalMudou);
}
