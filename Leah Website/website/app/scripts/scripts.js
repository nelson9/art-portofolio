$(document).ready(function () { 
        
    $('.nav-icon').click(function () {
                $('#myTopnav').toggleClass('responsive');
                $('nav').toggleClass('open');
                $('.container').toggleClass('noScroll');
                $('#menu-icon').toggleClass('hide');
                $('#menu-cross').toggleClass('hide'); 
                $('.home-title').toggleClass('hide');

            });

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    $( window ).resize(function() {
        if($(window).width() > 640){
             $('nav').removeClass('open'); 
             $('#myTopnav').removeClass('responsive'); 
            $('#menu-icon').removeClass('hide');
            $('.container').removeClass('noScroll');
             $('#menu-cross').addClass('hide'); 
              $('.home-title').removeClass('hide'); 
 
        }
    }); 
});