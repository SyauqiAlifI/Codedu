// Slideshow for "Why Choose Us"
let slideIndex = 0 // Index for the active images
slideShow()

function slideShow() {
    // Define variables
    let slides = document.getElementsByClassName("slide-images") // The Images
    let i // Public index (will be initialized later)
    let indicators = document.getElementsByClassName("s-dot") // The indicators (dots)

    // Looping for non-active images
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slideIndex++

    // Make sure the slide index is not bigger than the actual slide images
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    // Looping for non-active indicators
    for (i = 0; i < slides.length; i++) {
        indicators[i].className = indicators[i].className.replace(" active-dot", "")
    }

    // Minus-ed 1 because the slide index from 0
    slides[slideIndex - 1].style.display = "flex"
    slides[slideIndex - 1].className += " fade-in"
    setTimeout(() => {
        slides[slideIndex - 1].className = slides[slideIndex - 1].className.replace(" fade-in", "")
    }, 1000)
    indicators[slideIndex - 1].className += " active-dot"

    setTimeout(slideShow, 8000)
}