document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".dots");
    let index = 1;
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    const totalSlides = slides.length;
    
    // Clonar primera y última imagen para efecto infinito
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[totalSlides - 1].cloneNode(true);
    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, slides[0]);
    
    const allSlides = document.querySelectorAll(".slide");
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(${-slideWidth * index}px)`;

    // Crear marcadores
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll(".dot");

    // Actualizar indicadores
    function updateDots() {
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index - 1);
        });
    }

    // Deslizar con el dedo
    function touchStart(e) {
        isDragging = true;
        startPos = e.touches[0].clientX;
        animationID = requestAnimationFrame(animation);
    }

    function touchMove(e) {
        if (!isDragging) return;
        const currentPos = e.touches[0].clientX;
        currentTranslate = prevTranslate + currentPos - startPos;
    }

    function touchEnd() {
        cancelAnimationFrame(animationID);
        isDragging = false;
        const movedBy = currentTranslate - prevTranslate;

        if (movedBy < -100) nextSlide();
        else if (movedBy > 100) prevSlide();
        else setPositionByIndex();
    }

    function animation() {
        slider.style.transform = `translateX(${currentTranslate}px)`;
        if (isDragging) requestAnimationFrame(animation);
    }

    function nextSlide() {
        if (index >= totalSlides) return;
        index++;
        setPositionByIndex();
    }

    function prevSlide() {
        if (index <= 0) return;
        index--;
        setPositionByIndex();
    }

    function setPositionByIndex() {
        currentTranslate = -slideWidth * index;
        prevTranslate = currentTranslate;
        slider.style.transition = "transform 0.3s ease-in-out";
        slider.style.transform = `translateX(${currentTranslate}px)`;
        updateDots();
    }

    slider.addEventListener("transitionend", () => {
        if (index === totalSlides + 1) {
            slider.style.transition = "none";
            index = 1;
            slider.style.transform = `translateX(${-slideWidth * index}px)`;
        }
        if (index === 0) {
            slider.style.transition = "none";
            index = totalSlides;
            slider.style.transform = `translateX(${-slideWidth * index}px)`;
        }
    });

    slider.addEventListener("touchstart", touchStart);
    slider.addEventListener("touchmove", touchMove);
    slider.addEventListener("touchend", touchEnd);
});
