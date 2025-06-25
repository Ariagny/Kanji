//inicio de sesion
const Nombre = document.querySelector(".Nombre");
const Formulario = document.querySelector(".Formulario");

let usuarios = JSON.parse(localStorage.getItem("usuarios"))  || [];

//verificar usuario
function AgregarNombre (e){
for (let i = 0; i < usuarios.length; i++) {
    e.preventDefault();
    if(usuarios[i].userLogged){
    window.location = "./Certificado1.html"
    usuarios[i].userNombre = Nombre.value,
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    Formulario.reset()
    return
    }
    }
}

Formulario.addEventListener("submit",AgregarNombre)
