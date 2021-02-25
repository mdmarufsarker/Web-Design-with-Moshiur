$(document).ready(function(){
    //$(selector).action();
    $('button').click(function(){
        $('button').hide();
    });
});
or
$(document).ready(function(){
    //$(selector).action();
    $('button').click(function(){
        $(this).hide();
    });
});
or
$(document).ready(function(){
    //$(selector).action();
    $('button').click(function(){
        $(':button').hide();
    });
});



$(document).ready(function(){
    //$(selector).action();
    $('.lorem').click(function(){
        $(this).hide();
    });
});



list
$(document).ready(function(){
    //$(selector).action();
    $('button').click(function(){
        $('ul li:first-child').hide();
    });
});


list
$(document).ready(function(){
    //$(selector).action();
    $('button').click(function(){
        $('ul li:nth-child(2)').hide();
    });
});




link
$(document).ready(function(){
    //$(selector).action();
    $('button').click(function(){
        $('a').hide();
    });
});
//or
$(document).ready(function(){
    //$(selector).action();
    $('button').click(function(){
        $('[href]').hide();
    });
});



//a-target
$(document).ready(function(){
    //$(selector).action();
    $('button').click(function(){
        $('a[target="_blank"]').hide();
    });
});