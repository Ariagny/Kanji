
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
        window.location = "./index.html"
    }
    }
    }
    
btnCerrarSesion.addEventListener("click",cerrarSesion)


//pop-up
const PopUp = document.querySelector(".popup");
const Sect1 = document.querySelector(".sect1");
const Sect2 = document.querySelector(".sect2");
const Sect3 = document.querySelector(".sect3");
const Sect4 = document.querySelector(".sect4");
const Equis = document.querySelector(".equis");
const Mod1 = document.querySelector(".mod1");
const Mod2 = document.querySelector(".mod2");
const Mod3 = document.querySelector(".mod3");


function AccesoModulo1(){
    /*  let currentUser = JSON.parse(localStorage.getItem('user')); */
    for (let i = 0; i < usuarios.length; i++) {
        let confirmarSesion = usuarios[i] ? usuarios[i].userLogged : false

 
        if (confirmarSesion){
            //si hay un usuario logueado, mostrarsu nombre y ocultar botones
            PopUp.style.display = 'none';
            Sect1.style.filter = 'none';
            Sect2.style.filter = 'none';
            Sect3.style.filter = 'none';
            Sect4.style.filter = 'none';
            window,location = "./vistas/modulo1.html"
            return
        }        
    }
    PopUp.style.display = 'flex';
    Sect1.style.filter = 'blur(5px)';
    Sect2.style.filter = 'blur(5px)';
    Sect3.style.filter = 'blur(5px)';
    Sect4.style.filter = 'blur(5px)';

 }

 Mod1.addEventListener('click', AccesoModulo1);

 function AccesoModulo2(){
    /*  let currentUser = JSON.parse(localStorage.getItem('user')); */
    for (let i = 0; i < usuarios.length; i++) {
        let confirmarSesion = usuarios[i] ? usuarios[i].userLogged : false

        if (confirmarSesion){
            //si hay un usuario logueado, mostrarsu nombre y ocultar botones
            
            PopUp.style.display = 'none';
            Sect1.style.filter = 'none';
            Sect2.style.filter = 'none';
            Sect3.style.filter = 'none';
            Sect4.style.filter = 'none';
            window,location = "./vistas/modulo2.html"
            return
        }     
        
    }
    PopUp.style.display = 'flex';
    Sect1.style.filter = 'blur(5px)';
    Sect2.style.filter = 'blur(5px)';
    Sect3.style.filter = 'blur(5px)';
    Sect4.style.filter = 'blur(5px)';
 }

 Mod2.addEventListener('click', AccesoModulo2);


 function AccesoModulo3(){
    /*  let currentUser = JSON.parse(localStorage.getItem('user')); */
    for (let i = 0; i < usuarios.length; i++) {
        let confirmarSesion = usuarios[i] ? usuarios[i].userLogged : false
    
     
        if (confirmarSesion){
            //si hay un usuario logueado, mostrarsu nombre y ocultar botones
            PopUp.style.display = 'none';
            Sect1.style.filter = 'none';
            Sect2.style.filter = 'none';
            Sect3.style.filter = 'none';
            Sect4.style.filter = 'none';
            window,location = "./vistas/modulo3.html"
            return
        }        
    }
    PopUp.style.display = 'flex';
    Sect1.style.filter = 'blur(5px)';
    Sect2.style.filter = 'blur(5px)';
    Sect3.style.filter = 'blur(5px)';
    Sect4.style.filter = 'blur(5px)';
 }

 Mod3.addEventListener('click', AccesoModulo3);


 function QuitarPopUp(){
   
           PopUp.style.display = 'none';
           Sect1.style.filter = 'none'; 
           Sect2.style.filter = 'none';
           Sect3.style.filter = 'none';
           Sect4.style.filter = 'none';
           return
 }

 Equis.addEventListener('click', QuitarPopUp);


