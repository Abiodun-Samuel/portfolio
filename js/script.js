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

// $(document).ready(function () {
//     $(".navbar-toggle").on("click", function () {
//         $(this).toggleClass("active");
//     });
// });




// ==========type js typing effect========== 

var typed = new Typed('.type', {
    strings: ['Web Developer', 'UI-UX Designer', 'Digital Marketer'],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
});

// ==========typing effect ends here==========

