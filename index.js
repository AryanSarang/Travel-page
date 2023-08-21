$(document).ready(function () {

    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});

$(document).ready(function () {
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function () {

        $(this).addClass('transition');
    }, function () {

        $(this).removeClass('transition');
    });
});

$(document).ready(function () {
    var scrollTop = 0;
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        // $('.counter').html(scrollTop);

        if (scrollTop >= 100) {
            $('.navbar').addClass('scrolled-nav');
        } else if (scrollTop < 100) {
            $('.navbar').removeClass('scrolled-nav');
        }

    });

});