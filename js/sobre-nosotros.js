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

const niño = document.querySelector(".niño");
const sectNiño = document.querySelector(".sect-niño");
let No = 0;

function MostrarNo () {
    if (No == 0) {
        sectNiño.style.display = 'flex';
        No == 1;
    }else if (No == 1){
        sectNiño.style.display = 'none';
        No == 0;
    }
}

niño.addEventListener("click", MostrarNo)

const chico = document.querySelector(".chico");
const sectchico = document.querySelector(".sect-chico");
let Co = 0;

function MostrarCo () {
    if (Co == 0) {
        sectchico.style.display = 'flex';
        Co == 1;
    }else if (Co == 1){
        sectchico.style.display = 'none';
        Co == 0;
    }
}

chico.addEventListener("click", MostrarCo)

const hombre = document.querySelector(".Hombre");
const secthombre = document.querySelector(".sect-hombre");
let H = 0;

function MostrarH () {
    if (H == 0) {
        secthombre.style.display = 'flex';
        H == 1;
    }else if (H == 1){
        secthombre.style.display = 'none';
        H == 0;
    }
}

hombre.addEventListener("click", MostrarH)

const Gato = document.querySelector(".Gato");
const sectGato = document.querySelector(".sect-gato");
let G = 0;

function MostrarG () {
    if (G == 0) {
        sectGato.style.display = 'flex';
        G == 1;
    }else if (G == 1){
        sectGato.style.display = 'none';
        G == 0;
    }
}

Gato.addEventListener("click", MostrarG);

const niña = document.querySelector(".niña");
const sectNiña = document.querySelector(".sect-niña");
let Na = 0;

function MostrarNa () {
    if (Na == 0) {
        sectNiña.style.display = 'flex';
        Na == 1;
    }else if (Na == 1){
        sectNiña.style.display = 'none';
        Na == 0;
    }
}

niña.addEventListener("click", MostrarNa)

const chica = document.querySelector(".chica");
const sectchica = document.querySelector(".sect-chica");
let Ca = 0;

function MostrarCa () {
    if (Ca == 0) {
        sectchica.style.display = 'flex';
        Ca == 1;
    }else if (Ca == 1){
        sectchica.style.display = 'none';
        Ca == 0;
    }
}

chica.addEventListener("click", MostrarCa)

const mujer = document.querySelector(".Mujer");
const sectmujer = document.querySelector(".sect-mujer");
let M = 0;

function MostrarM () {
    if (M == 0) {
        sectmujer.style.display = 'flex';
        M == 1;
    }else if (M == 1){
        sectmujer.style.display = 'none';
        M == 0;
    }
}

mujer.addEventListener("click", MostrarM)