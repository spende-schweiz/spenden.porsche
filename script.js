// Global variable to store selected amount
let selectedAmount = null;

// Open modal
function openModal() {
    document.getElementById('carModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    document.getElementById('carModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('carModal');
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('carModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

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
        const href = this.getAttribute('href');
        if (href !== '#' && !href.includes('modal')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

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