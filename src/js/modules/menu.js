$(function(){
    $('.header__burger').on('click', function(evt){
        evt.preventDefault();
        $('nav, .header__overlay').fadeToggle();
        $('body').toggleClass('overflow')
    })

    $(window).on('resize', function(){
        if( $('.header').innerWidth() > 1600) {
            $('.header nav').css('display', 'flex');
            $('body').removeClass('overflow')
        } else {
            $('.header nav, .header__overlay').css('display', 'none');
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

