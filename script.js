//alert("Hola este es mi Javascript");

//let nombre = "Daphne";
//console.log(nombre);

//SELECCIONAR ELEMENTOS

//let contenidoTitulo ="Nombre";

//let titulo = document.querySelector(".logo .fuente-acento");
//console.log(titulo);

//titulo.innerHTML = contenidoTitulo;

//CONDICIONALES

//let textoTitulo = titulo.innerText;
//console.log(textoTitulo)

//if(textoTitulo == "Nombre"){
   // titulo.innerHTML = "Mi web" //"otro"
//} else {
    //console.log("no se cumple");
//}

//FUNCIONES

//let nombre = "Ani";
//let ciudad = "Bs As";
//let gusto = "bailar";

//let parrafo = document.querySelector(".parrafo2");

//function cambiarTexto(nombre, ciudad, gusto) {
   // let contenido = `Me llamo ${nombre}, nací en ${ciudad} pero vivo en la ciudad de Ica. Me gusta ${gusto}, hacer senderismo y tomar fotografías. Me encantaría aprender a programar y lo tomo como un nuevo reto en mi vida.`;

    //return contenido;
//}

//parrafo.innerText =cambiarTexto(nombre, ciudad, gusto);

//PARA EL FORMULARIO

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
