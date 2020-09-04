$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

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


    // matchheight
    $('.card').matchHeight();

    // porfolio filter

    $('.portfolio-list').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.portfolio-item').show('1000');
        }
        else {
            $('.portfolio-item').not('.' + value).hide('1000');
            $('.portfolio-item').filter('.' + value).show('1000');
        }
        $('.portfolio-list').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    });


});


