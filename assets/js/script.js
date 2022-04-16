$(document).ready(function () {
    $('.start').click(function () {
        $('.header-mobile').addClass('d-none');
        // $(".home").removeClass("d-none").addClass("animate__animated animate__slideInDown");
        $('.home').removeClass("d-none");
        $('.BawahMobile').addClass("animate__animated animate__slideInUp animate__slow");
        $('.ImageMobile').addClass("animate__animated animate__bounceInDown animate__slow");
        $('.btn-back').addClass("animate__animated animate__lightSpeedInRight animate__slow");
    });
    $('.back').click(function () {
        $('.header-mobile').removeClass('d-none').addClass("animate__animated animate__slideInUp");
        $('.home').addClass("d-none");
    });
});