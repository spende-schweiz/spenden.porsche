// Global variable to store selected amount
let selectedAmount = null;

// Select donation amount
function selectAmount(amount) {
    selectedAmount = amount;
    document.getElementById('customAmount').value = amount;
    
    // Update button styles
    const buttons = document.querySelectorAll('.donation-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Submit donation
function submitDonation() {
    const customAmountInput = document.getElementById('customAmount');
    const amount = customAmountInput.value;
    
    if (!amount || amount <= 0) {
        alert('Bitte gib einen gültigen Betrag ein');
        return;
    }
    
    // Display confirmation
    alert(`Danke für deine Spende von CHF ${amount}!\n\nDu wirst zur Zahlungsseite weitergeleitet...`);
    
    // Here you would integrate with payment processors
    console.log(`Processing donation of CHF ${amount}`);
    
    // Example: Redirect to payment processor
    // window.location.href = `https://payment-processor.com/donate?amount=${amount}`;
}

// Form submission
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Danke für deine Nachricht! Wir werden uns bald bei dir melden.');
            form.reset();
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Progress bar animation on scroll
function animateProgressBar() {
    const progressFill = document.querySelector('.progress-fill');
    const progressSection = document.querySelector('.progress-section');
    
    if (!progressSection) return;
    
    const sectionTop = progressSection.offsetTop;
    const scrollTop = window.pageYOffset;
    
    if (scrollTop + window.innerHeight > sectionTop) {
        progressFill.style.width = '31.5%';
    }
}

window.addEventListener('scroll', animateProgressBar);

// Donation tracking (local storage)
function saveDonationToHistory(amount, method) {
    const donations = JSON.parse(localStorage.getItem('donations') || '[]');
    donations.push({
        amount: amount,
        method: method,
        date: new Date().toISOString()
    });
    localStorage.setItem('donations', JSON.stringify(donations));
}

// Log donation (example)
console.log('Donation website loaded successfully');