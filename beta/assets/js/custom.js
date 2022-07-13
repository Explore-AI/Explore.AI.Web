
$('.slider-1').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  navText: [
  "<i class='fas fa-chevron-left'></i>",
  "<i class='fas fa-chevron-right'></i>"],
  autoplay: true,
  autoplayHoverPause: true,
  touchDrag  : false,
  mouseDrag  : false,
  responsive: {
    0: {
      items: 1 },

    600: {
      items: 2,
	margin: 10	  },

    992: {
      items: 3,
		margin: 10	  },
	  
    1024: {
      items: 3 }
	} 
});
$('.review-slider').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  navText: [
  "<i class='fas fa-chevron-left'></i>",
  "<i class='fas fa-chevron-right'></i>"],
  autoplay: true,
  autoplayHoverPause: true,
  touchDrag  : false,
  mouseDrag  : false,
  responsive: {
    0: {
      items: 1,
	  margin: 0	  },

    600: {
      items: 2,
      margin: 10	  },

    992: {
      items: 3,
	  margin: 10	  },
	1024: {
      items: 3 }
	} 
});

$('.clients-say-owl').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.insights-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
  "<i class='fas fa-chevron-left'></i>",
  "<i class='fas fa-chevron-right'></i>"],
  autoplay: true,
  autoplayHoverPause: true,
  touchDrag  : false,
  mouseDrag  : false,
  responsive: {
    0: {
      items: 1 },

    600: {
      items: 2,
      margin: 10	  },

    992: {
      items: 3,
	  margin: 10	  },
	1024: {
      items: 3 }
	} 
});

	  
 $('.toggle-menu').click(function() {
     $(this).toggleClass("active");
     $('.head-menu').slideToggle();
      $('body').toggleClass("scroll-hide");
  });
  
   $('.head-menu li .dropdown-menu-icon').click(function() {
	if( $(this).hasClass('active')) {
       $('.head-menu li .dropdown-menu-icon').removeClass("active");
		  $('.head-menu li .sub-menu').slideUp();
	  }else{
		$('.head-menu li .dropdown-menu-icon').removeClass("active");
	   $(this).addClass("active");
	   jQuery('.head-menu li .sub-menu').slideUp();
	   $(this).next().slideToggle();
	}
	});
	
	$('.hire-btn').click(function() {
     $('.hire-popup').addClass('active');
  });
	$('.popup-close').click(function() {
     $('.hire-popup').removeClass('active');
  });
