jQuery(document).ready(function($){
    $('.wrapper-top').click(function() {
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
        $(this).parent().toggleClass('active');
    });
    $('.has-carousel').slick({
        infinite: true,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                }
            },
        ]
    });
});