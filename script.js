document.addEventListener('DOMContentLoaded', function() {
    // Form Validation
    const form = document.querySelector('.form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            if (!name || !email) {
                alert('Please fill in all fields.');
                event.preventDefault();
            } else {
                alert('Form submitted!'); // Replace with server-side logic
            }
        });
    }

    // Testimonial Slider (Basic Example)
    const slider = document.querySelector('.testimonial-slider');
    if (slider) {
        let currentSlide = 0;
        const slides = slider.children;

        // Hide all slides initially
        Array.from(slides).forEach(slide => slide.style.display = 'none');
        slides[currentSlide].style.display = 'block'; // Show first slide

        setInterval(() => {
            slides[currentSlide].style.display = 'none';
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.display = 'block';
        }, 5000); // Change every 5 seconds
    }

    // See More / See Less Toggle
    const seeMoreLinks = document.querySelectorAll('.see-more-link');
    seeMoreLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent link default behavior

            const moreText = this.previousElementSibling; // Select corresponding hidden text

            // Toggle display of more text
            if (moreText.style.display === 'none' || moreText.style.display === '') {
                moreText.style.display = 'inline';
                this.textContent = 'See Less';
            } else {
                moreText.style.display = 'none';
                this.textContent = 'See More';
            }
        });
    });
});