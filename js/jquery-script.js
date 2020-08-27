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

// matchheight

$(document).ready(function () {
    $('.card').matchHeight();
});

// $('.burger').click(function () {
//     $("body").css("overflow", "hidden");
//     $("body").css("overflow", "auto");

// });