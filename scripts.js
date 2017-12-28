$(window).on('load',function(){

  console.log("loaded");

  $('.nav-icon').on('click',function(){
    $(this).parents('header').find('.nav').toggleClass('is-open');
    $(this).toggleClass('is-open');
    console.log("open");
  });

});
