$(window).scroll(function(){
    if ($(window).scrollTop()){
      $("nav").addClass("nav_dark");
    
    }
    else{
      $("nav").removeClass("nav_dark");
    }
    
    })  