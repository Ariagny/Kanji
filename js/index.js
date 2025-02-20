/* const btnModulo1 = document.querySelector(".nav-link1");
const btnModulo2 = document.querySelector(".nav-link2");
const btnModulo3 = document.querySelector(".nav-link3"); */
const btnIniciarSesion = document.querySelector(".nav-link4");
const btnRegistroSesion = document.querySelector(".nav-link5");
const SaludoUsuario = document.querySelector(".nav-link6");
const btnUsuario = document.querySelector(".nav-link7");
const btnlist = document.querySelector(".nav-list");

let currentUser = JSON.parse(localStorage.getItem('user'));

//verifica si el usuario esta registrado
function verificarSesion(){
   /*  let currentUser = JSON.parse(localStorage.getItem('user')); */

    if (currentUser){
        //si hay un usuario logueado, mostrarsu nombre y ocultar botones
        SaludoUsuario.textContent =`hola, ${currentUser.userN}`;
        btnIniciarSesion.style.display = 'none';
        btnRegistroSesion.style.display = 'none';
        btnUsuario.style.display = 'flex'; 
    }else {
        //si no hay usuario logueado, mostrar los botones y ocultar el nombre
        SaludoUsuario.textContent = '';
        btnIniciarSesion.style.display = 'flex';
        btnRegistroSesion.style.display = 'flex';
        btnlist.classList.add('d-none')
        btnlist.classList.remove('d-flex')

    }
}


document.addEventListener('DOMContentLoaded', verificarSesion);