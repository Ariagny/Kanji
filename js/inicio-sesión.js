//inicio de sesion
const Username = document.querySelector(".Username");
const Password = document.querySelector(".Password");
const formulario = document.querySelector(".formulario");

//verificar usuario
function validarUsuario (e){
    e.preventDefault();
    //llamar la información de local storage
    let currentUser = JSON.parse(localStorage.getItem("user"));

if (Username.value === currentUser.userN && Password.value === currentUser.userP){
    currentUser.userLogged = true
    localStorage.setItem("user", JSON.stringify(currentUser)
  
  
  )
    window.location = "../index.html"
}else {
  alert("El usuario o la contraseña es incorrecta");
}

formulario.reset()
}

formulario.addEventListener("submit", validarUsuario)