$(document).ready(function(){
    //$(selector).action();
    //jqurey get
   $('#btn1').click(function(){
        alert('text:' + $('#lorem').text());
    });
    $('#btn2').click(function(){
        alert('text:' + $('#lorem').html());
    });
});


//input
$(document).ready(function(){
    //$(selector).action();
    //jqurey get
    $('#btn3').click(function(){
        alert($('#maruf').val());
    });
});


//link
$(document).ready(function(){
    //$(selector).action();
    //jqurey get
    $('#btn4').click(function(){
        alert($('#link').attr('href'));
    });
});