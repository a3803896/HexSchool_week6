$(document).ready(() => {
  $(".hamburgerIcon").click(function (e) {
    e.preventDefault();
    $(".hamburgerList").toggleClass("show");
  });

  $(".backIcon").click(function (e) {
    e.preventDefault();
    $(".hamburgerList").toggleClass("show");
  });

  $("#rotateBtn").click(function (e) {
    e.preventDefault();
    $("#rotate").toggleClass("rotate");
  });
});