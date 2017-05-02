/*jslint browser:true */
$(document).ready(function(){
    //add hover effect to links in about section
    $(".area-link").mouseover(function(){
        $(this).css('font-style', 'italic');
    });
    $(".area-link").mouseout(function(){
        $(this).css('font-style', '');
    });
    $("p").mouseover(function(){
        $(this).css('font-style', 'italic');
    });
    //scroll down
    $(".down-arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top
        }, 2000);
    });
});
