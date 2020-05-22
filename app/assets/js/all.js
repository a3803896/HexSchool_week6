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
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: null,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});