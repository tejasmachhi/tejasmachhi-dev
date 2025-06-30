// Initialize EmailJS with your public key
emailjs.init("9Fyn7hOcGFaBIxTdT");

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navabr = document.querySelector('.navabr');
    const body = document.body;

    // Toggle menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navabr.classList.toggle('active');
        body.style.overflow = navabr.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navabr.contains(event.target) && !hamburger.contains(event.target) && navabr.classList.contains('active')) {
            hamburger.classList.remove('active');
            navabr.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navabr.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Close menu when scrolling
    window.addEventListener('scroll', function() {
        if (navabr.classList.contains('active')) {
            hamburger.classList.remove('active');
            navabr.classList.remove('active');
            body.style.overflow = '';
        }
    });
});



   

// Image 3D tilt effect
const aboutImg = document.querySelector('.about-img');
if (aboutImg) {
    aboutImg.addEventListener('mousemove', (e) => {
        const rect = aboutImg.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        aboutImg.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        aboutImg.classList.add('moving');
    });

    aboutImg.addEventListener('mouseleave', () => {
        aboutImg.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        aboutImg.classList.remove('moving');
    });
} 