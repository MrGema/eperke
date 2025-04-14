//map
const latitude = 47.204116283073446;
const longitude = 19.57248640423961;

const map = L.map('map').setView([latitude, longitude], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([latitude, longitude]).addTo(map)
    .bindPopup("Itt talÃ¡lsz meg minket")
    .openPopup();

function startNavigation() {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`, '_blank');
}


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const nav = document.getElementsByClassName('navbar')[0];
    const navLinks = nav.querySelectorAll('a[href^="#"]');
    
    function highlightActiveNavLink() {
        let currentSectionId = '';
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            const linkSectionId = link.getAttribute('href').substring(1);
            
            link.style.color = '';
            
            if (linkSectionId === currentSectionId) {
                link.style.color = 'var(--primary-color)';
            }
        });
    }
    highlightActiveNavLink();
    
    window.addEventListener('scroll', highlightActiveNavLink);
    
    window.addEventListener('resize', highlightActiveNavLink);
});