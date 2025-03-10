function login(){
    var nome = $("#nome").val()
    var senha = $("#senha").val()
    if(nome && senha && nome === "admin" && senha === "1234"){
        const user = {
            name : nome,
            dataEntrada: new Date(),
            id: Math.floor(Math.random() * 1000000),
        }
        localStorage.setItem("usuario",JSON.stringify(user))

        window.location.href = "../Loja"
    }else{
        document.getElementById("erro-modal").style.display = "flex"
        document.getElementById("nome").style.border = "2px solid lightpink"
        document.getElementById("senha").style.border = "2px solid lightpink"
    }
}

function fecharError(){
    document.getElementById("nome").style.border = "2px solid aliceblue"
    document.getElementById("senha").style.border = "2px solid aliceblue"
    document.getElementById("erro-modal").style.display = "none"
}

function showPassword(){
    var inputSenha = document.querySelector("#senha")
    if(inputSenha.getAttribute("type")=== "password"){
        inputSenha.setAttribute("type", "text")
    }else{
        inputSenha.setAttribute("type", "password")
    }
}