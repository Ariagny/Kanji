//inicio de sesion
const Username = document.querySelector(".Username");
const Password = document.querySelector(".Password");
const formulario = document.querySelector(".formulario");
const btnInvitado = document.querySelector(".btn-inv");

let usuarios = JSON.parse(localStorage.getItem("usuarios"))  || [];

//verificar usuario
function validarUsuario (e){
    e.preventDefault();
    //llamar la información de local storage
    for (let i = 0; i < usuarios.length; i++) {
      if (Username.value === usuarios[i].userU && Password.value === usuarios[i].userP){
    
        window.location = "../index.html"
        usuarios[i].userLogged = true
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        return
    }
  }
alert("El usuario o la contraseña es incorrecta");
formulario.reset()
}

formulario.addEventListener("submit", validarUsuario)

//Modo invitado
function IniciarInvitado (e){
    e.preventDefault();
    //llamar la información de local storage
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].userU === "Invitado"){
    
        window.location = "../index.html"
        usuarios[i].userLogged = true
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        return
    }
  }
}

btnInvitado.addEventListener("click", IniciarInvitado)