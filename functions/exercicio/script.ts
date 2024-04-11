function arredondar ( valor: string): string
function arredondar ( valor: number): number
function arredondar ( valor: number | string ): number | string {
    if (typeof valor === "number") {
        return Math.ceil(valor)
        
    } else {
        return Math.ceil(Number(valor)).toString()

    }
}

console.log(arredondar(548.38))
console.log(arredondar("548.38"))