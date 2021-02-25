$(document).ready(function(){
    //$(selector).action();
    //  jQuery Ancestors
    $('span').parentsUntil('div').css({
        'color':'green',
        'border':'2px solid green'
    });// jodi parent use kori tahole jar parent re target korsi tar design change hobe
        // $('span').parents().css({
        //     'color':'green',
        //     'border':'4px solid green'
        // });
    // r jodi parents use kori tahole tar joto parents ase sob design hobe
        // $('span').parents('div').css({
        //     'color':'green',
        //     'border':'2px solid green'
        // });
    //jodi parents er vitor bole dei j kon parent k design krbo tahole sei onujaye kaj korbe
        // $('span').parentsUntil('div').css({
        //     'color':'green',
        //     'border':'2px solid green'
        // });
    // parentsUntil bolte bujay last theke uporer dike koto number parent er child k design krbo seta , jeta () er moddhe lekha hoy #obossoi () er moddhe j thakbe tar porer sobai design hobe

});
