// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission
        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('button');
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Message Sent! <i class="fas fa-check"></i>';
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
            }, 2000);
        }, 1500);
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeIn');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-title, .skill-card, .project-card').forEach((el) => {
        observer.observe(el);
    });
});