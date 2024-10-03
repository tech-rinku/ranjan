
// =========================
// 1. Navigation Functionality
// =========================
const navButtons = document.querySelectorAll('.nav-button');
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

// Function to activate the selected section
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        navButtons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        button.classList.add('active');

        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));
        // Show the target section
        const target = button.getAttribute('data-target');
        const targetSection = document.getElementById(target);
        if (targetSection) {
            targetSection.classList.add('active');
            // Scroll to the active section smoothly
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        }
    });
});

// =========================
// 2. Hamburger Menu Toggle
// =========================
hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to document
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        }
    }
});

// =========================
// 3. Profile Picture Zoom
// =========================
const profilePic = document.getElementById('profile-pic');

profilePic.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event from bubbling up to document
    profilePic.classList.toggle('zoomed');
});

// Close zoomed image when clicking outside
document.addEventListener('click', (e) => {
    if (!profilePic.contains(e.target) && profilePic.classList.contains('zoomed')) {
        profilePic.classList.remove('zoomed');
    }
});

// =========================
// 4. About Section Interactions
// =========================
const studyButton = document.getElementById('study-interest');
const hobbyButton = document.getElementById('hobby-interest');
const studyContent = document.getElementById('study-content');
const hobbyContent = document.getElementById('hobby-content');

studyButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from bubbling up
    toggleInterest(studyButton, studyContent);
});

hobbyButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from bubbling up
    toggleInterest(hobbyButton, hobbyContent);
});

function toggleInterest(button, content) {
    const isActive = button.classList.contains('active');

    // Close all interest contents
    closeAllInterests();

    if (!isActive) {
        button.classList.add('active');
        content.style.display = 'block';
        content.setAttribute('aria-hidden', 'false');
        button.setAttribute('aria-expanded', 'true');

        // Animate list items with delay
        const items = content.querySelectorAll('li');
        items.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.2}s`;
            item.classList.add('fade-in-up');
        });
    }
}

function closeAllInterests() {
    const allButtons = document.querySelectorAll('.interest-button');
    const allContents = document.querySelectorAll('.interest-content');

    allButtons.forEach(btn => btn.classList.remove('active'));
    allContents.forEach(content => {
        content.style.display = 'none';
        content.setAttribute('aria-hidden', 'true');
        const items = content.querySelectorAll('li');
        items.forEach(item => {
            item.classList.remove('fade-in-up');
        });
    });
} 

// =========================
// 5. Typing Animation
// =========================
document.addEventListener('DOMContentLoaded', () => {
    const typingSpan = document.querySelector('.typing-text span');
    const texts = ["Java Developer", "Android Developer", "Software Engineer", "Tech Enthusiast"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delayBetween = 2000;

    function type() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            typingSpan.textContent = currentText.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, deletingSpeed);
            }
        } else {
            typingSpan.textContent = currentText.substring(0, charIndex++);
            if (charIndex > currentText.length) {
                isDeleting = true;
                setTimeout(type, delayBetween);
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }

    type();
});

// =========================
// 6. Optional: Scroll Reveal Animations
// =========================
// Uncomment and configure the following lines if using ScrollReveal library

ScrollReveal().reveal('.skill-item', { delay: 200, origin: 'bottom', distance: '50px', duration: 800, easing: 'ease-in-out' });
ScrollReveal().reveal('.certificate-item', { delay: 300, origin: 'bottom', distance: '50px', duration: 800, easing: 'ease-in-out' });
ScrollReveal().reveal('.project-item', { delay: 400, origin: 'bottom', distance: '50px', duration: 800, easing: 'ease-in-out' });





