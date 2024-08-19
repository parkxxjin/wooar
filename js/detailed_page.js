// popup

$(".modal").hide();
$(".popup_open_btn").click(function () {
    $(".modal").fadeIn(300)
});
$(".popup_close_btn").click(function () {
    $(".modal").fadeOut(0)
});
// click_img
$(function(){
    $("#button1").click(function(){

            $(".img1").fadeIn().siblings().fadeOut();
    });	
    $("#button2").click(function(){

            $(".img2").fadeIn().siblings().fadeOut();
    });	
    $("#button3").click(function(){

            $(".img3").fadeIn().siblings().fadeOut();
    });	
    $("#button4").click(function(){

            $(".img4").fadeIn().siblings().fadeOut();
    });	
});