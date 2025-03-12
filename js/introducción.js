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

    for (let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].logged){
        usuarios[i].userLogged = false
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        window.location = "./index.html"
    }
    }
    }
    
btnCerrarSesion.addEventListener("click",cerrarSesion)

//Ingresar a los módulos solo si esta logueado

const EXA1 = document.querySelector(".exa1");
const EXA2 = document.querySelector(".exa2");
const EXA3 = document.querySelector(".exa3");
const EXAF = document.querySelector(".exaf");



function IngresarExamen1(){
    /*  let currentUser = JSON.parse(localStorage.getItem('user')); */
    let confirmarSesion = currentUser ? currentUser.userLogged : false

     if (confirmarSesion){
         //si hay un usuario logueado, ir al modulo 1
         window.location = "../vistas/examen1.html"

     }else {
         //si no hay usuario logueado, mostrar los botones y ocultar el nombre
         window.location = "../vistas/inicio-sesion.html"
     }
}
EXA1.addEventListener("click", IngresarExamen1);



function IngresarExamen2(){
    /*  let currentUser = JSON.parse(localStorage.getItem('user')); */
    let confirmarSesion = currentUser ? currentUser.userLogged : false

     if (confirmarSesion){
         //si hay un usuario logueado, ir al modulo 1
         window.location = "../vistas/examen2.html"

     }else {
         //si no hay usuario logueado, mostrar los botones y ocultar el nombre
         window.location = "../vistas/inicio-sesion.html"
     }
}
EXA2.addEventListener("click", IngresarExamen2);

function IngresarExamen3(){
    /*  let currentUser = JSON.parse(localStorage.getItem('user')); */
    let confirmarSesion = currentUser ? currentUser.userLogged : false

     if (confirmarSesion){
         //si hay un usuario logueado, ir al modulo 1
         window.location = "../vistas/examen3.html"

     }else {
         //si no hay usuario logueado, mostrar los botones y ocultar el nombre
         window.location = "../vistas/inicio-sesion.html"
     }
}
EXA3.addEventListener("click", IngresarExamen3);

function IngresarExamenF(){
    /*  let currentUser = JSON.parse(localStorage.getItem('user')); */
    let confirmarSesion = currentUser ? currentUser.userLogged : false

     if (confirmarSesion){
         //si hay un usuario logueado, ir al modulo 1
         window.location = "../vistas/examen-final.html"

     }else {
         //si no hay usuario logueado, mostrar los botones y ocultar el nombre
         window.location = "../vistas/inicio-sesion.html"
     }
}
EXAF.addEventListener("click", IngresarExamenF);