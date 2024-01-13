// JavaScript for the automatic slideshow
var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

// Initial call to start the slideshow
showSlides();


// Menu Js
function navigateToPage(selectElement) {
    var selectedValue = selectElement.value;
    switch (selectedValue) {
        case 'beverages':
            window.location.href = 'beverages.html';
            break;
        case 'main-dish':
            window.location.href = 'maindish.html';
            break;
        case 'dessert':
            window.location.href = 'dessert.html';
            break;
        case 'authentic-cuisine':
            window.location.href = 'authentic.html';
            break;
        default:
            // Handle other cases or do nothing
            break;
    }
}

function navigateToPage2(selectElement) {
    var selectedValue = selectElement.value;
    switch (selectedValue) {
        case 'kbeverages':
            window.location.href = 'koreabeverages.html';
            break;
        case 'kmain-dish':
            window.location.href = 'koreamaindish.html';
            break;
        case 'kdessert':
            window.location.href = 'koreadessert.html';
            break;
        case 'kauthentic-cuisine':
            window.location.href = 'koreaauthentic.html';
            break;
        default:
            // Handle other cases or do nothing
            break;
    }
}

function navigateToPage3(selectElement) {
    var selectedValue = selectElement.value;
    switch (selectedValue) {
        case 'ibeverages':
            window.location.href = 'italybeverages.html';
            break;
        case 'imain-dish':
            window.location.href = 'italymaindish.html';
            break;
        case 'idessert':
            window.location.href = 'italydessert.html';
            break;
        case 'iauthentic-cuisine':
            window.location.href = 'italyauthentic.html';
            break;
        default:
            // Handle other cases or do nothing
            break;
    }
}
// Zoom Functions
function zoomIn(element) {
    element.style.transform = "scale(1.2)";
    var tables = document.querySelectorAll('.zoom-effect');
    tables.forEach(table => {
        if (table !== element) {
            table.classList.add('blur-out');
        }
    });
}

function zoomOut(element) {
    element.style.transform = "scale(1)";
    var tables = document.querySelectorAll('.zoom-effect');
    tables.forEach(table => {
        if (table !== element) {
            table.classList.remove('blur-out');
        }
    });
}

// About JS (using jQuery instead of $)
jQuery(document).ready(function () {
    jQuery('.rounded-circle').click(function () {
        // ... (unchanged)
    });
});

// Faqs JS (using jQuery instead of $)
jQuery(document).ready(function () {
    jQuery('[data-toggle="collapse"]').collapse();

    jQuery('.faq-section').on('show.bs.collapse', function (e) {
        jQuery('.faq-table1, .faq-table2').not(jQuery(this)).collapse('hide');
    });

    jQuery('.faq-table1, .faq-table2').on('click', function () {
        var target = jQuery(jQuery(this).data('target'));
        target.collapse('toggle');
    });
});

// Nav bar (using jQuery instead of $)
function toggleNavMenu() {
    jQuery(".navbar-collapse").toggleClass("show");
}
