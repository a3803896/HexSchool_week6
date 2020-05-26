$(document).ready(() => {
  $('.toast').toast('show')

  $(".hamburgerIcon").click(function (e) {
    e.preventDefault();
    $(".hamburgerList").toggleClass("showUp");
  });

  $(".backIcon").click(function (e) {
    e.preventDefault();
    $(".hamburgerList").toggleClass("showUp");
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
  let num2 = Number(document.querySelector("#numberArr2").textContent);
  $("#plus2").click(function (e) {
    e.preventDefault();
    num2 += 1;
    document.querySelector("#numberArr2").textContent = num2;
  });
  $("#minus2").click(function (e) {
    e.preventDefault();
    if (num2 > 1) {
      num2 -= 1;
      document.querySelector("#numberArr2").textContent = num2;
    }
  });

  let num3 = Number(document.querySelector("#numberArr3").textContent);
  $("#plus3").click(function (e) {
    e.preventDefault();
    num3 += 1;
    document.querySelector("#numberArr3").textContent = num3;
  });
  $("#minus3").click(function (e) {
    e.preventDefault();
    if (num3 > 1) {
      num3 -= 1;
      document.querySelector("#numberArr3").textContent = num3;
    }
  });

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
});