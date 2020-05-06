$(document).ready(function() {


  // SCROLL BUTTONS

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
     $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
  });

  // NAVIGATION ANIMATION

   $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

   $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });

   $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

   $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

});

