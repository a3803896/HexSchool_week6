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

  $("#button-addon2").click(function (e) {
    e.preventDefault();
    alert("Successfully subscribed")
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

  // 換頁時切換layout的css樣式
  $('.hamburgerIcon,.cart,.header h1 a,.header h3 a').each(function () {
    if (window.location.href.includes('shop.html')) {
      $(this).addClass('maincolor');
    }
  });
  $('.hamburgerIcon,.cart,.header h1 a,.header h3 a').each(function () {
    if (window.location.href.includes('product.html')) {
      $(this).addClass('maincolor');
    }
  });
  $('.linkInner>h3:first-child>a').each(function () {
    if (window.location.href.includes('shop.html')) {
      $(this).addClass('nowPage');
    }
  });

  // 自製按鈕
  let num = Number(document.querySelector("#numberArr").textContent);
  $("#plus").click(function (e) {
    e.preventDefault();
    num += 1;
    document.querySelector("#numberArr").textContent = num;
  });
  $("#minus").click(function (e) {
    e.preventDefault();
    if (num > 1) {
      num -= 1;
      document.querySelector("#numberArr").textContent = num;
    }
  });
  $('.toast').toast('show')

});