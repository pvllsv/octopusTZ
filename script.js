$('.single-item').slick({
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
responsive: [{
    breakpoint: 992, // максимальная ширина экрана
    settings: {
        slidesToShow: 2, // показывать по 2 слайда
        slidesToScroll: 2, // скроллить по 2 слайда
    }
}, {
    breakpoint: 575,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
    }
}]
});   