function acessar() {

    let loginEmail = document.getElementById("loginEmail").value;

    let loginSenha = document.getElementById("loginSenha").value;

 

    if(!loginEmail || !loginSenha) {

        alert("favor preencha os campos para acessar o site");

    } else {

       alert("Campos preenchidos com sucesso");

    }
   window.location.href = "aula2.html";
}
