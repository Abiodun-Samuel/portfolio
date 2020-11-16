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

  // if (navmenu) {
  //   navmenu.addEventListener.classList.remove("navbar-nav");
  // }
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
}

// ==========type js typing effect==========
// var typed = new Typed(".type", {
//   strings: ["Web Developer", "UI-UX Designer", "Web Designer"],
//   typeSpeed: 50,
//   backSpeed: 50,
//   loop: true,
// });

// animate on scroll
AOS.init();

// scroll progress bar
gsap.registerPlugin(ScrollTrigger);
gsap.to("progress", {
  value: 100,
  ease: "none",
  scrollTrigger: { scrub: 0.3 },
});
// var rule = CSSRulePlugin.getRule(".intro-text:after");
// // gsap.from(".intro-box", { opacity: 0, duration: 1, y: -50 });
// gsap.to(rule, { cssRule: { scaleX: 0 }, duration: 1.5 , ease: "power2.inOut"});

// Detect if a link's href goes to the current page
function getSamePageAnchor(link) {
  if (
    link.protocol !== window.location.protocol ||
    link.host !== window.location.host ||
    link.pathname !== window.location.pathname ||
    link.search !== window.location.search
  ) {
    return false;
  }

  return link.hash;
}
// Scroll to a given hash, preventing the event given if there is one
function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false;
  if (elem) {
    if (e) e.preventDefault();
    gsap.to(window, { scrollTo: elem });
  }
}
// If a link's href is within the current page, scroll to it instead
document.querySelectorAll("a[href]").forEach((a) => {
  a.addEventListener("click", (e) => {
    scrollToHash(getSamePageAnchor(a), e);
  });
});

// Scroll to the element in the URL's hash on load
scrollToHash(window.location.hash);

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: { delay: 500 },
  speed: 5000,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
