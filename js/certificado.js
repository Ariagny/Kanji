/* const btnModulo1 = document.querySelector(".nav-link1");
const btnModulo3 = document.querySelector(".nav-link3"); */
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
function verificarSesion() {
  for (let i = 0; i < usuarios.length; i++) {
    let confirmarSesion = usuarios[i] ? usuarios[i].userLogged : false;

    if (confirmarSesion) {
      //si hay un usuario logueado, mostrarsu nombre y ocultar botones
      SobreNosostros.style.display = "flex";
      btnIniciarSesion.style.display = "none";
      btnRegistroSesion.style.display = "none";
      btnCerrarSesion.style.display = "flex";
      return;
    }
  }
  SobreNosostros.style.display = "flex";
  btnIniciarSesion.style.display = "flex";
  btnRegistroSesion.style.display = "flex";
  btnlist.classList.add("d-none");
  btnlist.classList.remove("d-flex");
  BarrraNav.style.justifyContent = "right";
  btnCerrarSesion.style.display = "none";
}

document.addEventListener("DOMContentLoaded", verificarSesion);

function cerrarSesion() {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].userLogged) {
      usuarios[i].userLogged = false;
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      window.location = "../index.html";
    }
  }
}

btnCerrarSesion.addEventListener("click", cerrarSesion);

const NombreU = document.querySelector(".NombreU");

//Nombre del usuario
function NombreUsuario() {
  for (let i = 0; i < usuarios.length; i++) {
    let confirmarSesion = usuarios[i] ? usuarios[i].userLogged : false;

    if (confirmarSesion) {
      //si hay un usuario logueado, mostrarsu nombre y ocultar botones
      NombreU.textContent = `${usuarios[i].userU}`;
      return;
    }
  }
  NombreU.textContent = "";
}

document.addEventListener("DOMContentLoaded", NombreUsuario);

//Porcentaje
const BarraG = document.querySelector(".progresoG");
const Barra1 = document.querySelector(".progreso1");
const Barra2 = document.querySelector(".progreso2");
const Barra3 = document.querySelector(".progreso3");

function Barrras() {
  for (let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].userLogged){
    BarraG.style.width = `${usuarios[i].progreso}%`;
    BarraG.textContent = `${usuarios[i].progreso}%`;

    Barra1.style.width = `${usuarios[i].progreso1}%`;
    Barra1.textContent = `${usuarios[i].progreso1}%`;

    Barra2.style.width = `${usuarios[i].progreso2}%`;
    Barra2.textContent = `${usuarios[i].progreso2}%`;

    Barra3.style.width = `${usuarios[i].progreso3}%`;
    Barra3.textContent = `${usuarios[i].progreso3}%`;
    }
    
  }
}

document.addEventListener("DOMContentLoaded", Barrras);

//descargar certificado

const BtnDescargar = document.querySelector(".btn-des");
const enlaceDescargar = document.querySelector(".enla-des");

function activarDescarga() {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].userLogged && usuarios[i].progreso === 100) {
      /* BtnDescargar.style.cursor = 'pointer!important'; */
      BtnDescargar.style.background = "#7f1b33";
      BtnDescargar.disabled = false;
      enlaceDescargar.style.pointerEvents = "all"
      usuarios[i].certificado = true
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
      return
    }
  }

}

document.addEventListener("DOMContentLoaded", activarDescarga);
