// navbar dropdown script code start

document.addEventListener('DOMContentLoaded', function() {

    const dropdownItem = document.querySelector('.navbar-list-item');
    const dropdown = document.querySelector('.navbar-dropdown');

    // Show dropdown on hover
    dropdownItem.addEventListener('mouseenter', function() {
        dropdown.style.display = 'block';
    });

    // Keep dropdown open when hovering over dropdown itself
    dropdown.addEventListener('mouseenter', function() {
        dropdown.style.display = 'block';
    });

    // Hide dropdown when mouse leaves dropdown item
    dropdownItem.addEventListener('mouseleave', function() {
        setTimeout(function() {
            if (!dropdown.matches(':hover')) {
                dropdown.style.display = 'none';
            }
        }, 100);
    });

    // Hide dropdown when mouse leaves dropdown
    dropdown.addEventListener('mouseleave', function() {
        dropdown.style.display = 'none';
    });

});

// navbar dropdown script code end