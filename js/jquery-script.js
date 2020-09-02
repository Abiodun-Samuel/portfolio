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
        items: 8,
        margin: 0,
        autoplay: true,
        dots: false,
        autoplayTimeout: 2500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 4
            },
            768: {
                items: 6
            },
            1170: {
                items: 8
            }
        }
    });

    // matchheight
    $('.card').matchHeight();

    // porfolio filter

    $('.list').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.itemBox').show('1000');
        }
        else {
            $('.itemBox').not('.' + value).hide('1000');
            $('.itemBox').filter('.' + value).show('1000');
        }
        $('.list').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    });

});


