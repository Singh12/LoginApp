/*-----------------------------------------------------------------------------------*/
/*  PORTFOLIO
/*-----------------------------------------------------------------------------------*/
$(window).load(function(){
  'use strict';
  $('.fade-up, .fade-down, .bounce-in, .flip-in').addClass('no-display');
  $('.bounce-in').one('inview', function () {
    $(this).addClass('animated bounceIn appear');
  });
  $('.flip-in').one('inview', function () {
    $(this).addClass('animated flipInY appear');
  });
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  $('.fade-up').one('inview', function () {
    $(this).addClass('animated fadeInUp appear');
  });
  $('.fade-down').one('inview', function () {
    $(this).addClass('animated fadeInDown appear');
  });
  var portfolio_selectors = $('.portfolio-filter li a');
  if(portfolio_selectors!='undefined'){
    var portfolio = $('.portfolio-items');
    portfolio.isotope({
      itemSelector : 'li',
      layoutMode : 'fitRows'
    });
    portfolio_selectors.on('click', function(){
      portfolio_selectors.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      portfolio.isotope({ filter: selector });
      return false;
    });
  }
});

jQuery(function($) {
'use strict';
	$('.tile-progress .tile-header').matchHeight();

	var footerHeight = jQuery('#footer-wrapper').outerHeight();
	jQuery('#content-wrapper').css('margin-bottom', footerHeight );

	var windowsHeight = jQuery(window).height();
	var navHeight = jQuery('navbar-fixed-top').outerHeight();
	var newHeight = windowsHeight - navHeight - 30;
   // jQuery('#main-slider').css('height', newHeight + 'px');
   // jQuery('#single-page-slider').css('min-height', windowsHeight/3 + 'px');

	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo


	jQuery('.prevbg').click(function(x) { x.preventDefault(); jQuery('body').data('backstretch').prev(); });
  	jQuery('.nextbg').click(function(x) { x.preventDefault(); jQuery('body').data('backstretch').prev(); });
});

/*-----------------------------------------------------------------------------------*/
/*  FANCY NAV
/*-----------------------------------------------------------------------------------*/
$(window).scroll(function() {
'use strict';
    var scroll_pos = 0;
    $(document).scroll(function() { 
        var windowsHeight = $(window).height();
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > windowsHeight) {     	        
            $('.navbar-fixed-top').removeClass('opaqued');
        } else {
            $('.navbar-fixed-top').addClass('opaqued');
        }
    });

  	if  ( ($(document).height() - $(window).height()) - $(window).scrollTop() < 1000 ){
	    $('#footer-wrapper').css('z-index','4');
	} else {
		$('#footer-wrapper').css('z-index','1');
	}

});
jQuery(document).ready(function(){
    jQuery('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});



/*-----------------------------------------------------------------------------------*/
/*  SEARCH BAR
/*-----------------------------------------------------------------------------------*/
$(document).ready(function($){
'use strict';

});

/*-----------------------------------------------------------------------------------*/
/*  NICESCROLL
/*-----------------------------------------------------------------------------------*/
 

/*-----------------------------------------------------------------------------------*/
/*  ANIMATE
/*-----------------------------------------------------------------------------------*/
$(document).ready(function($){
'use strict';
  $('.fade-up, .fade-down, .bounce-in, .flip-in').addClass('no-display');
  $('.bounce-in').one('inview', function() { 
    $(this).addClass('animated bounceIn appear');
  });
  $('.flip-in').one('inview', function() { 
    $(this).addClass('animated flipInY appear');
  });
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  $('.fade-up').one('inview', function() {
    $(this).addClass('animated fadeInUp appear');
  });
  $('.fade-down').one('inview', function() {
    $(this).addClass('animated fadeInDown appear');
  });

});

/*-----------------------------------------------------------------------------------*/
/*  SNOOOOOOOOTH SCROLL - SO SMOOTH
/*-----------------------------------------------------------------------------------*/
$(function() {
'use strict';
  $('a[href*=\\#]:not([href=\\#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
					}, 1000);
				return false;
			}
		}
	});
});

/*-----------------------------------------------------------------------------------*/
/*  CAROUSEL
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
'use strict';
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });

	$('#scroller').carousel({
	    pause: true,
	    interval: 4000,
	});

});
