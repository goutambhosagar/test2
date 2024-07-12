document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown buttons
    const dropdowns = document.querySelectorAll('.dropdown');

    // Add click event listener to each dropdown
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropbtn');

        button.addEventListener('click', () => {
            // Close other dropdowns
            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove('active');
                }
            });

            // Toggle the clicked dropdown
            dropdown.classList.toggle('active');
        });
    });

    // Navbar toggle for mobile view
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbar = document.querySelector('nav');

    navbarToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
