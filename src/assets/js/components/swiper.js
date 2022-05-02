const greetingSwiper = new Swiper("#greetingSwiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: true,
    pagination: {
        el: ".swiper-pagination",

        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});