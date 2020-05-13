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
})

