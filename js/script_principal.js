let indexActual = 0;

function cambiarSlider(n) {
    mostrarSlider(indexActual += n);
}

function mostrarSlider(index) {
    const slides = document.querySelector('.carrusel');
    
    if (index < 0) {
        indexActual = slides.children.length - 1;
    } else if (index >= slides.children.length) {
        indexActual = 0;
    } else {
        indexActual = index;
    }

    slides.style.transform = `translateX(${-indexActual * 100}%)`;
}

document.addEventListener("DOMContentLoaded", function () {
    var agregarBtn = document.getElementById("mostrarMas");
    var quitarBtn = document.getElementById("mostrarMenos");
    var contenedor = document.getElementById("contenedor_op");
    var nuevoDiv1 = document.createElement("div");
    nuevoDiv1.className = "opinion";
    nuevoDiv1.innerHTML = `
      <img src="imagenes/usuaria.png" alt="Cliente 4">
      <p>La instalación de paneles solares en mi hogar 
      fue una excelente decisión. Ecolux hizo el proceso fácil 
      y eficiente.</p>
      <p><b> - Marta García</b></p>
    `;
    var nuevoDiv2 = document.createElement("div");
    nuevoDiv2.className = "opinion";
    nuevoDiv2.innerHTML = `
      <img src="imagenes/usuario.png" alt="Cliente 4">
      <p>Opté por la sostenibilidad en mi negocio y Ecolux 
      fue la elección perfecta. 
      Soluciones innovadoras.</p>
      <p><b> - Alejandro Rodríguez</b></p>
    `;
    var nuevoDiv3 = document.createElement("div");
    nuevoDiv3.className = "opinion";
    nuevoDiv3.innerHTML = `
      <img src="imagenes/usuaria.png" alt="Cliente 4">
      <p>La transformación hacia la energía solar con Ecolux 
      fue una experiencia muy positiva.</p>
      <p><b> - Elena López</b></p>
    `;
    var nuevosDivs = [nuevoDiv1, nuevoDiv2, nuevoDiv3];

    agregarBtn.addEventListener("click", function () {
        for (let i=0;i < nuevosDivs.length;i++){
            contenedor.appendChild(nuevosDivs[i]);
            }
        var nuevoId = document.getElementById("mostrarMas");
        nuevoId.id = "mostrarMenos";
        nuevoId.innerHTML = "Ver Menos"
    });

    quitarBtn.addEventListener("click", function () {
        var nuevoId2 = document.getElementById("mostrarMenos");
        var cont_op = document.getElementsById("contenedor_op");
        var divs_cont = document.getElementsByClassName("opinion");
        
        cont_op.removeChild(divs_cont);

        nuevoId2.id = "mostrarMas";
        nuevoId2.innerHTML = "Ver Más";
        
    });

});
/*
var pulsarMenosBtn = document.getElementById("mostrarMenos").onclick="pulsarMenos()";

function pulsarMenos() {
    var nuevoId2 = document.getElementById("mostrarMenos");
    var cont_op = document.getElementsById("contenedor_op");
    var divs_cont = cont_op.getElementsByClassName("opinion");
    
    while (divs_cont.length > 0) {

        cont_op.removeChild(divs_cont[0]);
    }

    nuevoId2.id = "mostrarMas";
    nuevoId2.innerHTML = "Ver Más"
}
*/


















var xpubli = document.getElementById('cerrarPublicidad');
function adiospubli () {
    document.getElementById('publicidad').style.display = 'none'
}
xpubli.onclick = adiospubli

var opinionesObjeto = {
    comentarios: ["Estoy muy satisfecho con los servicios de Ecolux Energy. ¡Energía limpia y atención al cliente excepcional!","La transición a la energía renovable fue fácil con Ecolux Energy. Recomiendo sus servicios a todos.","Excelente empresa. Su compromiso con la sostenibilidad es impresionante. ¡Gracias por hacer la diferencia!"],
    usuarios: ["- Núria Martínez","- Mario Pérez","- Sergio Hernández"]
};

document.getElementById("opinion1").innerHTML = opinionesObjeto.comentarios[0]
document.getElementById("opinion2").innerHTML = opinionesObjeto.comentarios[1]
document.getElementById("opinion3").innerHTML = opinionesObjeto.comentarios[2]
document.getElementById("opinion1.2").innerHTML = opinionesObjeto.usuarios[0]
document.getElementById("opinion2.2").innerHTML = opinionesObjeto.usuarios[1]
document.getElementById("opinion3.2").innerHTML = opinionesObjeto.usuarios[2]