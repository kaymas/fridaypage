$(window).on('load',function(){

  // console.log("loaded");

  $('.nav-icon').on('click',function(){
    $(this).parents('header').find('.nav').toggleClass('is-open');
    $(this).toggleClass('is-open');
    // console.log("open");
  });

  $('.nav-line').find('.line-link').on('click',function(){
    $(this).parents('.nav-line').find('.line-link').removeClass('is-selected');
    $(this).addClass('is-selected');
  });

  var height;
  setInterval(function(){
    height = $('.content-intro').height();
    height += 40;
    $('.nav').css({'height' :''+ height +'px'})
  },1000);

});
