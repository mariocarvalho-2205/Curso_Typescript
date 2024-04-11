interface Empresa {
    nome: string;
    fundacao: number;
    pais: string;
}

interface ProdutoNovo {
    nome: string;
    preco: number;
    descricao: string;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante: Empresa;
    empresaMontadora: Empresa;
}

async function fetchProduct() {
    const response = await fetch("http://api.origamid.dev/json/notebook.json")
    const data = await response.json()
    showProduct(data)
}

fetchProduct()

function showProduct (data: ProdutoNovo) {
    document.body.innerHTML += `
    <div>
        <h2>${data.nome}</h2>
        <p>R$ ${data.preco}</p>
        <p>${data.descricao}</p>
        <p>${data.garantia}</p>
        <p>${data.seguroAcidentes}</p>
        <p>${data.empresaFabricante.nome}</p>
        <p>${data.empresaFabricante.fundacao}</p>
        <p>${data.empresaFabricante.pais}</p>
        <p>${data.empresaMontadora.nome}</p>
        <p>${data.empresaMontadora.fundacao}</p>
        <p>${data.empresaMontadora.pais}</p>
    </div>
    `;
}
