var nav = $(".navbar.navbar-dark");
var fixedTop = "fixed-top";
var headerHeight = $("#header").height() + 50;

/* Check on scroll */

$(window).scroll(() => {
  if ($(window).scrollTop() > headerHeight) nav.addClass(fixedTop);
  else nav.removeClass(fixedTop);
});

/* Check on refresh */

$(window).scroll(() => {
  if ($(window).scrollTop() > headerHeight) nav.addClass(fixedTop);
  else nav.removeClass(fixedTop);
});
