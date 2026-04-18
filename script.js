// MENU HAMBURGER

// On récupère le bouton hamburger
const menuToggle = document.getElementById('menu-toggle');

// On récupère le menu (la liste UL)
const navMenu = document.getElementById('nav-menu');

// Quand on clique sur le bouton hamburger
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
    document.querySelector('.eco-mobile-item').classList.toggle('open');
});

// Ferme le menu quand on clique sur un lien
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        navMenu.classList.remove('open');
    });
});

// MODE ÉCO

// Bouton (>= 768px)
const ecoToggle = document.getElementById('eco-toggle');

// Bouton (<768px)
const ecoToggleMobile = document.getElementById('eco-toggle-mobile');

// Tous les chiffres stats
const statNumbers = document.querySelectorAll('.stat-number[data-target]');

// Balise <html>
const root = document.documentElement;

// Vérifie si déjà activé
const ecoStored = localStorage.getItem('eco-mode');

if (ecoStored === 'true') {
    root.classList.add('eco');
    ecoToggle.textContent = 'Mode Éco : Activé';
    ecoToggleMobile.textContent = 'Mode Éco : Activé';
    updateEcoImages();

    // Affiche directement les valeurs (pas d'animation)
    statNumbers.forEach(el => {
        el.textContent = el.dataset.target;
    });
}

// Fonction toggle commune
function toggleEcoMode() {
    root.classList.toggle('eco');

    const isEco = root.classList.contains('eco');

    localStorage.setItem('eco-mode', isEco);

    const label = isEco ? 'Mode Éco : Activé' : 'Mode Éco : Désactivé';
    ecoToggle.textContent = label;
    ecoToggleMobile.textContent = label;

    updateEcoImages();

    // Si mode éco : on affiche directement les valeurs
    if (isEco) {
        statNumbers.forEach(el => {
            el.textContent = el.dataset.target;
        });
    } else {
        // Si on désactive → on relance l'animation
        initStatsAnimation();
    }
}

// Events
ecoToggle.addEventListener('click', toggleEcoMode);
ecoToggleMobile.addEventListener('click', toggleEcoMode);

// Gestion des images
function updateEcoImages() {
    const images = document.querySelectorAll('#photo');

    images.forEach(img => {
        const isEco = document.documentElement.classList.contains('eco');
        img.src = isEco ? img.dataset.eco : img.dataset.normal;
    });
}

// ANIMATION STATS (UNIQUEMENT SI PAS ÉCO)

function initStatsAnimation() {

    // Ne lance rien si mode éco actif
    if (document.documentElement.classList.contains('eco')) return;

    const statsSection = document.getElementById('stats');

    if (!statsSection || statNumbers.length === 0) return;

    const countUp = (el) => {
        const target = parseInt(el.dataset.target);
        const duration = 1500;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;

            if (current >= target) {
                el.textContent = target;
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current);
            }
        }, 16);
    };

    // Reset avant animation
    statNumbers.forEach(el => {
        el.textContent = 0;
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(countUp);
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statsSection);
}

// INITIALISATION

// Lance l’animation uniquement si pas en mode éco
if (!document.documentElement.classList.contains('eco')) {
    initStatsAnimation();
}