//registrar datos del usuario
const Username = document.querySelector(".Username");
const Password = document.querySelector(".Password");
const formulario = document.querySelector(".formulario");
const Correo = document.querySelector(".Correo");
const Apellidos = document.querySelector(".Apellidos");

function registrarUser(e){
    e.preventDefault();
    let user = {
        userN: Username.value,
        userP: Password.value,
        userC: Correo.value,
        userA: Apellidos.value,
        userLogged: false
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