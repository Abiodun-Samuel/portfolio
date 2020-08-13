// ========== scroll effects ==========

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
}

$(document).ready(function () {
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });
});

// ========== scroll effects ==========

// ==========typing effect========== 

var typed = new Typed('.type', {
    strings: ['Full Stack Web Developer', 'UI-UX Designer', 'Digital Marketer'],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
});

// ==========typing effect ends here==========
// function OnImageLoaded(img) {
//     alert("this image has been loaded:" + img.src);
// }
// function PreLoadImage(src) {
//     var img = new Image();
//     img.onload = function () {
//         OnImageLoaded(this)
//     };
//     img.src = src;
// }
// PreLoadImage("contact-background.jpg");



// ========== scroll effects ==========
// window.addEventListener("scroll", function () {
//     var header = document.getElementById("header");
//     header.classList.toggle("sticky", window.scrollY > 0);
// })

