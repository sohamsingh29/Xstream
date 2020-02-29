$(document).ready(function(){
  
    $('#side-bar-toggle').on('click',function(e){
        $('#side-bar-toggle').addClass('change');
    
        $('.navigation-bar').css('width','150px');
    });
    $('.navigation-bar').on('mouseleave',function(){
        $('#side-bar-toggle').removeClass('change');
        
        $('.navigation-bar').css('width','0px');
        $('.navigation-bar').css('transition-delay','60ms');
    });
    // var colors = ["#739600", "#1F5EA8", "#F72C2C", "#FA5021", "#FB9F54", "#FFAD00,#FFEB3B", "#55C934", "#4CAF58", "#1FA895", "#1FD2DB", "#2196F3", "#61338F", "#8F3378", "#E91E63", "#B32E37"];
    // var rand = Math.floor(Math.random() * colors.length);
    // $('body').css("background-color", colors[rand]);
    // $('.item').on('click',function (e){
    //     console.log(e);
    //  });

    // particlesJS.load('particles-js', 'js/movies.json');

    // $('.item').on('click',function(e){
    //     console.log(e.currentTarget.classList[1]);
    //     var g=String(
    //         e.currentTarget.classList[1]
    //     )
    //     $('.'+ g).addClass('animate');
    //     //$(e.currentTarget).addClass('animate');
    //     $('.'+g).on('mouseleave',function(e){
    
    //         $('.'+g).removeClass('animate');
    //     });
    // }); 
});

