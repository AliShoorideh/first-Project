$(document).ready(function () {
    $(".fp-shop").mouseenter(function(){
        $(".fp-dropdown-shop").removeClass("hide");
      });
      $(".fp-dropdown-shop").mouseleave(function(){
        $(this).addClass("hide");
      });
    
      
    });
