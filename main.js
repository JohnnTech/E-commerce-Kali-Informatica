const catalogo = [
    {  
        id: 1,
        nome: "Notebook Gamer",
        marca: "Toshiba",
        preco: 1900,
        nomeArquivoImagem: "NotebookGamer.jpg",
    },
    {
        id: 2,
        nome: "Teclado  USB Preto",
        marca: "Brigid",
        preco: 45,
        nomeArquivoImagem: "Teclado.png",
    },
];

for(const produtoCatalogo of catalogo){

// const lista = ["info", "info1", "info2"]
const cartaoProduto = `<div class="border-solid border2 border-sky-500" id="card-produto-${produtoCatalogo.id}">
<img 
    src="./assets/img/${produtoCatalogo.nomeArquivoImagem}" alt="Teclado"
    style="height: 200px"
/>
<p>${produtoCatalogo.nome}</p>
<p class="marca">${produtoCatalogo.marca}</p>
<p>$${produtoCatalogo.preco}</p>
<button>Adicionar</button>
</div>`;

document.getElementById("container-produto").innerHTML += cartaoProduto;
}