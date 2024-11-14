// Form Validation Script
document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');
    const contactForm = document.getElementById('contactForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            if (!validateBookingForm()) {
                e.preventDefault();
                alert('Please fill out all fields correctly.');
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            if (!validateContactForm()) {
                e.preventDefault();
                alert('Please fill out all fields correctly.');
            }
        });
    }

    function validateBookingForm() {
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        
        return service && date && time;
    }

    function validateContactForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        return name && email && message;
    }
});
