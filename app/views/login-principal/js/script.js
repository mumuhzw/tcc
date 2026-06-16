document.querySelector(".cadastro-form").addEventListener("submit", function(event){

    event.preventDefault();

    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if(senha.length < 6){
        alert("A senha deve ter no mínimo 6 caracteres.");
        return;
    }

    if(senha !== confirmarSenha){
        alert("As senhas não coincidem.");
        return;
    }

    alert("Conta criada com sucesso!");

    window.location.href = "../pages/principal.html";
});

const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");

const iconeSenha = document.getElementById("iconeSenha");
const iconeConfirmar = document.getElementById("iconeConfirmar");

iconeSenha.addEventListener("click", () => {
    if(senha.type === "password"){
        senha.type = "text";
        iconeSenha.setAttribute("name", "eye-off-outline");
    }else{
        senha.type = "password";
        iconeSenha.setAttribute("name", "eye-outline");
    }
});

iconeConfirmar.addEventListener("click", () => {
    if(confirmarSenha.type === "password"){
        confirmarSenha.type = "text";
        iconeConfirmar.setAttribute("name", "eye-off-outline");
    }else{
        confirmarSenha.type = "password";
        iconeConfirmar.setAttribute("name", "eye-outline");
    }
});