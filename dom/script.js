//Seleciona o elemento com ID "titulo" do documento(document)
let titulo = window.document.getElementById("titulo")

//Difine a cor do texto do elemento "titulo"
titulo.style.color = "#002596"

//Define a tipografia do elemento 
titulo.style.fontFamily = "Montserrat"

//Inicializa uma variavel 
let clique = 0;

//Função para contagem de cliques 
const somarCliques = () => {

    //Incrementou 1 no valor da variavel
    clique++

    //Seleciona o botaão por querSelector e atualiza a quantidad ede cliques no html
    document.querySelector("#botao").innerHTML = clique

}

const adicionarItem = () => {
    //Criar um novo elemento li(item da lista)
    let novoItem = document.createElement("li")

    //Define o texto do no item
    novoItem.textContent = "Novo Item"

    //Identifica o elemento que vai ser adicionado
    let lista = document.getElementById("minhaLista")

    //Adiciona um novo item a lista
    lista.appendChild(novoItem);
}

const voltarPagina = () =>{
    window.history.back()
}

const fecharPagina = () => {
    window.close()
}