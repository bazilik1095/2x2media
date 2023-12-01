$(function () {
	
    /* preloader */

     $(window).on('load', function () {
        $(".preloader").fadeOut();
    });

    $(".toogle-button-1").on('click',function(){
        $(".toogle-content-1").slideToggle('slow');
        $(this).toggleClass("active");
    })
    $(".toogle-button-2").on('click',function(){
        $(".toogle-content-2").slideToggle('slow');
        $(this).toggleClass("active");
    })
    $(".toogle-button-3").on('click',function(){
        $(".toogle-content-3").slideToggle('slow');
        $(this).toggleClass("active");
    })
    $(".toogle-button-4").on('click',function(){
        $(".toogle-content-4").slideToggle('slow');
        $(this).toggleClass("active");
    })
});

