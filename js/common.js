$(document).ready(function() {

    // progress
    // $(".meter > span").each(function() {
    //     $(this)
    //         .data("origWidth", $(this).width())
    //         .width(0)
    //         .animate({
    //             width: $(this).data("origWidth")
    //         }, 1200);
    
    // masonry
    $('.js-masonry').masonry({
        itemSelector : '.film',
        isAnimated: true,
        isResizable: true,
        animationOptions: {
            duration: 300,
            easing: 'linear',
            queue: false
        }
    });

    // filter imdb
    $( ".js-range-1 div" ).slider({
      range: "min",
      value: 8.5,
      min: 1,
      max: 10,
      step: 0.1,
      animate: "slow",
      slide: function( event, ui ) {
        $( ".js-range-1 span" ).text(ui.value );
      }
    });
    $( ".js-range-1 span" ).text($( ".js-range-1 div" ).slider( "value" ) );

    // filter kinopoisk
    $( ".js-range-2 div" ).slider({
      range: "min",
      value: 8.5,
      min: 1,
      max: 10,
      step: 0.1,
      animate: "slow",
      slide: function( event, ui ) {
        $( ".js-range-2 span" ).text(ui.value );
      }
    });
    $( ".js-range-2 span" ).text($( ".js-range-2 div" ).slider( "value" ) );

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

    $(".btn-drop-list").click(function(){
        if ($(this).hasClass("btn-drop-list_active")) {
            $(this).removeClass("btn-drop-list_active");
            $(this).next().slideUp("fast");
            $(".series-scroll").removeClass("active");
        }
        else {
            $(this).addClass("btn-drop-list_active");
            $(this).next().slideDown("fast");
            $(".series-scroll").addClass("active");
        }
    });

    $(".icon_next, .icon_prev").click(function(){
        $(".series-scroll").removeClass("active");
         $(".btn-drop-list").removeClass("btn-drop-list_active");
    });

    $(".i-dont-watch").click(function(){
        $(this).parent().hide();
        $(this).parent().next().slideUp("fast");
    });

    $('.series-scroll').cycle({ 
        fx:      'scrollLeft',
        next:   '.icon_next', 
        prev:   '.icon_prev', 
        timeout:  0,
        speed: 700
    });

    // select film options
    $(".select__wrap").click(function(){
        if ($(this).hasClass("js-active")) {
            $(this).removeClass("js-active");
            $(this).next().slideUp("fast");
        }
        else {
            $(".select__wrap").removeClass("js-active");
            $(this).addClass("js-active");
            $(".select ul").slideUp("fast");
            $(this).next().slideDown("fast");
        }
    });

    $(".select li").click(function(){
        var val = $(this).html();
        $(this).parent().prev().children("span").html(val);
        $(this).parent().slideUp("fast");
        $(this).parent().prev().removeClass("js-active");
    });

    // watch status buttons
    $(".watch-status button").click(function(){
        $(".watch-status button").removeClass("active");
        $(this).addClass("active");
    });

});