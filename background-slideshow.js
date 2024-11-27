const images = [
    'url("home images/7.JPEG")',
    'url("home images/8.JPEG")',
    'url("home images/9.JPEG")',
    'url("home images/6.jpg")'
];

let currentIndex = 0;

// Precarica le immagini per evitare schermi neri
function preloadImages() {
    images.forEach(imageUrl => {
        const img = new Image();
        img.src = imageUrl.replace('url("', '').replace('")', '');
    });
}

function changeBackground() {
    const backgroundElement = document.getElementById('background-slideshow');
    backgroundElement.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

// Inizializza quando il documento è pronto
document.addEventListener('DOMContentLoaded', () => {
    preloadImages(); // Precarica le immagini
    changeBackground(); // Imposta la prima immagine
    setInterval(changeBackground, 10000); // Cambia immagine ogni 10 secondi
});






