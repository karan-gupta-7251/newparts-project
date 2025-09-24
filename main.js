document.addEventListener('DOMContentLoaded', function() {
    const dropdownTrigger = document.querySelector('.dropdown-trigger');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Add a click event listener to the icon
    dropdownTrigger.addEventListener('click', function() {
        // Toggles the 'active' class on the menu
        dropdownMenu.classList.toggle('active');
    });

    // Optional: Hide the menu when clicking anywhere else on the page
    document.addEventListener('click', function(event) {
        if (!dropdownTrigger.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
});