let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active"); // Remove active class from all slides
    });

    slides[slideIndex].classList.add("active"); // Add active class to the current slide
    slideIndex = (slideIndex + 1) % slides.length; // Move to the next slide
}

// Initial call to display the first slide
showSlides();

// Change slide every 3 seconds
setInterval(showSlides, 3000); // Adjust the interval as needed