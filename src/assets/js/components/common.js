
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

const darkLayer = document.querySelector(".dark-layer");
const applyBtns = document.querySelectorAll(".modal-button");
const closeForm = document.getElementById("closeForm");

applyBtns.forEach(button => {
    button.addEventListener("click", () => {
        darkLayer.classList.toggle("js--hidden");
    });
});


closeForm.addEventListener("click", () => {
    darkLayer.classList.toggle("js--hidden");
});

// $(document).ready(function () {
//     $("#userPhone").inputmask();
// });

window.onclick = function (event) {
    if (event.target == darkLayer) {
        darkLayer.classList.toggle("js--hidden");
    }
};