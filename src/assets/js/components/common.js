
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [56.81122355, 60.72763708],
        zoom: 14
    }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'г. Екатеринбург, ул. Летняя, 20',
            iconCaption: 'г. Екатеринбург, ул. Летняя, 20',
        }, {
            iconLayout: 'default#image',
            iconImageHref: "<?php echo get_template_directory_uri() . '/assets/images/content/logo_custom.svg'?>",
            iconImageSize: [30, 42],
            iconImageOffset: [-5, -38],
        })

    myMap.geoObjects
        .add(myPlacemark);
}