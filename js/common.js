$(document).ready(function() {

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

    // the initial state
    $(".js-btn-1").addClass("active");
    $('#js-nav-1').addClass('nav-wrap_act');
    $('.js-films-1').addClass('film-wrap_act');


    // window scroll
    $(window).scroll(function() {
        // activate #js-nav-1
        if (($('body').scrollTop() <= position_nav_2)) {
            $('#js-nav-1').addClass('nav-wrap_act');
            $('.js-films-1').addClass('film-wrap_act');
        }
        else {
            $('#js-nav-1').removeClass('nav-wrap_act');
            $('.js-films-1').removeClass('film-wrap_act');
        }

        // activate #js-nav-2
        if ($('body').scrollTop() >= (position_nav_2 - 48)) {
            $('#js-nav-2').addClass('nav-wrap_act');
            $(".js-btn-1").removeClass("active");
            $(".js-btn-2").addClass("active");
            $('.js-films-2').addClass('film-wrap_act');
        }
        else {
            $('#js-nav-2').removeClass('nav-wrap_act');
            //$(".js-btn-1").addClass("active");
            //$(".js-btn-2").removeClass("active");
            $('.js-films-2').removeClass('film-wrap_act');
        }
        if ($('body').scrollTop() < 100) {
            $(".js-btn-1").addClass("active");
            $(".js-btn-2").removeClass("active");
        }
    });

    // get nav position
    var position_nav_1 =  $("#js-nav-1").position().top;
    var position_nav_2 =  $("#js-nav-2").position().top;

    // scroll to #js-nav-1
    $(".js-btn-1").click(function(){
        $('html, body').animate({
         scrollTop: 0
        }, 700);
    });

    // scroll to #js-nav-2
    $(".js-btn-2").click(function(){
        $('html, body').animate({
            scrollTop: position_nav_2 - 48
        }, 700);
    });

    // filter imdb
    $( ".js-range-1 div" ).slider({
      range: "min",
      value: 8.5,
      min: 1,
      max: 10,
      step: 0.5,
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
      step: 0.5,
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
            $(".btn-drop-list").removeClass("btn-drop-list_active");
            $(this).addClass("btn-drop-list_active");
            $(".film-drop-list").slideUp();
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
        $(this).parent().children().removeClass("active");
        $(this).addClass("active");
    });

});