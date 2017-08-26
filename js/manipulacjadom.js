'use strict';

$(function(){
    
    //Pobieranie Tekstu
    var tekstParagrapfuPierwszego = $('#paragraf').text();
    console.log(tekstParagrapfuPierwszego);
    
    //Dodawanie tekstu
    $('.paragraf').text(tekstParagrapfuPierwszego);
    


//Dodawanie HTML
$('.paragraf-next').html('To jest <strong>paragraf</strong> z dodanym <br> HTML'); //nie dzaiala, sprawdzic
    
 
//dodanie tresci na koncu selektora

$('.paragraf-next').append('Tresc na kocu selektora');

//dodanie tresci za selektorem
$('.paragraf-next').after('Tresc za selektorem');

//Usuwanie elementu i jego zawartosci
    $('strong').remove();
    
    //Usuwanie tylko zawartosci elementu
    $('.paragraf').empty();
    
    //Dodawanie klasy
    $('h1').addClass('blue');
    
   });

//Dodanie atrybutu
$('h1').attr('imie', 'Marcin');
