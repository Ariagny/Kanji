let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//Ruta protegida por inicio de sesión

//Verificar existencia de sesión
const verificar = usuarios.every((item) => item.userLogged === false);

verificar ? window.location = "../index.html" : null
const SobreNosostros = document.querySelector(".nav-link2");
const btnIniciarSesion = document.querySelector(".nav-link4");
const btnRegistroSesion = document.querySelector(".nav-link5");
const SaludoUsuario = document.querySelector(".nav-link6");
const btnUsuario = document.querySelector(".nav-link7");
const btnlist = document.querySelector(".nav-list");
const BarrraNav = document.querySelector("#navbarNav");
const btnCerrarSesion = document.querySelector(".nav-link8");


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

const PopUp = document.querySelector(".popup");
const BtnPopUp = document.querySelector(".pop-btn");
const Sect1 = document.querySelector(".sect1");
const Equis = document.querySelector(".equis");
const TextoExa = document.querySelector(".pop-text");
const TextoSig = document.querySelector(".pop-next")
const iconF = document.querySelector(".icon-f");
const BtnExa = document.querySelector(".btn-examen");
const Formulario = document.querySelector("#formulario");
const Textoresp = document.querySelector(".pop-resp");
const ImgPop = document.querySelector(".img-pop");
const ImgPop2 = document.querySelector(".img-pop2");
const ImgPop3 = document.querySelector(".img-pop3");
const ImgPop4 = document.querySelector(".img-pop4");

function capturarRespuestas(){
        // Capturamos las respuestas seleccionadas
        const respuesta1 = document.querySelector('input[name="pregunta1"]:checked')?.value;
        const respuesta2 = document.querySelector('input[name="pregunta2"]:checked')?.value;
        const respuesta3 = document.querySelector('input[name="pregunta3"]:checked')?.value;
        const respuesta4 = document.querySelector('input[name="pregunta4"]:checked')?.value;
        const respuesta5 = document.querySelector('input[name="pregunta5"]:checked')?.value;
        return{
            p1: respuesta1,
            p2: respuesta2,
            p3: respuesta3,
            p4: respuesta4,
            p5: respuesta5,
        }

}


function ValidarRespuestas(e){
    e.preventDefault()
const respuestasUser = capturarRespuestas()
const respuestasCorrectas = {
    p1:"Azul",
    p2:"Fútbol",
    p3:"Pizza",
    p4:"Pop",
    p5:"Gato",
}
let acumulado = 0;

const arrayRespuestasUser = Object.values(respuestasUser)
const arrayRespuestasCorrectas = Object.values(respuestasCorrectas)

//recorrer el array de respuestasUser y el de array respuestasCorrectas y las compara
for (let i = 0; i < arrayRespuestasUser.length; i++) {
    if(arrayRespuestasUser[i] == arrayRespuestasCorrectas[i]){
        acumulado++
        Formulario.reset()
    }
    
}

//verifico cuanto lleva el usuario de progreso previo
/* let user = JSON.stringify (localStorage.getItem("user")) || {}; */

//condicional de si gane o perdí el examen
for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].userLogged && acumulado === 5) {
      PopUp.style.display = "flex";
      iconF.style.display = "flex";
      Sect1.style.filter = "blur(5px)";
      TextoExa.textContent = `Ganaste el examen`;
      Textoresp.textContent = `Tu puntaje es ${acumulado}`;
      ImgPop.style.display = "flex"
      ImgPop2.style.display = "none"
      ImgPop3.style.display = "none"
      ImgPop4.style.display = "none"
      TextoSig.style.display = "flex";
      BtnExa.style.cursor = "not-allowed";
      usuarios[i].progreso += 25;
      usuarios[i].progreso2 += 100; 
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }else if (usuarios[i].userLogged && acumulado === 3 || acumulado == 4) {
      PopUp.style.display = "flex";
      iconF.style.display = "flex";
      Sect1.style.filter = "blur(5px)";
      TextoExa.textContent = `Ganaste el examen`;
      Textoresp.textContent = `Tu puntaje es ${acumulado}`;
      ImgPop.style.display = "none"
      ImgPop2.style.display = "flex"
      ImgPop3.style.display = "none"
      ImgPop4.style.display = "none"
      TextoSig.style.display = "flex";
      BtnExa.style.cursor = "not-allowed";
      usuarios[i].progreso += 25;
      usuarios[i].progreso2 += 100;
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }else if (usuarios[i].userLogged && acumulado === 0) {
      PopUp.style.display = "flex";
      iconF.style.display = "none";
      Sect1.style.filter = "blur(5px)";
      TextoExa.textContent = `Debes repetir el examen`;
      Textoresp.textContent = `Tu puntaje es ${acumulado}`;
      ImgPop.style.display = "none"
      ImgPop2.style.display = "none"
      ImgPop3.style.display = "none"
      ImgPop4.style.display = "flex"
      TextoSig.style.display = "none";
      BtnExa.style.cursor = "not-allowed";
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    } else {
      PopUp.style.display = "flex";
      iconF.style.display = "none";
      Sect1.style.filter = "blur(5px)";
      TextoExa.textContent = `Debes repetir el examen`;
      Textoresp.textContent = `Tu puntaje es ${acumulado}`;
      ImgPop.style.display = "none"
      ImgPop2.style.display = "none"
      ImgPop3.style.display = "flex"
      ImgPop4.style.display = "none"
      TextoSig.style.display = "none";
      BtnExa.style.cursor = "not-allowed";
    }
  }
}

Formulario.addEventListener("submit", ValidarRespuestas)

function QuitarPopUp(){
/*     PopUp.style.display = 'none';
    Sect1.style.filter = 'none'; 
    BtnExa.style.cursor = 'Pointer'; */
     window.location = "../vistas/introduccion.html"

}

Equis.addEventListener('click', QuitarPopUp);

function siguienteMódulo(){
     window.location = "../vistas/modulo3.html"
}

iconF.addEventListener('click', siguienteMódulo);




function InvalidarExamen(){
    for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].userLogged && usuarios[i].progreso >= 50 ){

            PopUp.style.display = 'flex';
            iconF.style.display = 'flex';
            Sect1.style.filter = 'blur(5px)';
            TextoExa.textContent =`Ya ganaste el examen`;
            TextoSig.style.display = 'flex';
            BtnExa.disabled = true;
            /* BtnExa.style.cursor = 'not-allowed'; */
            return
            }
        }
        PopUp.style.display = 'none';
        iconF.style.display = 'none';
        Sect1.style.filter = 'none';
        TextoSig.style.display = 'none';
       /*  BtnExa.style.cursor = 'pointer'; */
       BtnExa.disabled = false;
        
        }

    document.addEventListener('DOMContentLoaded',InvalidarExamen);