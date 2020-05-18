$(function(){
    $('.catalog__range-item').each(function(index){
        noUiSlider.create($('.catalog__range-item')[index], {
            start: 0,
            step: 1,
            connect: 'lower',
            range: {
                min: 0,
                max: 150
            }
        });
        $('.catalog__range-item')[index].noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            if (value.toString().length > 4) {
               value = +value * 100;
               var thou = Math.floor(value/1000);
               var hand = value % 1000;
               console.log(hand);
               hand = (hand === 0) ? '000' : hand.toString()
               value = thou.toString() + "," + hand;
            } else {
                value = +value * 100;
            }
            $('.catalog__range-item-value')[index].textContent = value;
        });
    })
})