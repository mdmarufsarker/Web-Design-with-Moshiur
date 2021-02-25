// $(document).ready(function(){
//     //$(selector).action();
//     $('p').hover(function(){
//         alert('Hi');
//     },
//     function(){
//         alert('Bye');
//     });
// });



// //for input
// $(document).ready(function(){
//     //$(selector).action();
//     $('input').focus(function(){
//         $(this).css("background","dodgerblue");
//     });
// });



//on method (akadhik event nia kaj korar jonno on method use kora hoy)
$(document).ready(function(){
    //$(selector).action();
    $('#sec').on({
        mouseenter: function(){
            $(this).css("background-color","red");
        },
        mouseleave: function(){
            $(this).css("background-color","dodgerblue");
        },
        click: function(){
            $(this).css("background-color","green");
        }
    });
});