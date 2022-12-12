const form = document.getElementById("novaMensagem")
const deleta = document.getElementById("deleta")
const contatos = JSON.parse(localStorage.getItem("contatos")) || []


form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const email = evento.target.elements['email']
    const mensagem = evento.target.elements['mensagem']
    
    guardaDados(nome.value, email.value, mensagem.value)

    nome.value=""
    email.value=""
    mensagem.value=""

    window.location = 'mensagens.html'
})

deleta.addEventListener("click", (evento) => {
    const confirma = window.confirm("Você tem certeza de que deseja DELETAR todas as mensagens?")

    if(confirma == true){
        localStorage.clear()
        contatos.length = 0
    }
        
})

function guardaDados(nome, email, mensagem)  {

    const mensagemAtual ={
        "nome": nome,
        "email": email,
        "mensagem": mensagem
    }

    contatos.push(mensagemAtual)
 
    localStorage.setItem("contatos", JSON.stringify(contatos))
}

