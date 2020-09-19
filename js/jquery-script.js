  // bootstrap scrollspy
  $("body").scrollspy({ target: "#navie" });

  // Smooth scrolling
  var scrollLink = $(".scroll");
  scrollLink.click(function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      { duration: 2500, easing: "easeInOutBack" }
    );
  });

  //back to the top button
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".back-top").fadeIn(1000);
    } else {
      $(".back-top").fadeOut(1000);
    }
  });
  $(".back-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      { duration: 2000, easing: "swing" }
    );
  });

  //  Testimonial Carousel
  $("#client-testimonials").owlCarousel({
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
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
  });

  $(function () {
    FastClick.attach(document.body);
  });

  // matchheight
  $(".card").matchHeight();

  // porfolio filter
  $(".portfolio-list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".portfolio-item").show("1000");
    } else {
      $(".portfolio-item")
        .not("." + value)
        .hide("1000");
      $(".portfolio-item")
        .filter("." + value)
        .show("1000");
    }
    $(".portfolio-list").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  });
