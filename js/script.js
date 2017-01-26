(function($) {
	
	"use strict";

	//  Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){			
			$('.preloader').fadeOut(500);
		}
	}	

	//  Update Header Style + Scroll to Top
	function headerStyle() {
		if($('.main-header').length){			
			var topHeader = $('.mainmenu-area').innerHeight();
			var windowpos = $(window).scrollTop();
			if (windowpos >= topHeader) {
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}
    

	//  revolution slider
	function revolutionSliderActiver () {
		if ($('.rev_slider_wrapper #slider1').length) {			
			$("#slider1").revolution({
				sliderType:"standard",
				sliderLayout:"auto",
				delay:5000,
				navigation: {
					arrows:{enable:true} 
				},
				gridheight:950, 
				gridwidth:1200 
			});
		};
	}
	
    //  stickyHeader
	function stickyHeader () {
		if ($('.stricky').length) {
			var strickyScrollPos = 100;
			if($(window).scrollTop() > strickyScrollPos) {
				$('.stricky').removeClass('fadeIn animated');
		      	$('.stricky').addClass('stricky-fixed fadeInDown animated');
			}
			else if($(this).scrollTop() <= strickyScrollPos) {
				$('.stricky').removeClass('stricky-fixed fadeInDown animated');
		      	$('.stricky').addClass('slideIn animated');
			}
		};
	}


 	// tabs dos dias das talks
    function eventTab() {
        if ($('.event-tab .event-tablist').length) {			
            var tabWrap = $('.event-tab .event-tab-content');
            var tabClicker = $('.event-tab .event-tablist li');
            
            tabWrap.children('div').hide();
            tabWrap.children('div').eq(0).show();
            tabClicker.on('click', function() {
                var tabName = $(this).data('tab-name');
                tabClicker.removeClass('active');
                $(this).addClass('active');
                var id = '#'+ tabName;
                tabWrap.children('div').not(id).hide();
                tabWrap.children('div'+id).fadeIn('1000');
                return false;
            });        
        }
    }

	//Sponsors Slider
	$('.sponsors-slider').owlCarousel({		
	    loop:true,
	    dots:false,
		smartSpeed: 500,
		autoplay: 5000,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            loop:true
	        },
	        480:{
				items:2,
				loop:true
			},
	        768:{
	            items:3,
	            loop:true
	        },
	        1000:{
	            items:4,
	            loop:true
	        }
	    }
	});
	

	// Scroll to top
	if($('.scroll-to-top').length){
		$(".scroll-to-top").on('click', function() {
		   // animate
		   $('html, body').animate({
			   scrollTop: $('html, body').offset().top
			 }, 1000);
	
		});
	}


/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
	$(document).on('ready', function() {		
		revolutionSliderActiver();				
		eventTab();
	});

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	$(window).on('scroll', function() {
		stickyHeader();
		headerStyle();				
	});
	
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});
	

})(window.jQuery);