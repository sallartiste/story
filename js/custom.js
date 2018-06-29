 /*------------------------------*/
/*	Page loader
/*------------------------------*/

 $(window).load(function() {
	$(".loader-item").delay(500).fadeOut();
	$("#pageloader").delay(1000).fadeOut("slow");
	});


/*------------------------------*/
/*	 Scroll Menu BG
/*------------------------------*/

     $(window).scroll(function () {
         if ($("#header").offset().top > 50) {
             $("#header").addClass("menu-bg");
         } else {
             $("#header").removeClass("menu-bg");
         }
     });


/*------------------------------*/
/* Tab Carousel
/*------------------------------*/

   var owl = $('.features-carousel');
		owl.owlCarousel({
		nav: true,
		navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
		dots: false,
		loop: false,
		items : 1,
		autoplay:true,
		autoplay:1000,
	    loop:true,
   })


/*------------------------------*/
/*	Testimonial Carousel
/*------------------------------*/


   var owl = $('.testimonial-carousel');
		owl.owlCarousel({
		nav: false,
		dots: false,
		loop: false,
		items : 1,
		autoplay:true,
		autoplay:1000,
	    loop:true,
   })

/*------------------------------*/
/*	Clients Carousel
/*------------------------------*/

 $('.clients-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav: false,
		dots: false,
		loop: false,
		responsiveClass:true,
		responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
      }
   })

/*------------------------------*/
/*	work Shorting
/*------------------------------*/

	$('.work-inner').mixItUp();

/*------------------------------*/
/*	Magnific-popup
/*------------------------------*/


        $('.work-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

/*------------------------------*/
/*	Video Popup
/*------------------------------*/

	$('.video-play').magnificPopup({
		type: 'iframe'
	});

/*------------------------------*/
/*	 Smooth scroll
/*------------------------------*/


      (function($) { "use strict";
		$(".scroll a[href^='#']").on('click', function(e) {
		   e.preventDefault();
		   var hash = this.hash;
		   $('html, body').stop().animate({
			   scrollTop: $(hash).offset().top}, 2000, 'easeOutExpo');
		});
		 })(jQuery);

		$('.collapse ul li a').click(function(){
		$('.navbar-toggle:visible').click();
	   });


/*------------------------------*/
/*	 Scroll to top
/*------------------------------*/

	$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});

		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 2000);
			return false;
  });


/*------------------------------*/
/*	 Parallax
/*------------------------------*/


	$(window).bind('load', function() {
		if(!onMobile)
		parallaxInit();
	});

	function parallaxInit() {
		$('#history').parallax("50%", 0.2);
		$('#facts').parallax("50%", 0.2);
		$('#cta ').parallax("50%", 0.2);
		$('#testimonials').parallax("50%", 0.2);
		$('#contact').parallax("50%", 0.2);


	}
		var onMobile = false;
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			onMobile = true;
		}


/*------------------------------*/
/*	 Window Height
/*------------------------------*/


  function fullHeight() {
	windowHeight = $(window).height();
	$('.full-height').css('height', windowHeight);
	};

	fullHeight();
	$(window).resize(function() {
		fullHeight();
	});

    
