document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropdown.addEventListener('mouseover', function() {
            console.log('Mouseover - showing dropdown');
            dropdownContent.style.display = 'block';
            dropdownContent.style.opacity = '1';
            dropdownContent.style.visibility = 'visible';
            dropdownContent.style.maxHeight = '500px';
        });

        dropdown.addEventListener('mouseout', function() {
            console.log('Mouseout - hiding dropdown');
            dropdownContent.style.display = 'none';
            dropdownContent.style.opacity = '0';
            dropdownContent.style.visibility = 'hidden';
            dropdownContent.style.maxHeight = '0';
        });
    });
});