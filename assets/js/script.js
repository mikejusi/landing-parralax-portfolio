// scroll btn
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#scrolltotop').fadeIn("fast");
    } else {
        $('#scrolltotop').fadeOut("fast");
    }
});
$('#scrolltotop').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});