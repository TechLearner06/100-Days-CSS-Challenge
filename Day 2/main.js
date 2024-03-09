$(document).on("click", ".center", function(){
    $(this).find("div").toggleClass("animate-line");
    $(this).find("div").removeClass("no-animate");
});