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

    for (let i = 0; i < usuarios.length; i++) {
        let confirmarSesion =  usuarios[i] ? usuarios[i].userLogged : false

        if (confirmarSesion){
            //si hay un usuario logueado, mostrarsu nombre y ocultar botones
            
            btnIniciarSesion.style.display = 'none';
            btnRegistroSesion.style.display = 'none';
            btnCerrarSesion.style.display = "flex"  
           return
        }
        }
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

const NombreU = document.querySelector(".NombreU");

//Nombre del usuario
function NombreUsuario(){
    for (let i = 0; i < usuarios.length; i++) {
        let confirmarSesion =  usuarios[i] ? usuarios[i].userLogged : false

        if (confirmarSesion){
            //si hay un usuario logueado, mostrarsu nombre y ocultar botones
            NombreU.textContent =`${usuarios[i].userN}`;
            return
        }
        
    }
    NombreU.textContent = '';


}

document.addEventListener('DOMContentLoaded', NombreUsuario);






// Función para actualizar las barras de progreso con sliders
function actualizarProgreso(id, valor) {
    let barra = document.getElementById(id);
    barra.style.width = valor + "%";
    barra.setAttribute("aria-valuenow", valor);
    barra.innerText = valor + "%";
}

// Función para cargar las barras progresivamente al entrar a la página
function cargarBarras() {
    setTimeout(() => actualizarProgreso('progress-aprendizaje', 80), 500);
    setTimeout(() => actualizarProgreso('progress-creatividad', 65), 800);
    setTimeout(() => actualizarProgreso('progress-productividad', 50), 1100);
}

// Seleccionar todas las opciones del dropdown para cambiar avatar
document.querySelectorAll('.avatar-option').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        let avatarSrc = this.getAttribute('data-avatar'); // Obtiene la imagen seleccionada
        document.getElementById('avatar-img').src = avatarSrc; // Cambia el avatar
    });
});

// Cargar las barras al abrir la página
window.onload = cargarBarras;


//avatar

document.querySelectorAll('.avatar-option').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        let avatarSrc = this.getAttribute('data-avatar'); // Obtiene la imagen seleccionada
        document.getElementById('avatar-img').src = avatarSrc; // Cambia el avatar
    });
})