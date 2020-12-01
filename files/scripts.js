const btnNext = document.querySelectorAll(".next-button");
const btnPrevious = document.querySelectorAll(".previous-button");
const sliderContainer = document.querySelector(".slider-container");
const testimonials = document.querySelectorAll(".testimonial-container");

btnNext.forEach(btn => {
    btn.addEventListener("click", () => {
    	const testimonialsWidth = testimonials[0].offsetWidth;
        sliderContainer.style.transform =  `translateX(${-testimonialsWidth}px)`;
        testimonials[0].classList.add("reduce");
        testimonials[1].classList.remove("reduce");
    });
});

btnPrevious.forEach(btn => {
    btn.addEventListener("click", () => {
        sliderContainer.style.transform =  `translateX(${0}px)`;
        testimonials[1].classList.add("reduce");
        testimonials[0].classList.remove("reduce");
    });
});