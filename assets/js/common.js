$(document).ready(function(){

    //portfolio contents slide
    $('.content-slide').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true
    });

    //portfolio tab
    $('.vertical-tab__menu-item').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.vertical-tab__menu-item').removeClass('vertical-tab__menu-item--active');
        $('.vertical-tab__content-item').removeClass('vertical-tab__content-item--active');

        $(this).addClass('vertical-tab__menu-item--active');
        $('#' + tab_id).addClass('vertical-tab__content-item--active')
    });
});
