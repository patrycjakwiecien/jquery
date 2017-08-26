'use strict';

$(function(){
    //pojedyncze zdarzenie w paragrafie 
    $('p').click(function(){
       $(this).css('color', 'orange'); 
    });

//grupa zdarzen- zdarzenie robie sie czerowne i jak puszczamy myszke z naglowka to robi sie z powrotem czarny
$('h1').on({
    'click':function() {
        $(this).css('color', 'red');
    },
    'mouseleave':function(){
          $(this).css('color', 'inherit'); //inherit odziedziczenie
        
    }
});
});