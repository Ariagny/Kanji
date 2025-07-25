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
    
btnCerrarSesion.addEventListener("click",cerrarSesion);

//inicio de sesion
const Nombre = document.querySelector(".Nombre");
const Formulario = document.querySelector(".Formulario");

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
