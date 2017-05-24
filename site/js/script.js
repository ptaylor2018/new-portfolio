/*jslint browser:true */
$(document).ready(function(){
    reorder();

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
    //fix image order on mobile

    //buttons
    $(".subsection_button_design").mouseover(function(){
        $(this).css('background-color', '#35a7ce');
    });
    $(".subsection_button_coding").mouseover(function(){
        $(this).css('background-color', '#EB5937');
    });
    $(".subsection_button_stem").mouseover(function(){
        $(this).css('background-color', '#36C633');
    });
    $(".subsection_button_music").mouseover(function(){
        $(this).css('background-color', '#770eb7');
    });
    $(".subsection_button_leadership").mouseover(function(){
        $(this).css('background-color', '#f5c813');
    });

    $(".subsection_button").mouseout(function(){
        $(this).css('background-color', '#000000');
    });
});
function reorder(){
if($(window).width() < 641){
        $(".image_design").insertBefore(".text_design");
    }
    if($(window).width() < 641){
        $(".image_coding").insertBefore(".text_coding");
    }
    if($(window).width() < 641){
        $(".image_stem").insertBefore(".text_stem");
    }
    if($(window).width() < 641){
        $(".image_music").insertBefore(".text_music");
    }
    if($(window).width() < 641){
        $(".image_leadership").insertBefore(".text_leadership");
    }
}
