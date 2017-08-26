'use strict';
$(function(){
    
    $('h2').click(function(){
        $(this).hide(3000);
    });
   //efekt hide i show
    $('p').hide(3000).show(3000);
    
       //fadeOut i fadeIn
    $('h1').fadeOut(3000).fadeIn(3000);


       //slideUp i slideDown
    $('h2').slideUp(3000).slideDown(3000);
    
    function animacja() {
        console.log('Zakonczono pierwsza animacje. Zaraz startuje druga');
            
        $('h3').animate({
            'font-size': '1em',
            'margin-left': '0px'
     
}, 2000);
        
    }
    
        $('h3').animate({
            'font-size': '3em',
            'margin-left': '100px'
     
}, 2000, animacja);
    
});