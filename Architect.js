// JQuery
$.noConflict()
jQuery(document).ready(function($) {
    // Smooth scroll
    $('.sections_link a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
                },
            );
        }
    });
})

// JavaScript
