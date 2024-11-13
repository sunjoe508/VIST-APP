document.addEventListener('DOMContentLoaded', () => {
    // Booking form submit handling
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add form submission logic here (AJAX to Google Sheets or server)
            alert('Booking submitted!');
        });
    }

    // Contact form submit handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add form submission logic here
            alert('Message sent!');
        });
    }
});
