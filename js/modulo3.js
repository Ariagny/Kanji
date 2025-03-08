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


let currentUser = JSON.parse(localStorage.getItem('user'));

//verifica si el usuario esta registrado
function verificarSesion(){
   /*  let currentUser = JSON.parse(localStorage.getItem('user')); */
   let confirmarSesion = currentUser ? currentUser.userLogged : false

    if (confirmarSesion){
        //si hay un usuario logueado, mostrarsu nombre y ocultar botones
        SaludoUsuario.textContent =`Hola, ${currentUser.userN}`;
        btnIniciarSesion.style.display = 'none';
        btnRegistroSesion.style.display = 'none';
        btnUsuario.style.display = 'flex';
        btnCerrarSesion.style.display = "flex"  
    }else {
        //si no hay usuario logueado, mostrar los botones y ocultar el nombre
        SaludoUsuario.textContent = '';
        btnIniciarSesion.style.display = 'flex';
        btnRegistroSesion.style.display = 'flex';
        btnlist.classList.add('d-none');
        btnlist.classList.remove('d-flex');
        BarrraNav.style.justifyContent = "right"
        btnCerrarSesion.style.display = "none" 

    }
}
document.addEventListener('DOMContentLoaded', verificarSesion);

function cerrarSesion (){
    currentUser.userLogged = false
    localStorage.setItem("user", JSON.stringify(currentUser))
    window.location = "../index.html"
    }
    
btnCerrarSesion.addEventListener("click",cerrarSesion)

//Validar usuario

const PopUp = document.querySelector(".popup");
const Sect = document.querySelector(".sect");
const BtnDescargar = document.querySelector(".enlace-pdf");
const BtnExa = document.querySelector(".flech");

function AccesoModulos(){
    /*  let currentUser = JSON.parse(localStorage.getItem('user')); */
    let confirmarSesion = currentUser ? currentUser.userLogged : false

 
     if (confirmarSesion){
         //si hay un usuario logueado, mostrarsu nombre y ocultar botones
         
         PopUp.style.display = 'none';
         Sect.style.filter = 'none';
         BtnDescargar.style.cursor = 'Pointer';
         BtnExa.style.cursor = 'Pointer';  
     }else {
         //si no hay usuario logueado, mostrar los botones y ocultar el nombre
         PopUp.style.display = 'flex';
         Sect.style.filter = 'blur(15px)';
         BtnDescargar.style.cursor = 'not-allowed';
         BtnExa.style.cursor = 'not-allowed';  
 
     }
 }

 document.addEventListener('DOMContentLoaded', AccesoModulos);