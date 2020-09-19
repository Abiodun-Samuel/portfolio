
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

// Detect if a link's href goes to the current page
function getSamePageAnchor (link) {
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
  if(elem) {
    if(e) e.preventDefault();
    gsap.to(window, {scrollTo: elem});
  }
}

// If a link's href is within the current page, scroll to it instead
document.querySelectorAll('a[href]').forEach(a => {
  a.addEventListener('click', e => {
    scrollToHash(getSamePageAnchor(a), e);
  });
});

// Scroll to the element in the URL's hash on load
scrollToHash(window.location.hash);
