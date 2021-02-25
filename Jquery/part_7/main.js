// $(document).ready(function(){
//     //$(selector).action();
//     $('button').click(function(){
//         $('div').animate({
//             left: '200px',
//             width: '+=150px',
//             height: '+=150px'
//         });
//     });
// });



// $(document).ready(function(){
//     //$(selector).action();
//     $('button').click(function(){
//         $('div').animate({
//             height: 'toggle',
//             width: 'toggle'
//         });
//     });
// });



// $(document).ready(function(){
//     //$(selector).action();
//     $('button').click(function(){
//         var maruf = $('div');
//         maruf.animate({
//             height: '300px',
//             opacity: '0.5'
//         },
//         'slow');
//         var maruf = $('div');
//         maruf.animate({
//             width: '300px',
//             opacity: '0.65'
//         },
//         'slow');
//         var maruf = $('div');
//         maruf.animate({
//             height: '100px',
//             opacity: '0.8'
//         },
//         'slow');
//         var maruf = $('div');
//         maruf.animate({
//             width: '100px',
//             opacity: '1'
//         },
//         'slow');
//     });
// });



//next topic
$(document).ready(function(){
 //$(selector).action();
$('button').click(function(){
        var maruf = $('div');
        maruf.animate({
            left: '300px'},'slow');
        var maruf = $('div');
        maruf.animate({
            width: '300px'},'slow');        
        var maruf = $('div');
        maruf.animate({
            fontSize: '60px'},'fast');   
    });
});