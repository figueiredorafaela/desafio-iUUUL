const form = document.getElementById("newMessage")
const deleta = document.getElementById("deleta")
const contatos = JSON.parse(localStorage.getItem("contatos")) || []


form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const email = evento.target.elements['email']
    const mensagem = evento.target.elements['mensagem']
    
    guardaDados(nome.value, email.value, mensagem.value)
    pegaDados(contatos)

    console.log("submit")

    nome.value=""
    email.value=""
    mensagem.value=""

})

deleta.addEventListener("click", (evento) => {
    const confirma = window.confirm("Você tem certeza de que deseja DELETAR todas as mensagens?")
    if(confirma == true){
        contatos.length = 0
        console.log("apagando")
        console.log(contatos)
    }
        
})


function guardaDados(nome, email, mensagem) {

    const mensagemAtual ={
        "nome": nome,
        "email": email,
        "mensagem": mensagem
    }

    contatos.push(mensagemAtual)
    console.log("guardando")
    localStorage.setItem("contatos", JSON.stringify(contatos))

}

function pegaDados(contatos){

    for (let i = 0; i < contatos.length; i++) {
        const dados = contatos[i];
        console.log("dados:")
        console.log(dados)

   }
}

