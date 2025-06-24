//registrar datos del usuario
const Username = document.querySelector(".Username");
const Nombre = document.querySelector(".Nombre");
const Password = document.querySelector(".Password");
const formulario = document.querySelector(".formulario");
const Correo = document.querySelector(".Correo");
const Apellidos = document.querySelector(".Apellidos");
const btnInvitado = document.querySelector(".btn-inv");

function registrarUser(e){
    e.preventDefault();
    let user = {
        userU: Username.value,
        userNombre: ".",
        userP: Password.value,
        userC: Correo.value,
        userLogged: false,
        certificado: false,
        progreso: 0,
        progreso1: 0,
        progreso2: 0,
        progreso3: 0,
    }
    //enviar información a local storage

    let usuarios = JSON.parse(localStorage.getItem("usuarios"))  || [];

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].userC === Correo.value) {
            alert("Este correo ya está registrado. Usa otro o inicia sesión.");
            formulario.reset();
            return;
        }
    }

    usuarios.push(user)
    localStorage.setItem("usuarios", JSON.stringify(usuarios));   
    formulario.reset()
    window.location = "../vistas/inicio-sesion.html"
}

formulario.addEventListener("submit",registrarUser)

//Modo invitado
function registrarInvitado(e){
    e.preventDefault();
    let user = {
        userU: "Invitado",
        userNombre: ".",
        userP: "none",
        userC:  "none",
        userLogged: true,
        certificado: false,
        progreso: 0,
        progreso1: 0,
        progreso2: 0,
        progreso3: 0,
    }
    //enviar información a local storage

    let usuarios = JSON.parse(localStorage.getItem("usuarios"))  || [];
    usuarios.push(user)
    localStorage.setItem("usuarios", JSON.stringify(usuarios));   
    window.location = "../index.html"
}

btnInvitado.addEventListener("click",registrarInvitado)