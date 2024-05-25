document.addEventListener("DOMContentLoaded", function() {
const welcomeText = document.querySelector(".welcome-animation");
    if (welcomeText) {
        welcomeText.classList.add("fade-in");
    }
    const architectureImage = document.querySelector(".architecture-image");
    if (architectureImage) {
        architectureImage.classList.add("rotate-animation");
    }
    const gallery = document.querySelector(".gallery");
    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");
    if (gallery && leftArrow && rightArrow) {
        let currentIndex = 0;
        const images = gallery.querySelectorAll(".gallery-photo");
        const totalImages = images.length;

        function updateGallery(index) {
            images.forEach((img, i) => {
                img.style.display = i === index ? "block" : "none";
            });
        }

        leftArrow.addEventListener("click", () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
            updateGallery(currentIndex);
        });

        rightArrow.addEventListener("click", () => {
            currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
            updateGallery(currentIndex);
        });
        updateGallery(currentIndex);
    }

    const sendButtons = document.querySelectorAll("button[onclick='bookTour(this)']");
    sendButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Надіслано!");
        });
    });
});
