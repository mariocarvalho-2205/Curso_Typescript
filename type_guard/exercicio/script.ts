async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  handleCursosData(data);
}

fetchCursos();

interface Cursos {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: "iniciante" | "avançado";
}
// verificando se curso e um objeto
function isCurso(cursos: unknown): cursos is Cursos {
  if (
    cursos &&
    typeof cursos === "object" &&
    "nome" in cursos &&
    "horas" in cursos &&
    "tags" in cursos
  ) {
    return true;
  } else {
    return false;
  }
}

function handleCursosData(data: unknown) {
  if (Array.isArray(data)) {
    data.filter(isCurso).forEach((item) => {
      document.body.innerHTML += `
        <div>
        <h2>${item.nome}</h2>
        <p>${item.horas} Horas</p>
        <p>Materias: ${item.tags.join(", ")}</p>
        </div>
        `;
    });
  }
}
