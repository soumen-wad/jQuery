 jQuery hover/click on desktop and mobile devices 
 
 if ($(window).width() > 1025) {
        $('.weather').hover(function(){
            $('.weather-popup').addClass('side-open');
        },function(){
            $('.weather-popup').removeClass('side-open');
        });         

        $('.snow').hover(function(){
            $('.snow-popup').addClass('side-open');
        },function(){
            $('.snow-popup').removeClass('side-open');
        }); 
    }


    if ($(window).width() < 1025) {         
        $('.weather').click(function(){
            $('.weather-popup').toggleClass('side-open');
        }); 
        $('.snow').click(function(){
            $('.snow-popup').toggleClass('side-open');
        });         
    }   
