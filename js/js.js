'use strict';

$(function(){
    //czysty js
 document.getElementById('first').style.color = 'red';
    
    //to samo w jQuery
    $('#first').css(
    {
        color: 'red',
        background: 'yellow'
    }
    );
}); 