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

