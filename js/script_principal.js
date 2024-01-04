let currentIndex = 0;

function changeSlide(n) {
    showSlide(currentIndex += n);
}

function showSlide(index) {
    const slides = document.querySelector('.carousel');
    
    if (index < 0) {
        currentIndex = slides.children.length - 1;
    } else if (index >= slides.children.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

