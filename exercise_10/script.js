const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const imageEl = document.querySelector("img");
const dots = [...document.querySelectorAll(".dot")];

const images = [
    "https://picsum.photos/seed/1/800/600",
    "https://picsum.photos/seed/2/800/600",
    "https://picsum.photos/seed/3/800/600"
];

let slideIndex = 1; 
let idInterval;

currentSlide();

previousBtn.addEventListener("click", previousSlide);
nextBtn.addEventListener("click", nextSlide);



function previousSlide() { 
    slideIndex--;
    if (slideIndex < 1) {
        slideIndex = images.length; 
    }
    console.log(slideIndex);
    currentSlide();
}

function nextSlide() {
    slideIndex++;
    if (slideIndex > images.length) {
        slideIndex = 1;
    }
    console.log(slideIndex);
    currentSlide();
}

function currentSlide() {
    imageEl.classList.add("fade_out");

    setTimeout(() => {
        imageEl.src = images[slideIndex-1];
        imageEl.classList.remove("fade_out");
    }, 300);

    dots.forEach((dot, index) => {
        dot.className = dot.className.replace("active", "");
        dot.addEventListener("click", () => {
            slideIndex = index + 1;
            currentSlide();
        });
    });
    dots[slideIndex-1].classList.add("active");
}

function startInterval() {
    idInterval = setInterval(nextSlide, 3000)
}

function stopInterval() {
    clearInterval(idInterval);
}

imageEl.addEventListener("mouseenter", stopInterval);
imageEl.addEventListener("mouseleave", startInterval);

startInterval();