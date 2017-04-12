$(document).ready(function(){
    $(".area-link").mouseover(function(){
        $(this).css('font-style', 'italic');

    });
    $(".area-link").mouseout(function(){
        $(this).css('font-style', '');
    });
    $("p").mouseover(function(){
        $(this).css('font-style', 'italic');
    });
});
