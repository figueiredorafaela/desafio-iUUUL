const form = document.getElementById("newMessage")
const contatos = JSON.parse(localStorage.getItem("contatos")) || []


form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    
    const nome = evento.target.elements['nome']
    const email = evento.target.elements['email']
    const mensagem = evento.target.elements['mensagem']
    const deleta = document.getElementById("deleta")
    
    guardaDados(nome.value, email.value, mensagem.value)
    
    nome.value=""
    email.value=""
    mensagem.value=""

    pegaDados(contatos)
 
})

deleta.addEventListener("click", function(){
    const resultado = window.confirm("Você tem certeza de que deseja DELETAR todas as mensagens?")
    if(resultado == true)
        localStorage.clear()
})


function guardaDados(nome, email, mensagem) {

    const mensagemAtual ={
        "nome": nome,
        "email": email,
        "mensagem": mensagem
    }

    contatos.push(mensagemAtual)

    localStorage.setItem("contatos", JSON.stringify(contatos))
    
}

function pegaDados(contatos){

    for (let i = 0; i < contatos.length; i++) {
        const dados = contatos[i];
        console.log(dados)

   }
}
