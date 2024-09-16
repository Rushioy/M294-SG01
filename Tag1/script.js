// console.log('start index.js');
// console.error('error index.js');
// console.warn('end index.js');
// console.info('info index.js');



// var a = 1;
// const b = 2;
// let c = 3;

// function test() {
//     console.log('test');
//     let d = 4;
//     console.log(d);
//     a = 6
// }

// test();

// console.log(d); //Refference error: d is not defined
// console.log(a); 

// function durchmesser(radius) {
//     return radius * 2;
// }

// console.log(durchmesser(5));

// id Text mit hallo Welt ersetzen
document.getElementById('Text').innerHTML = 'hallo Welt';


// 
// import { durchmesser } from './app.js';
// console.log(durchmesser(5));

// document.getElementById('text2').innerHTML = durchmesser(5);

// 
// $('.text4').html('Das $ zeichen heisst wir arbeiten mit jQuery!');

// $('text4').addClass('blue');
// //  remove class
// $('text4').removeClass('yellow');


$('.text4')
    .html('Das $ zeichen heisst wir arbeiten mit jQuery!')
    .addClass('blue')
    .removeClass('yellow')
    .on('click', function() {
        console.log('click');
        $(this).toggleClass('red');
    });