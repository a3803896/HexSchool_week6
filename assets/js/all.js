"use strict";

$(document).ready(function () {
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
  $("#button-addon2").click(function (e) {
    e.preventDefault();
    alert("Successfully subscribed");
  });
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: null,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }); // 換頁時切換layout的css樣式

  $('.hamburgerIcon,.cart,.header h1 a,.header h3 a').each(function () {
    if (window.location.href === "https://a3803896.github.io/HexSchool_week6/shop.html") {
      $(this).addClass('maincolor');
    }
  });
  $('.linkInner>h3:first-child>a').each(function () {
    if (window.location.href === "https://a3803896.github.io/HexSchool_week6/shop.html") {
      $(this).addClass('nowPage');
    }
  });
});
//# sourceMappingURL=all.js.map
