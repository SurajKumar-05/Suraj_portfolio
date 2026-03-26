// ======= CUSTOM CURSOR =======
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

if (dot && outline) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Animate dot instantly
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        // Animate outline with slight delay for trailing effect
        outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover effects on links & buttons
    document.querySelectorAll('a, button, input, textarea, .glass-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            outline.style.borderColor = 'var(--primary)';
            dot.style.transform = 'translate(-50%, -50%) scale(0.5)';
        });
        el.addEventListener('mouseleave', () => {
            outline.style.transform = 'translate(-50%, -50%) scale(1)';
            outline.style.borderColor = 'rgba(0, 229, 255, 0.5)';
            dot.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// ======= SCROLL PROGRESS BAR =======
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    if (scrollProgress) {
        let scrollPx = document.documentElement.scrollTop;
        let windowHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollPercent = (scrollPx / windowHeightPx) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }
});

// ======= NAVBAR BACKGROUND CHANGE ON SCROLL =======
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(11, 15, 26, 0.85)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(11, 15, 26, 0.3)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// ======= MOBILE NAVIGATION =======
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinksContainer.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// ======= ACTIVE LINK HIGHLIGHTING ON SCROLL =======
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// ======= INITIALIZE LIBRARIES =======
document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize Typed.js
    if (document.querySelector('.typing')) {
        new Typed('.typing', {
            strings: [
                "Software Engineer",
                "AI & Machine Learning Enthusiast",
            ],
            typeSpeed: 60,
            backSpeed: 35,
            backDelay: 2000,
            loop: true
        });
    }

    // 2. Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100
        });
    }


});
