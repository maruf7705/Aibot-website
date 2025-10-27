// Performance monitoring
window.addEventListener('load', function() {
    console.log('Page fully loaded');
    if ('connection' in navigator) {
        console.log('Network type:', navigator.connection.effectiveType);
        console.log('Data saver:', navigator.connection.saveData);
    }

    // Lazy load non-critical resources
    const lazyLoad = () => {
        const lazyElements = document.querySelectorAll('[data-src]');
        lazyElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight + 200) {
                el.src = el.getAttribute('data-src');
                el.removeAttribute('data-src');
            }
        });
    };
    
    window.addEventListener('scroll', lazyLoad);
    lazyLoad(); // Initial check
});

// Accessibility enhancements
document.addEventListener('keydown', function(e) {
    // Skip navigation for screen readers
    if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
    }
});

document.addEventListener('click', function() {
    document.body.classList.remove('user-is-tabbing');
});

// Form handling
document.addEventListener('submit', function(e) {
    if (e.target.tagName === 'FORM') {
        e.preventDefault();
        // Here you would add form submission logic
        console.log('Form submitted');
        alert('Thank you for your interest! Our team will contact you shortly.');
        
        // Reset form
        e.target.reset();
        
        // Close modal if exists
        const modal = document.getElementById('demo-modal');
        if (modal) modal.classList.add('hidden');
    }
});

// Service worker registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('ServiceWorker registration successful');
        }, err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}