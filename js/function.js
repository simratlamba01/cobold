$(document).ready(function () {

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 20) {
      $("body").addClass("activebody");
      $("header").addClass("activeback");

    } else {
      $("header").removeClass("activeback");
      $("body").removeClass("activebody");
    }
  });

  /* Slick Sliders */
  $('.sliderDiv').slick({
    arrows: true,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: false,
        }
      }
    ]
  });
  
  AOS.init();
});  

$(function(){
  $('.mainSection').addClass('ani-mate');
});