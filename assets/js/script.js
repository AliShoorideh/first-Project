$(document).ready(function () {
    $('.dropdown').hover(
        function () {
            $(this).children('.dropdown-content')
                .delay(0) // set duration of delay in milliseconds here
                .slideDown(200);
        },
        function () {
            $(this).children('.dropdown-content')
                .clearQueue()
                .slideUp(0);
        });
   
});
