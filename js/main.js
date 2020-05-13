$(document).ready(function() {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false, //cтрелки по бокам
        dots: true,  //точки
        dotsClass:"dots-style"
    });
});