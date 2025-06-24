let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const SaludoUsuario = document.querySelector(".otor2");
function verificarSesion(){
   /*  let currentUser = JSON.parse(localStorage.getItem('user')); */
   for (let i = 0; i < usuarios.length; i++) {
    let confirmarSesion = usuarios[i] ? usuarios[i].userLogged : false

    if (confirmarSesion){
        //si hay un usuario logueado, mostrarsu nombre y ocultar botones
        SaludoUsuario.textContent =`${usuarios[i].userNombre}`;
        return
    }
}

}

document.addEventListener('DOMContentLoaded', verificarSesion);
//Descargar certificado
/* 1.Capturar boton de certificado */
document.getElementById("descargarPDF").addEventListener("click" , () => {
    const certificado = document.querySelector(".certificate") 

    const options ={
        margin: 10,
        filename: "ejemplo.pdf",
        image: {type: "pdf", quality: 0.98},
        html2canvas: { scale: 2 },
        jsPDF: {
            unit:"px",
            format: [570,1010],
            orientation: "landscape"
        }
    }

    html2pdf().set(options).from(certificado).toPdf().get("pdf").then(
        function (pdf){
            const newWindow = window.open(pdf.output("bloburl", "_blank"))
        }
    );
})

