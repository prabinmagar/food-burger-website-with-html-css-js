$(function(){
    // feather icons
    feather.replace()

    // navbar toggle
    $('#navbar-show-btn').on('click', function(){
        $('.navbar-collapse').addClass('show-navbar');
    });

    $('#navbar-hide-btn').on('click', function(){
        $('.navbar-collapse').removeClass('show-navbar');
    });

    // stop transition and animation
    let resizeTimer;
    $(window).on('resize', function(){
        $(document.body).addClass('resize-transition-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){
            $(document.body).removeClass('resize-transition-stopper');
        }, 400);
    });
});