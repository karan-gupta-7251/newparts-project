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

document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-subcategories');

  toggleButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      // Prevent the default button behavior
      event.preventDefault();

      // Find the parent li and the subcategories ul
      const parentLi = event.target.closest('li');
      const subcategoriesList = parentLi.querySelector('.subcategories');

      // Toggle the display of the subcategories list
      if (subcategoriesList) {
        // Toggle the 'active' class on the button to rotate the arrow
        button.classList.toggle('active');

        // Toggle the display of the subcategories
        if (subcategoriesList.style.display === 'block') {
          subcategoriesList.style.display = 'none';
        } else {
          subcategoriesList.style.display = 'block';
        }
      }
    });
  });
});