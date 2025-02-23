const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const indicatorsContainer = document.getElementById('indicators');
let index = 1;
const totalSlides = slides.length;

// Clonar el primer y último slide para efecto infinito
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);
slider.appendChild(firstClone);
slider.insertBefore(lastClone, slider.firstChild);

// Ajustar la posición inicial del slider
slider.style.transform = `translateX(-100%)`;

// Crear indicadores dinámicamente según la cantidad de imágenes
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('indicator');
    if (i === 0) dot.classList.add('active');
    indicatorsContainer.appendChild(dot);
}
const indicators = document.querySelectorAll('.indicator');

function nextSlide() {
    index++;
    updateSlider();
    if (index === totalSlides + 1) {
        setTimeout(() => {
            slider.style.transition = 'none';
            index = 1;
            updateSlider();
        }, 500);
    }
}

function prevSlide() {
    index--;
    updateSlider();
    if (index === 0) {
        setTimeout(() => {
            slider.style.transition = 'none';
            index = totalSlides;
            updateSlider();
        }, 500);
    }
}

function updateSlider() {
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === (index - 1) % totalSlides);
    });
}

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);