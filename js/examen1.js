let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const PopUp = document.querySelector(".popup");
const BtnPopUp = document.querySelector(".pop-btn");
const Sect1 = document.querySelector(".sect1");
const Equis = document.querySelector(".equis");
const TextoExa = document.querySelector(".pop-text");
const TextoSig = document.querySelector(".pop-next")
const iconF = document.querySelector(".icon-f");
const BtnExa = document.querySelector(".btn-examen");
const Formulario = document.querySelector("#formulario");

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

//condicional de si gane o perdí el examen
for (let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].userLogged && acumulado >= 3){
    PopUp.style.display = 'flex';
    iconF.style.display = 'flex';
    Sect1.style.filter = 'blur(5px)';
    TextoExa.textContent =`Ganaste el examen`;
    TextoSig.style.display = 'flex';
    BtnExa.style.cursor = 'not-allowed';
    usuarios[i].progreso += 25
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    }else{
        PopUp.style.display = 'flex';
        iconF.style.display = 'none';
        Sect1.style.filter = 'blur(5px)';
        TextoExa.textContent =`Debes repetir el examen`;
        TextoSig.style.display = 'none';
        BtnExa.style.cursor = 'not-allowed';
    }
    }

}

Formulario.addEventListener("submit", ValidarRespuestas)

function QuitarPopUp(){
    PopUp.style.display = 'none';
    Sect1.style.filter = 'none'; 
    BtnExa.style.cursor = 'Pointer';
     window.location = "../vistas/introduccion.html"

}

Equis.addEventListener('click', QuitarPopUp);

function siguienteMódulo(){
     window.location = "../vistas/modulo2.html"
}

iconF.addEventListener('click', siguienteMódulo);


function Accesoexamenes(){
    /*  let currentUser = JSON.parse(localStorage.getItem('user')); */
    for (let i = 0; i < usuarios.length; i++) {
        let confirmarSesion = usuarios[i] ? usuarios[i].userLogged : false
    
     
         if (confirmarSesion){
             //si hay un usuario logueado, mostrarsu nombre y ocultar botones
             
             PopUp.style.display = 'none';
             BtnPopUp.style.display = 'none';
             iconF.style.display = 'none';
             Sect1.style.filter = 'none';
             TextoSig.style.display = 'none';
             BtnExa.disabled = false; 
             return
         }
        }
        PopUp.style.display = 'flex';
        BtnPopUp.style.display = 'flex';
        iconF.style.display = 'none';
        Sect1.style.filter = 'blur(5px)';
        TextoSig.style.display = 'none';
        BtnExa.disabled = true;  
        TextoExa.textContent =`Para acceder a nuestro contenido Regístrate`; 

 }

/*  document.addEventListener('DOMContentLoaded', Accesoexamenes); */

function InvalidarExamen(){

    for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].userLogged && usuarios[i].progreso >= 25 ){

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