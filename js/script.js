// ========== Nav Toggle effects ==========

const navSlide = () => {

    const burger = document.querySelector(".burger");
    const navmenu = document.querySelector(".navbar-nav");
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const burgerborder = document.querySelector(".burger");

    // toggle nav
    burger.addEventListener("click", () => {

        navmenu.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        burgerborder.classList.toggle('burg');

    });
}
navSlide();

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

// ==========type js typing effect========== 

var typed = new Typed('.type', {
    strings: ['Web Developer', 'UI-UX Designer', 'Digital Marketer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});

// ==========typing effect ends here==========

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
        }, 500);
    });
});

// scroll progress bar

gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: { scrub: 0.3 }
});

// scroll progress bar 