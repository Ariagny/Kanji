//inicio de sesion
const Nombre = document.querySelector(".Nombre");
const Formulario = document.querySelector(".Formulario");

let usuarios = JSON.parse(localStorage.getItem("usuarios"))  || [];

//verificar usuario
function AgregarNombre (e){
    e.preventDefault();
window.location = "./Certificado1.html"
usuarios[i].userNombre = Nombre.value,
localStorage.setItem("usuarios", JSON.stringify(usuarios))
formulario.reset()
}

Formulario.addEventListener("submit",AgregarNombre)
