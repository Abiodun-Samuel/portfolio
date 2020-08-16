// ========== Navbar scroll effects ==========

window.onscroll = function () {
    myFunction();
}
var nav = document.getElementById("navie");
var sticky = nav.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
};

// ==========back to the top button==========
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
        }, 1000);
    });
});


// ==========type js typing effect========== 

var typed = new Typed('.type', {
    strings: ['Web Developer', 'UI-UX Designer', 'Digital Marketer'],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
});


// ==========typing effect ends here==========

