const SobreNosostros = document.querySelector(".nav-link2");
const btnIniciarSesion = document.querySelector(".nav-link4");
const btnRegistroSesion = document.querySelector(".nav-link5");
const SaludoUsuario = document.querySelector(".nav-link6");
const btnUsuario = document.querySelector(".nav-link7");
const btnlist = document.querySelector(".nav-list");
const BarrraNav = document.querySelector("#navbarNav");
const btnCerrarSesion = document.querySelector(".nav-link8");


let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//verifica si el usuario esta registrado
function verificarSesion(){
   /*  let currentUser = JSON.parse(localStorage.getItem('user')); */
   for (let i = 0; i < usuarios.length; i++) {
    let confirmarSesion = usuarios[i] ? usuarios[i].userLogged : false

    if (confirmarSesion){
        //si hay un usuario logueado, mostrarsu nombre y ocultar botones
        SaludoUsuario.textContent =`Hola, ${usuarios[i].userU}`;
        btnIniciarSesion.style.display = 'none';
        btnRegistroSesion.style.display = 'none';
        btnUsuario.style.display = 'flex';
        btnCerrarSesion.style.display = "flex"  
        return
    }
}
SaludoUsuario.textContent = '';
btnIniciarSesion.style.display = 'flex';
btnRegistroSesion.style.display = 'flex';
btnlist.classList.add('d-none');
btnlist.classList.remove('d-flex');
BarrraNav.style.justifyContent = "right"
btnCerrarSesion.style.display = "none" 

}

document.addEventListener('DOMContentLoaded', verificarSesion);

function cerrarSesion (){

    for (let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].userLogged){
        usuarios[i].userLogged = false
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        window.location = "../index.html"
    }
    }
    }
    
btnCerrarSesion.addEventListener("click",cerrarSesion)


//contenido
const Nombre = document.querySelector(".Nombre");
const Correo = document.querySelector(".Correo");
const Mensaje = document.querySelector(".Mensaje");
const Formulario = document.querySelector(".Formulario");


function registrarSugerencia(e){
    e.preventDefault();
    let Sugerencia = {
        userN: Nombre.value,
        userC: Correo.value,
        userM: Mensaje.value,
    }
    //enviar información a local storage

 
    localStorage.setItem("Sugerencia", JSON.stringify(Sugerencia));   
    Formulario.reset()
    window.location = "../index.html"
}

Formulario.addEventListener("submit",registrarSugerencia)
