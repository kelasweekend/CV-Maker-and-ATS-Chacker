$(document).ready(function () {
    $("#dua").click(function () {
        $('#screen1').addClass('d-none');
        $('#screen2').addClass('d-none');
        // $(".home").removeClass("d-none").addClass("animate__animated animate__slideInDown");
        $(".home").removeClass("d-none");
        $(".BawahMobile").addClass("animate__animated animate__slideInUp animate__slow");
        $(".ImageMobileHeader").addClass("animate__animated animate__bounceInDown animate__slow");
        $(".btn-back").addClass("animate__animated animate__lightSpeedInRight animate__slow");
    });
    $("#satu").click(function () {
        $('#screen1').removeClass('d-none').addClass("animate__animated animate__slideInUp");
        $('#screen2').removeClass('d-none').addClass("animate__animated animate__slideInUp");
        $(".home").addClass("d-none");
    });

    const navItems = document.getElementsByClassName('hp-item');
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', () => {
            for (let j = 0; j < navItems.length; j++)
                navItems[j].classList.remove('active');

            navItems[i].classList.add('active');
        });
    }
});