// Obtener el elemento del slider
const slider = document.getElementById('slider');
// Obtener todos los elementos con la clase 'slide'
const slides = document.querySelectorAll('.slide');
// Obtener el contenedor de los indicadores
const indicatorsContainer = document.getElementById('indicators');
// Inicializar el índice del slide actual
let index = 1;
// Obtener el número total de slides
const totalSlides = slides.length;

// Clonar el primer y último slide para efecto infinito
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);
// Añadir el primer clon al final del slider
slider.appendChild(firstClone);
// Añadir el último clon al principio del slider
slider.insertBefore(lastClone, slider.firstChild);

// Ajustar la posición inicial del slider
slider.style.transform = `translateX(-100%)`;

// Crear indicadores dinámicamente según la cantidad de imágenes
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('indicator');
    if (i === 0) dot.classList.add('active'); // Activar el primer indicador
    indicatorsContainer.appendChild(dot);
}
// Obtener todos los indicadores
const indicators = document.querySelectorAll('.indicator');

// Función para mostrar el siguiente slide
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

// Función para mostrar el slide anterior
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

// Función para actualizar la posición del slider y los indicadores
function updateSlider() {
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === (index - 1) % totalSlides);
    });
}

// Añadir evento de clic al botón 'next' para mostrar el siguiente slide
document.getElementById('next').addEventListener('click', nextSlide);
// Añadir evento de clic al botón 'prev' para mostrar el slide anterior
document.getElementById('prev').addEventListener('click', prevSlide);