const slides = document.getElementsByClassName('carousel-item')
let slidePosition = 0
const totalSlides = slides.length

document.getElementById('carousel-button-next').addEventListener('click', toNextSlide)
document.getElementById('carousel-button-prev').addEventListener('click', toPrevSlide)

function toNextSlide() {
    hideAllSlides()
    if (slidePosition === totalSlides - 1){
        slidePosition = 0
    }
    else {
        slidePosition++
    }
    slides[slidePosition].classList.add("carousel-item-visible")
}

function toPrevSlide() {
    hideAllSlides();
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

function hideAllSlides (){
    for (const images of slides) {
        images.classList.remove("carousel-item-visible")
        images.classList.add("carousel-item-hidden")
    }
}