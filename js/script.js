$(document).ready(function() {


  // SCROLL BUTTONS

  // $('.js--scroll-to-about').click(function() {
  //   $('html', 'body').animate({scrollTop: $('js--section-about').offset().top}, 1000);
  // });


  $('.js--scroll-to-about').click(function () {
     $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
     console.log('scrooooll');
  });

  $('.js--scroll-to-skills').click(function () {
     $('html, body').animate({scrollTop: $('.js--section-skills').offset().top}, 1000);
  });

  $('.js--scroll-to-projects').click(function () {
     $('html, body').animate({scrollTop: $('.js--section-projects').offset().top}, 1000);
  });

  $('.js--scroll-to-contact').click(function () {
     $('html, body').animate({scrollTop: $('.js--section-projects').offset().top}, 1000);
  });



});

