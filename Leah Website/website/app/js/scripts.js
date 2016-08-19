$(document).ready(function () { 
        
    $('.nav-icon').click(function () {
                 $('nav').toggleClass('open');
            
                $('#myTopnav').toggleClass('responsive').slideDown();
            });

    // $( window ).resize(function() {
    //      $('nav').css('height', $(window).height() 
         
         
         
         
    //      );
         

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
});