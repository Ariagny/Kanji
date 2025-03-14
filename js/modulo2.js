/* const btnModulo1 = document.querySelector(".nav-link1");
const btnModulo2 = document.querySelector(".nav-link2");
const btnModulo3 = document.querySelector(".nav-link3"); */
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
            SaludoUsuario.textContent =`Hola, ${usuarios[i].userN}`;
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

//Validar usuario

const PopUp = document.querySelector(".popup");
const Sect = document.querySelector(".sect");
const BtnDescargar = document.querySelector(".enlace-pdf");
const BtnExa = document.querySelector(".flech");

function AccesoModulos(){
    /*  let currentUser = JSON.parse(localStorage.getItem('user')); */
    for (let i = 0; i < usuarios.length; i++) {
        let confirmarSesion = usuarios[i] ? usuarios[i].userLogged : false

         if (confirmarSesion){
             //si hay un usuario logueado, mostrarsu nombre y ocultar botones
             
             PopUp.style.display = 'none';
             Sect.style.filter = 'none';
             BtnDescargar.style.cursor = 'Pointer';
             BtnExa.style.cursor = 'Pointer';  
             return
         }
        }
        PopUp.style.display = 'flex';
        Sect.style.filter = 'blur(15px)';
        BtnDescargar.style.cursor = 'not-allowed';
        BtnExa.style.cursor = 'not-allowed';  
 }

 document.addEventListener('DOMContentLoaded', AccesoModulos);