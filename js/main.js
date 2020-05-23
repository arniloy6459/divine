// fa-heart
$(document).ready(function(){
    $(".wish-icon i").click(function(){
        $(this).toggleClass("fa-heart fa-heart-o");
    });
});

// fa-star
$(document).ready(function(){
    $(".list-inline-item i").click(function(){
        $(this).toggleClass("fa-star fa-star-o");
    });
});
