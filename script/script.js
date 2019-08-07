$(document).ready(function () {

    $(document).scroll(function () {
        var $head = $("#header");
        var $nav = $("#navbar");
        $nav.toggleClass('scrolled',
            $(this).scrollTop() > $head.height()
        );
    });

    $('[data-toggle="popover"]').popover();

    $('.icon-link').on('click', function() {
        $(this).children().toggleClass('icon-blue');
    });

    $('.icon-heart').on('click', function() {
        $(this).children().toggleClass('icon-red');
    });
});