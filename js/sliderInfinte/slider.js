document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".product-image-container"); // Selecciona el contenedor del slider
    const slides = document.querySelectorAll(".slide"); // Selecciona todas las imágenes dentro del slider
    const dotsContainer = document.querySelector(".dots"); // Selecciona el contenedor de los indicadores
    let index = 1; // Índice de la imagen actual
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    const totalSlides = slides.length; // Número total de imágenes
    
    // Clonar primera y última imagen para efecto infinito
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[totalSlides - 1].cloneNode(true);
    slider.appendChild(firstClone); // Agrega la primera imagen clonada al final
    slider.insertBefore(lastClone, slides[0]); // Agrega la última imagen clonada al principio
    
    const allSlides = document.querySelectorAll(".slide"); // Vuelve a seleccionar todas las imágenes con clones incluidos
    const slideWidth = slides[0].clientWidth; // Obtiene el ancho de cada imagen
    slider.style.transform = `translateX(${-slideWidth * index}px)`; // Posiciona el slider en la primera imagen real

    // Crear marcadores
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("span"); // Crea un marcador
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active"); // Activa el primer marcador
        dotsContainer.appendChild(dot); // Agrega el marcador al contenedor
    }
    const dots = document.querySelectorAll(".dot"); // Selecciona todos los marcadores

    // Actualizar indicadores visuales
    function updateDots() {
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index - 1); // Activa el marcador correspondiente
        });
    }

    // Detectar inicio del deslizamiento táctil
    function touchStart(e) {
        isDragging = true;
        startPos = e.touches[0].clientX; // Guarda la posición inicial del dedo
        animationID = requestAnimationFrame(animation); // Inicia la animación
    }

    // Detectar movimiento del deslizamiento táctil
    function touchMove(e) {
        if (!isDragging) return;
        const currentPos = e.touches[0].clientX; // Obtiene la posición actual del dedo
        currentTranslate = prevTranslate + currentPos - startPos; // Calcula la nueva posición del slider
    }

    // Detectar finalización del deslizamiento táctil
    function touchEnd() {
        cancelAnimationFrame(animationID); // Detiene la animación
        isDragging = false;
        const movedBy = currentTranslate - prevTranslate; // Calcula cuánto se deslizó

        if (movedBy < -100) nextSlide(); // Si se deslizó a la izquierda, ir a la siguiente imagen
        else if (movedBy > 100) prevSlide(); // Si se deslizó a la derecha, ir a la imagen anterior
        else setPositionByIndex(); // Si no fue suficiente para cambiar de imagen, volver a la posición original
    }

    // Animar el movimiento del slider
    function animation() {
        slider.style.transform = `translateX(${currentTranslate}px)`; // Aplica la transformación
        if (isDragging) requestAnimationFrame(animation); // Sigue animando mientras el usuario arrastra
    }

    // Mover al siguiente slide
    function nextSlide() {
        if (index >= totalSlides) return;
        index++;
        setPositionByIndex();
    }

    // Mover al slide anterior
    function prevSlide() {
        if (index <= 0) return;
        index--;
        setPositionByIndex();
    }

    // Actualizar la posición del slider y la animación
    function setPositionByIndex() {
        currentTranslate = -slideWidth * index; // Calcula la nueva posición
        prevTranslate = currentTranslate;
        slider.style.transition = "transform 0.3s ease-in-out"; // Agrega una transición suave
        slider.style.transform = `translateX(${currentTranslate}px)`; // Aplica la nueva posición
        updateDots(); // Actualiza los indicadores
    }

    // Detectar cuando se llega al final o al inicio y ajustar la posición para el loop infinito
    slider.addEventListener("transitionend", () => {
        if (index === totalSlides + 1) {
            slider.style.transition = "none"; // Elimina la transición para evitar parpadeo
            index = 1;
            slider.style.transform = `translateX(${-slideWidth * index}px)`; // Reposiciona al inicio
        }
        if (index === 0) {
            slider.style.transition = "none";
            index = totalSlides;
            slider.style.transform = `translateX(${-slideWidth * index}px)`; // Reposiciona al final
        }
    });

    // Agregar eventos táctiles
    slider.addEventListener("touchstart", touchStart);
    slider.addEventListener("touchmove", touchMove);
    slider.addEventListener("touchend", touchEnd);
});
