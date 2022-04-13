$(document).ready(function () {
    $(".FooterBtnMobile").click(function () {
        if ($('.home').css('opacity') == 0) {
            $('#screen1').addClass('animate__animated animate__backOutUp animate__slow');
            $('#screen2').addClass('animate__animated animate__backOutUp animate__slow');
            setTimeout(function () {
                $('#screen1').addClass('d-none');
                $('#screen2').addClass('d-none');
                $(".home").removeClass("d-none").addClass('animate__animated animate__backInUp animate__slow');
            }, 1000);
        }
        else $('.home').css('opacity', 0);
    });
});