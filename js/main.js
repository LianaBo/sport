$(document).ready(function() {

    // слайдер
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false, //cтрелки по бокам
        dots: true, //точки
        dotsClass: "dots-style",
        responsive: [{
                breakpoint: 1024, //при уменьшении разрешения 
                settings: {
                    slidesToShow: 2, //показать 2 изображения
                    slidesToScroll: 2, //перелистывать по 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // меню
    $('ul.menu a[href^="#"').click(function() { //если в ссылке есть #,то... 
        var target = $(this).attr("href"); //при нажатии на эту ссылку получаем ее атрибут
        $('html,body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        $('ul.menu a[href^="#"').css({ "color": "#000" });
        $(this).css({ "text-decoration": "underline" });
        return false;
    })

    // выпадающее меню
    $('.menu-icon').click(function() {
        $("nav").slideToggle(600);
        $("ul.menu").css({
            "display": "flex",
            "flex-direction": "column"
        });
        if ($('.menu-icon').html() == '<i class="fas fa-align-justify fa-2x"></i>') {
            $(this).html('<i class="fas fa-times fa-2x"></i>');
        } else {
            $(this).html('<i class="fas fa-align-justify fa-2x"></i>');
        }
    });
});