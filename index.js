const slides = document.getElementsByClassName('carousel-item')
let slidePosition = 0
const totalSlides = slides.length

document.getElementById('carousel-button-next').addEventListener('click', toNextSlide)
document.getElementById('carousel-button-prev').addEventListener('click', toPrevSlide)

function toNextSlide() {
    if (slidePosition === totalSlides - 1){
        slidePosition = 0
    }
    else {
        slidePosition++
    }
    slides[slidePosition].classList.add("carousel-item-visible")
}

function toPrevSlide() {
     
}