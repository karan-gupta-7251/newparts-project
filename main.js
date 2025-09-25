document.addEventListener('DOMContentLoaded', function() {
    const dropdownTrigger = document.querySelector('.dropdown-trigger');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownTrigger.addEventListener('click', function() {
        dropdownMenu.classList.toggle('active');
    });

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
      event.preventDefault();

      const parentLi = event.target.closest('li');
      const subcategoriesList = parentLi.querySelector('.subcategories');

      if (subcategoriesList) {
        button.classList.toggle('active');

        if (subcategoriesList.style.display === 'block') {
          subcategoriesList.style.display = 'none';
        } else {
          subcategoriesList.style.display = 'block';
        }
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.querySelector('.img img');
  const thumbnails = document.querySelectorAll('.imgList .imgL');

  if (mainImage && thumbnails.length > 0) {
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;

        thumbnails.forEach(thumb => thumb.classList.remove('active'));

        thumbnail.classList.add('active');
      });
    });

    thumbnails[0].classList.add('active');
  }
});