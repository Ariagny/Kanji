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

//Ingresar a los módulos solo si esta logueado

const EXA1 = document.querySelector(".exa1");
const EXA2 = document.querySelector(".exa2");
const EXA3 = document.querySelector(".exa3");
const EXAF = document.querySelector(".exaf");
const Cand2 = document.querySelector(".cand2");
const Cand3 = document.querySelector(".cand3");
const Cand4 = document.querySelector(".cand4");



function InvalidarExamen2(){
    for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].userLogged && usuarios[i].progreso >= 25 ){
          /*   EXA2.classList.remove("Disabled"); */
            EXA2.style.cursor = "pointer"
            EXA2.style.pointerEvents = "all"
            Cand2.style.color = "#7f1b33";
            /* BtnExa.style.cursor = 'not-allowed'; */
            return
            }
        }

        
        }
 document.addEventListener('DOMContentLoaded',InvalidarExamen2); 


 function InvalidarExamen3(){
    for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].userLogged && usuarios[i].progreso >= 50 ){
          /*   EXA2.classList.remove("Disabled"); */
            EXA3.style.cursor = "pointer"
            EXA2.style.pointerEvents = "all"
            Cand3.style.color = "#7f1b33";
            
            /* BtnExa.style.cursor = 'not-allowed'; */
            return
            }
        }

        
        }
 document.addEventListener('DOMContentLoaded',InvalidarExamen3); 


 function InvalidarExamen4(){
    for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].userLogged && usuarios[i].progreso >= 75 ){
          /*   EXA2.classList.remove("Disabled"); */
            EXAF.style.cursor = "pointer"
            EXA2.style.pointerEvents = "all"
            Cand4.style.color = "#7f1b33";
            /* BtnExa.style.cursor = 'not-allowed'; */
            return
            }
        }

        
        }
 document.addEventListener('DOMContentLoaded',InvalidarExamen4); 
        