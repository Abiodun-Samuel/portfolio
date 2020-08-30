$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".back-top").fadeIn(400);
        }
        else {
            $(".back-top").fadeOut(400);
        }
    });
    $(".back-top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });
});

jQuery(document).ready(function ($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL 
    $('#client-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 3000,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
});

// matchheight

$(document).ready(function () {
    $('.card').matchHeight();
});

// scroll progress bar

