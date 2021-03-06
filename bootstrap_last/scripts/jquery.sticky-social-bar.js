var stickySocialBar = $("#sticky-social-icon");
var coverHeight = $("#cover-image").height();
var dFlex = "d-flex";
var dNone = "d-none";

$(window).scroll(() => {
  /* Check on scroll */
  if ($(window).scrollTop() > coverHeight) {
    stickySocialBar.removeClass(dNone);
    stickySocialBar.addClass(dFlex);
  } else {
    stickySocialBar.removeClass(dFlex);
    stickySocialBar.addClass(dNone);
  }
});
/* Check on refresh */

if ($(window).scrollTop() > coverHeight) {
  stickySocialBar.removeClass(dNone);
  stickySocialBar.addClass(dFlex);
} else {
  stickySocialBar.removeClass(dFlex);
  stickySocialBar.addClass(dNone);
}
