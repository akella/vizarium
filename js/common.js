$(document).ready(function() {

    // progress
    // $(".meter > span").each(function() {
    //     $(this)
    //         .data("origWidth", $(this).width())
    //         .width(0)
    //         .animate({
    //             width: $(this).data("origWidth")
    //         }, 1200);

    $(".header__download .counter").click(function(){
        if ($(this).hasClass("js-active")) {
            $(this).parent().removeClass("active");
            $(this).removeClass("js-active");
            $(this).next().slideUp("fast");
        }
        else {
            $(this).parent().addClass("active");
            $(this).addClass("js-active");
            $(this).next().slideDown("fast");
        }
    });


});