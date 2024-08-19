// slide
setInterval(function(){
    $(".swiper-slide").delay(2000);
    $(".swiper-slide").animate({
        marginLeft: '-200px'
    },2000)
    $(".swiper-slide").delay(2000);
    $(".swiper-slide").animate({
        marginLeft: '-400px'
    },2000)
    $(".swiper-slide a img").delay(2000);
    $(".swiper-slide a img").animate({
        marginLeft: '-3600px'
    },2000)
    $(".swiper-slide").animate({
        marginLeft: '0px'
    },0)
});
// slide_product_explain
{
    "devDependencies": {
      "serve": "^11.2.0"
    },
    "main": "index.html",
    "name": "swiper-autoplay-progress",
    "scripts": {
      "build": "echo This is a static template, there is no bundler or bundling involved!",
      "start": "serve"
    },
    "tags": [
      "swiper"
    ]
  }