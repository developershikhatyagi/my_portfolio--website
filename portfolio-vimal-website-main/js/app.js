$(document).ready(function(){
   
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius: 10
    })
    
    $('.our_ripple').ripples({
        resolution: 512,
        dropRadius: 10
    })
    

$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

});