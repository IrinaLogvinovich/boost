$(function(){
    //распродажа только на главной, я просто не знаю куда ее
    if($('.promo')[0]) {
        setTimeout(function(){
            $('.popup--sale').fadeIn(300);
            $('body').addClass('overflow');
        }, 2000);
    }
      
      $(document).on('keydown', function (evt) {
        if (evt.keyCode === 27) {
          $('.popup').fadeOut(300);
          $('body').removeClass('overflow');
        }
      });
      
      $('.popup').on('click', function (evt) {
        if ($(evt.target).hasClass('popup')) {
          $('.popup').fadeOut(300);
          $('body').removeClass('overflow');
        }
      });

      if( $('.testimonials')[0]) {

        function checkRating(){
          var value = 4;
          if ($("input[value='2']").prop("checked")){
            value = 3;
          }
          if ($("input[value='3']").prop("checked")){
            value = 2;
          }
            if ($("input[value='4']").prop("checked")){
            value = 1;
          }
            if ($("input[value='5']").prop("checked")){
            value = 0;
          }

          $('.popup__rating svg').each(function(index){
            if (index >= value) {
              $(this).css('fill', "#efb01e")
            } else {
              $(this).css('fill', "#f1f1f1")
            }
          })
        }


        $('.js-testimonial').on('click', function(evt){
            $('.popup--testimonial').fadeIn(300);
            $('body').addClass('overflow');
          })

          checkRating();

          $('.popup__rating ul').on('click', function(evt){
            if (evt.target.tagName === 'INPUT') {
              checkRating();
            }
          })
      }


})