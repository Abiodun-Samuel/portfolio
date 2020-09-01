$(document).ready(function () {

    //back to the top button
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


    //  Testimonial Carousel
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

    $('#intro-carousel').owlCarousel({
        loop: true,
        center: false,
        items: 5,
        margin: 0,
        autoplay: true,
        dots: false,
        autoplayTimeout: 2500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            1170: {
                items: 5
            }
        }
    });


    // matchheight
    $('.card').matchHeight();

    $(window).on('load', function () {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item'
        });
        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({ filter: $(this).data('filter') });
        });
    });
});


