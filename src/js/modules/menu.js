$(function(){
    $('.header__burger').on('click', function(evt){
        evt.preventDefault();
        $('nav, .header__overlay').toggle(0);
        $('nav').toggleClass('header__show');
        $('body').toggleClass('overflow')
    })

    $(window).on('resize', function(){
        if( $('.header').innerWidth() > 1600) {
            $('.header nav').css('display', 'flex');
            $('.header nav').removeClass('header__show');
            $('body').removeClass('overflow')
        } else {
            $('.header nav, .header__overlay').css('display', 'none');
            $('.header nav').removeClass('header__show');
        }
    })

    $('.js-up').on('click', function(evt){
        evt.preventDefault();
        $('html, body').animate({scrollTop: 0}, 400)
    })

    // $('.js-down').on('click', function(evt){
    //     evt.preventDefault();
    //     $('html, body').animate({scrollTop: 0}, 400)
    // })
})

