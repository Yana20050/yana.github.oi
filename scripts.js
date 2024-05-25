document.addEventListener("DOMContentLoaded", function() {
    const welcomeText = document.querySelector(".welcome-animation");
    if (welcomeText) {
        welcomeText.classList.add("fade-in");
    }
    const architectureImage = document.querySelector(".architecture-image");
    if (architectureImage) {
        architectureImage.classList.add("rotate-animation");
    }

    const gallery = document.querySelector('.gallery');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    arrowLeft.addEventListener('click', () => {
        gallery.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    arrowRight.addEventListener('click', () => {
        gallery.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
});

