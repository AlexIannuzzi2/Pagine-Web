

// Ottieni il bottone e la sezione contatti
const toggleButton = document.getElementById('toggleContatti');
const contattiSection = document.getElementById('contattiSection');

// Aggiungi un event listener al bottone per attivare/disattivare la sezione
toggleButton.addEventListener('click', () => {
    // Verifica se la sezione dei contatti è visibile o meno
    if (contattiSection.style.display === 'none') {
        // Se è nascosta, mostrala
        contattiSection.style.display = 'block';
        toggleButton.textContent = 'Nascondi Contatti'; // Cambia il testo del bottone
    } else {
        // Se è visibile, nascondila
        contattiSection.style.display = 'none';
        toggleButton.textContent = 'Mostra Contatti'; // Cambia il testo del bottone
    }
});



function apriCurriculum() {
    window.location.href = "file:///D:/Pagine%20Web/CurriculumVitae.html"; 

}
function apriGallery() {
    window.location.href = ("file://D:/Pagine%20Web/PhotoGallery.html"); 

}
function home() {
    window.location.href ="file:///D:/Pagine%20Web/Home%20Page%20CurriculumVitae.html"
}




// Attendi che il documento sia completamente caricato
document.addEventListener('DOMContentLoaded', function() {
    // Ottieni riferimenti ai video
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const video3 = document.getElementById('video3');

    // Array di tutti i video
    const videos = [video1, video2, video3];

    // Funzione per gestire errori di caricamento video
    function handleVideoError(e) {
        console.error('Errore nel caricamento del video:', e);
    }

    // Funzione per controllare se il video è visibile nella viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Gestione della riproduzione basata sulla visibilità
    function handleVideoVisibility() {
        videos.forEach(video => {
            if (isElementInViewport(video)) {
                if (video.paused) video.play();
            } else {
                if (!video.paused) video.pause();
            }
        });
    }

    // Aggiungi gestori eventi per ogni video
    videos.forEach(video => {
        video.addEventListener('error', handleVideoError);
        
        // Assicurati che i video siano mutati
        video.muted = true;
        
        // Riprova a caricare il video in caso di errore
        video.addEventListener('error', function() {
            setTimeout(() => {
                video.load();
            }, 1000);
        });
    });

    // Aggiungi listener per lo scroll
    window.addEventListener('scroll', handleVideoVisibility);
    window.addEventListener('resize', handleVideoVisibility);

    // Controllo iniziale della visibilità
    handleVideoVisibility();
});