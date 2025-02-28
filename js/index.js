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

    if (currentUser){
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
    window.location = " ./vistas/cerrar.html"
    }
    
    btnCerrarSesion.addEventListener("click",cerrarSesion)


//Ingresar a los módulos solo si esta logueado
const MODU1 = document.querySelector(".mod1");
const MODU2 = document.querySelector(".mod2");
const MODU3 = document.querySelector(".mod3");

function IngresarModulo1(){
    /*  let currentUser = JSON.parse(localStorage.getItem('user')); */
     if (currentUser){
         //si hay un usuario logueado, ir al modulo 1
         window.location = "./vistas/modulo1.html"

     }else {
         //si no hay usuario logueado, mostrar los botones y ocultar el nombre
         window.location = "./vistas/inicio-sesion.html"
     }
}
MODU1.addEventListener("click", IngresarModulo1);



function IngresarModulo2(){
    /*  let currentUser = JSON.parse(localStorage.getItem('user')); */
     if (currentUser){
         //si hay un usuario logueado, ir al modulo 1
         window.location = "./vistas/modulo2.html"

     }else {
         //si no hay usuario logueado, mostrar los botones y ocultar el nombre
         window.location = "./vistas/inicio-sesion.html"
     }
}
MODU2.addEventListener("click", IngresarModulo2);




function IngresarModulo3(){
    /*  let currentUser = JSON.parse(localStorage.getItem('user')); */
     if (currentUser){
         //si hay un usuario logueado, ir al modulo 1
         window.location = "./vistas/modulo3.html"

     }else {
         //si no hay usuario logueado, mostrar los botones y ocultar el nombre
         window.location = "./vistas/inicio-sesion.html"
     }
}
MODU3.addEventListener("click", IngresarModulo3);