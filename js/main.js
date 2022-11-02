const responsive ={
    0:{
        items:1
    },
    320 : {
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}
$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    // on click navbar
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,  /* true for autoplay */
        autoplayTimeout: 3000,
        autoplayHoverPause: true, 
        smartSpeed: 1200, //transition speed
        dotsSpeed: 1000, 
        dots: false,  /* removes the dots navigation*/
        nav: true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive:responsive
})

    // click to scroll top
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    })
})

