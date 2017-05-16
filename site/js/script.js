/*jslint browser:true */
$(document).ready(function(){
    //add hover effect to links in about section
    $(".area-link").mouseover(function(){
        $(this).css('font-style', 'italic');
    });
    $(".area-link").mouseout(function(){
        $(this).css('font-style', '');
    });

    //scroll down
    $(".down-arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top
        }, 2000);
    });
    //buttons
    $(".subsection_button_design").mouseover(function(){
        $(this).css('background-color', '');
    });
    $(".subsection_button_coding").mouseover(function(){
        $(this).css('background-color', '');
    });
    $(".subsection_button_stem").mouseover(function(){
        $(this).css('background-color', '#eb5936');
    });
    $(".subsection_button_music").mouseover(function(){
        $(this).css('background-color', '');
    });
    $(".subsection_button_leadership").mouseover(function(){
        $(this).css('background-color', '');
    });

    $(".subsection_button").mouseout(function(){
        $(this).css('background-color', '#000000');
    });
});
