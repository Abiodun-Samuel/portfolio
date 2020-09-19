
// drawer menu
function myDrawer() {
  var showDrawer = document.getElementById("drawer-content");
  if (showDrawer.style.opacity === "0") {
    (showDrawer.style.opacity = "1"), (showDrawer.style.transition = "500ms");
  } else {
    (showDrawer.style.opacity = "0"), (showDrawer.style.transition = "500ms");
  }
  };

// ========== Nav Toggle  toggle effects ==========
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navmenu = document.querySelector(".navbar-nav");
  const burgerborder = document.querySelector(".burger");

  // toggle nav
  burger.addEventListener("click", () => {
    navmenu.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    burgerborder.classList.toggle("burg");
  });
};
navSlide();

// ========== Navbar scroll effects ==========
window.onscroll = function () {
  myFunction();
};
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
var typed = new Typed(".type", {
  strings: ["Web Developer", "UI-UX Designer", "Digital Marketer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// animate on scroll
AOS.init();

// scroll progress bar
gsap.registerPlugin(ScrollTrigger);
gsap.to("progress", {
  value: 100,
  ease: "none",
  scrollTrigger: { scrub: 0.3 },
});

function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }
  requestAnimationFrame(animation);
}
var aboutme = document.querySelector(".scrolla");
var services = document.querySelector(".services");
aboutme.addEventListener("click", function () {
  smoothScroll("#aboutme", 2000);
});

services.addEventListener("click", function () {
  smoothScroll("#services", 2000);
});
