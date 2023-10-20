const slides = document.getElementsByClassName("crousel-item")
let slidesPosition = 0;
const totalslide = slides.length;


const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

btnNext.addEventListener("click", nextslide);
btnPrev.addEventListener("click", prevslide);
function hideallslide () {
    for (let slide of slides) {
        slide.classList.remove("crousel-item-visible");
        slide.classList.add("crousel-item-hidden");
    }
}
function nextslide () {
    hideallslide();
    
    if (slidesPosition === totalslide){
        slidesPosition = 0;
    }
    else {
        slidesPosition++;
    }
    slides[slidesPosition].classList.add("crousel-item-visible");
}

function prevslide () {
    hideallslide();
    
    if (slidesPosition === totalslide){
        slidesPosition = 0;
    }
    else {
        slidesPosition--;
    }
    slides[slidesPosition].classList.add("crousel-item-visible");
    console.log("prev clicked")
}
