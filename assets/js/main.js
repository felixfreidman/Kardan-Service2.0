"use strict";

// ymaps.ready(init);
// function init() {
//     var myMap = new ymaps.Map('map', {
//         center: [56.81122355, 60.72763708],
//         zoom: 14
//     }),
//         myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//             balloonContent: 'г. Екатеринбург, ул. Летняя, 20',
//             iconCaption: 'г. Екатеринбург, ул. Летняя, 20',
//         }, {
//             iconLayout: 'default#image',
//             iconImageHref: "<?php echo get_template_directory_uri() . '/assets/images/content/logo_custom.svg'?>",
//             iconImageSize: [30, 42],
//             iconImageOffset: [-5, -38],
//         })
//     myMap.geoObjects
//         .add(myPlacemark);
// }
// AOS.init();
var darkLayer = document.querySelector(".dark-layer");
var applyBtns = document.querySelectorAll(".modal-button");
var closeForm = document.getElementById("closeForm");
applyBtns.forEach(function (button) {
  button.addEventListener("click", function () {
    darkLayer.classList.toggle("js--hidden");
  });
});
closeForm.addEventListener("click", function () {
  darkLayer.classList.toggle("js--hidden");
}); // $(document).ready(function () {
//     $("#userPhone").inputmask();
// });

window.onclick = function (event) {
  if (event.target == darkLayer) {
    darkLayer.classList.toggle("js--hidden");
  }
}; // // header-swiper
// var swiper = new Swiper('#main-swiper', {
//   fadeEffect: {
//     crossFade: true
//   },
//   navigation: {
//     nextEl: '.swiper-button-next--header',
//     prevEl: '.swiper-button-prev--header',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },
//   loop: true,
//   // autoplay: {
//   //   delay: 2300,
//   // },
//   fadeEffect: {
//     crossFade: true
//   },
//   speed: 800,
//   watchSlidesProgress: true,
//   watchVisibility: true,
//   disableOnInteraction: true,
// });


var greetingSwiper = new Swiper("#greetingSwiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});