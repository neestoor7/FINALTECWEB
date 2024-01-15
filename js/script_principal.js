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