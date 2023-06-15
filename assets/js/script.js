$(document).ready(function () {
  setTimeout(function () {
    $(".mask-container .color-image").addClass("mask-animation");
  }, 200);

  function hideBackground() {
    $(".bw-image").css("display", "none");
  }

  setTimeout(hideBackground, 1500);

});
