//display none css er .lorem class a use kore
$(document).ready(function(){
    //$(selector).action();
    $('.btn').click(function(){
        $('.lorem').slideDown(2000);
    });
});



//display none css er .lorem class a use na kore
$(document).ready(function(){
    //$(selector).action();
    $('.btn').click(function(){
        $('.lorem').slideUp(2000);
    });
});



//display none css er .lorem class a use na kore ekbar click krle slideDown and r ekbar click krle slideUp hobe
$(document).ready(function(){
    //$(selector).action();
    $('.btn').click(function(){
        $('.lorem').slideToggle('slow');
    });
});