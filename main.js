const form = document.getElementById("newMessage")
const lista = document.getElementById("lista")
const contatos = []


form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    
    const nome = evento.target.elements['nome']
    const email = evento.target.elements['email']
    const mensagem = evento.target.elements['mensagem']
    const deleta = document.getElementById("deleta")
    
    guardaElemento(nome.value, email.value, mensagem.value)
    
    deleta.addEventListener("click", function(){
        const resultado = window.confirm("Você tem certeza de que deseja DELETAR todas as mensagens?")
        if(resultado == true)
            localStorage.clear()
    })

    nome.value=""
    email.value=""
    mensagem.value=""
 
})


function guardaElemento(nome, email, mensagem) {

    const mensagemAtual ={
        "nome": nome,
        "email": email,
        "mensagem": mensagem
    }

    contatos.push(mensagemAtual)

    localStorage.setItem("contatos", JSON.stringify(contatos))
    
}
