$(document).ready(function () {


    $(document).scroll(function () {
        var $head = $("#header");
        var $nav = $("#navbar");
        $nav.toggleClass('scrolled',
            $(this).scrollTop() > $head.height()
        );
    });


    $("#menu").on('click', 'a', function () {
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });


    $('.carousel').carousel({
        interval: 1500
    });


    $('[data-toggle="popover"]').popover();


    $('.icon-link').on('click', function() {
        $(this).children().toggleClass('icon-blue');
    });


    $('.icon-heart').on('click', function() {
        $(this).children().toggleClass('icon-red');
    });

    
});