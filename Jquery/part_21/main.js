// $(document).ready(function(){
//     $('div').first().css('background-color','red');
//     $('div').last().css('background-color','dodgerblue');
// });
//1st and last div er design hobe



// $(document).ready(function(){
//     $('p').eq(1).css('background-color','red');
// });
//ekhane 3 ta p tag ase , eq 0 theke suru hoy like js array er moto. () er vitor jei number use korbo equation count er moto kore oi number a design hobe



//way-1
    // $(document).ready(function(){
    //     $('.intro').css('background-color','red');
    // });
//way-2
    // $(document).ready(function(){
    //     $('p').filter('.intro').css('background-color','red');
    // });
//way-1 & way-2 same result



$(document).ready(function(){
    $('p').not('.intro').css('background-color','red');
});
//intro class bad a baki jotogula p tag ase oigula design hobe .not use korar karone

