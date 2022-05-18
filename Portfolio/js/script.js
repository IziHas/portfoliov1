$(window).on("load", function () {
  $(".loader .inner").fadeOut(750, function () {
    $(".loader").fadeOut(750);
  });

  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false,
    },
  });
});

$(document).ready(function () {
  $("#slides").superslides({
    animation: "fade",
    play: 4000,
    pagination: false,
  });

  let typed = new Typed(".typed", {
    strings: [
      "Software Developer...",
      "Web Designer...",
      "UI/UX Designer...",
      "Freelancer...",
      "Student...",
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false,
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  items: 4,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 2,
    },
    768: {
      items: 3,
    },
    938: {
      items: 4,
    },
  },
});

let skillsTopOffset = $(".skills-section").offset().top;

$(window).scroll(function () {
  if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
    $(".chart").easyPieChart({
      easing: "easeInOut",
      barColor: "#485460",
      trackColor: false,
      scaleColor: false,
      animation: 5000,
      lineWidth: 4,
      size: 152,
      onStep: function (from, to, percent) {
        $(this.el).find(".percent").text(Math.round(percent));
      },
    });
  }
});

$("[data-fancybox]").fancybox();

$("#filters a").click(function () {
  $("#filters .current").removeClass("current");
  $(this).addClass("current");

  let selector = $(this).attr("data-filter");
  $(".items").isotope({
    filter: selector,
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false,
    },
  });
});

const nav = $("#navigation");
const navTop = nav.offset().top;

$(window).on("scroll", stickyNavigation);

function stickyNavigation() {
  const body = $("body");

  if ($(window).scrollTop() >= navTop) {
    body.addClass("fixedNav");
  } else {
    body.removeClass("fixedNav");
  }
}
