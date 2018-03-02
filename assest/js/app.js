$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});


var options = {
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
};

$(".owl-carousel").owlCarousel(options);