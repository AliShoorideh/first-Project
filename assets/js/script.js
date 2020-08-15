$(document).ready(function () {
    $(".fp-shop").mouseenter(function(){
        $(".fp-dropdown-shop").removeClass("hide");
      });
      $(".fp-shop").mouseleave(function(){
        $(".fp-dropdown-shop").addClass("hide");
      });
    });
