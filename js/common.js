$(document).ready(function() {

// -------------------------  masonry ------------------------- //
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
// -------------------- the initial state -----------------------//
    $(".js-btn-1").addClass("active");
    $('#js-nav-1').addClass('nav-wrap_act');
    $('.js-films-1').addClass('film-wrap_act');
    $(".js-filter-1").addClass('filter-wrap_act');
    $('<div class="shadow"></div>').insertAfter('.nav');

// --------------------- window scroll -------------------------- //
    $(window).scroll(function() {

        // --- main ---
        // activate #js-nav-1
        if (($('body').scrollTop() <= position_nav_2)) {
            $('#js-nav-1').addClass('nav-wrap_act');
            $('.js-films-1').addClass('film-wrap_act');
            $(".js-filter-1").addClass('filter-wrap_act');
        }
        else {
            $('#js-nav-1').removeClass('nav-wrap_act');
            $('.js-films-1').removeClass('film-wrap_act');
            $(".js-filter-1").removeClass('filter-wrap_act');
        }

        // activate #js-nav-2
        if ($('body').scrollTop() >= (position_nav_2 - 48)) {
            $('#js-nav-2').addClass('nav-wrap_act');
            $(".js-btn-1").removeClass("active");
            $(".js-btn-2").addClass("active");
            $('.js-films-2').addClass('film-wrap_act');
            $(".js-filter-2").addClass('filter-wrap_act');
        }
        else {
            $('#js-nav-2').removeClass('nav-wrap_act');
            $('.js-films-2').removeClass('film-wrap_act');
            $(".js-filter-2").removeClass('filter-wrap_act');
        }

        //  ---- sticking effect of navs ---
        if (($('body').scrollTop() >= (position_nav_2 - 95))) {
            $("#js-nav-1").css({
                "position":"absolute",
                "top": position_nav_2 - 48,
            });
        }
        else {
            $("#js-nav-1").css({
                "position":"fixed",
                "top": 46,
            });
        }

        //  ---- sticking effect of filters ---
        if (($('body').scrollTop() >= (position_nav_2 - 150))) {
            $(".js-filter-1").css({
                "position":"absolute",
                "top": pos_f_2-99,
            });
        }
        else {
            $(".js-filter-1").css({
                "position":"fixed",
                "top": 60,
            });
        }
        if ($('body').scrollTop() < 100) {
            $(".js-btn-1").addClass("active");
            $(".js-btn-2").removeClass("active");
        }
    });

//-------------- show/hide shadow ------------------------------- //
    $(window).scroll(function() {
        // animate shadow 1        
        if (($('body').scrollTop() > 30)) {
            $('#js-nav-1 .shadow').fadeIn();
        }
        else {
            $('#js-nav-1 .shadow').fadeOut();
        }
        // animate shadow 2
        if ($('body').scrollTop() >= (position_nav_2 - 48)) {
            $('#js-nav-2 .shadow').fadeIn();
        }
        else {
            $('#js-nav-2 .shadow').fadeOut();
        }
    });

// --------------------- get nav position -------------------------- //
    var position_nav_1 = $("#js-nav-1").position().top;
    var position_nav_2 = $("#js-nav-2").position().top;
    var pos_f_2 = position_nav_2 + 14;
    $(".js-filter-2").css("top", pos_f_2);
    $("#js-nav-2").css("z-index","10100");

// --------------------- sctoll Top ------------------------------ //
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

// --------------------- Filters ------------------------------ //
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

 // ------------------- show/hide your downloads in header -------- //
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

// --------------------- Drop down list ------------------------------ //
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

// ---------------- hide serials search -------------------------- //
    $(".i-dont-watch").click(function(){
        $(this).parent().hide();
        $(this).parent().next().slideUp("fast");
    });

// ----------------  init cycle plugin -------------------------- //
    $('.series-scroll').each(function(){
        var prev_arr = $(this).next();
        var next_arr = $(this).next().next();
        $(this).cycle({ 
            fx:      'scrollHorz',
            next:    next_arr, 
            prev:    prev_arr,
            timeout:  0,
            speed: 700
        });
    });


//  ---------------- select film options ----------------------- //
    $(".select__wrap").click(function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).next().slideUp("fast");
        }
        else {
            $(".select__wrap").removeClass("active");
            $(this).addClass("active");
            $("filter-extend").slideUp("fast");
            $(this).next().slideDown("fast");
        }
    });
//  ---------------- Extend list ----------------------- //
    $(".js-extend").hide();
    $(".filter-list__title").click(function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).next().slideUp("fast");
        }
        else {
            $(this).removeClass("active");
            $(this).addClass("active");
            $("filter-extend").slideUp("fast");
            $(this).next().slideDown("fast");
        }
    });

//  ---------------- sidebar-height ----------------------- //
    var filter_height = $(".js-filter-2").height();
    var page_height = $("html").height();
    // alert(filter_height);
    // alert(page_height);
    if (filter_height >= page_height) {
        //alert("BIG");
        $(".js-filter-2").addClass("filter-scroll");
        $(".js-filter-2").css("height", page_height-100);
    }

//  ------------------------ selects ------------------------- //
    // $(".select li").click(function(){
    //     var val = $(this).html();
    //     $(this).parent().prev().children("span").html(val);
    //     $(this).parent().slideUp("fast");
    //     $(this).parent().prev().removeClass("js-active");
    // });

// -------------------- watch status buttons ----------------- //
    $(".watch-status button").click(function(){
        $(this).parent().children().removeClass("active");
        $(this).addClass("active");
    });

});