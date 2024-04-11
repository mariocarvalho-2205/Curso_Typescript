interface Curso {
    nome: string;
    horas: number;
    aulas: number;
    gratuito: boolean;
    tags: string[];
    idAulas: number[];
    nivel: "iniciante" | "avancado"
};

async function fetchCusros() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json")
    const data = await response.json()
    mostrarCurso(data)
}

fetchCusros()

function mostrarCurso(cursos: Curso[]) {

    // foreach para fazer o loop
    cursos.forEach((curso) => {

        // validação para colocar a cor na variavel do estilo
        let colorName 
        let color
        if (curso.nivel === "iniciante") {
            colorName = "blue"
        } else if (curso.nivel === "avancado") {
            colorName = "red"
        }

        if (curso.gratuito === true) {
            color = "Green"
        } else if (curso.gratuito === false) {
            color = "orange"
        }

        document.body.innerHTML += `
        <div>
            <h2 style="color: ${colorName}">${curso.nome}</h2>
            <p>${curso.aulas}</p>
            <p>${curso.horas}</p>
            <p style="color: ${color}">${curso.gratuito ? "Gratuito" : "Pago"}</p>
            <p>${curso.tags.join(", ")}</p>
            <p>${curso.idAulas.join(", ")}</p>
            <p>${curso.nivel}</p>
        </div>
        `;

    })
}