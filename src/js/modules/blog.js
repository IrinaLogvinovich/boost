$(function(){
    if( $('.decor-block').innerWidth() < 550) {
        var str = $('.blog-card p').text().slice( 0, 120);
        $('.blog-card p').text(str);
    }
    $(window).on('resize', function(){
        if( $('.decor-block').innerWidth() < 550) {
            var str = $('.blog-card p').text().slice( 0, 120);
            $('.blog-card p').text(str);
        }
    })
})