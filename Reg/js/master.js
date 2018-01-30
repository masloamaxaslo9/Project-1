// JavaScript Document
// Author Name: Saptarang
// Author URI: http://www.saptarang.org
// Themeforest: http://themeforest.net/user/saptarang?ref=saptarang
// Creation Date: 8 June, 2015
( function ( $ ) {
    'use strict';
    $( document ).ready( function () {
	
	//Preloader
	$(window).load(function() {
		$('#preloader').fadeOut();
		$('body').delay(350).css({'overflow':'visible'});
	})
  
	// Top Arrow
	$(window).scroll(function() {
			if ($(window).scrollTop() > 1000) { 
				$('a.top').fadeIn('slow'); 
			} else { 
				$('a.top').fadeOut('slow');
			}
	});
	
	// Collapse menu for small devices
	var winWidth = $('body').width();
	if (winWidth <= 767) {
		
		// Add attribs to menu
		$('#menu .navbar-nav li a').attr('data-toggle', 'collapse');
		$('#menu .navbar-nav li a').attr('data-target', '#menu');
		
		// smooth page Scroll
		$('nav a[href^=#], a.top[href^=#], a.smooth[href^=#]').on("click", function(event) {
		  event.preventDefault();
		  $('html,body').animate({
		  scrollTop: $(this.hash).offset().top - 470},
		  1000);	
		});
		
	} else {
	
		// smooth page Scroll
		$('nav a[href^=#], a.top[href^=#], a.smooth[href^=#]').on("click", function(event) {
		  event.preventDefault();
		  $('html,body').animate({
		  scrollTop: $(this.hash).offset().top - 0},
		  1000);	
		});
		
	}
	
	// Image Lightbox
	$("a[data-rel^='prettyPhoto']").prettyPhoto({overlay_gallery: true});
	$('#photoG .galimg.photo a').append('<div class="link"><div class="hex xs"><div class="hex-inner"><i class="fa  fa-expand fa-4x"></i></div></div></div>');
	$('#videoG .galimg.video a').append('<div class="link"><div class="hex xs"><div class="hex-inner"><i class="fa fa-youtube-play fa-4x"></i></div></div></div>');
	
	// WOW - animated content
	var wow = new WOW(
	{
	  boxClass:     'wow',      // animated element css class (default is wow)
	  animateClass: 'animated', // animation css class (default is animated)
	  offset:       100,          // distance to the element when triggering the animation (default is 0)
	  mobile:       false       // trigger animations on mobile devices (true is default)
	});
	wow.init();
	
	// Counter
	var endDate = "August 7, 2017 15:03:25"; // add data in same format
        $('.countdown.styled').countdown({
          date: endDate,
          render: function(data) {
			  var years = this.leadingZeros(data.years, 2);
			  if (years != '00') {
            $(this.el).html("<div class='hex'><div class='hex-inner'><span>" + this.leadingZeros(data.years, 2) + " </span><strong>years</strong></div></div><div class='hex'><div class='hex-inner'><span>" + this.leadingZeros(data.days, 3) + " </span><strong>days</strong></div></div><div class='hex'><div class='hex-inner'><span>" + this.leadingZeros(data.hours, 2) + "  </span><strong>hrs</strong></div></div><div class='hex'><div class='hex-inner'><span>" + this.leadingZeros(data.min, 2) + "</span><strong>min</strong></div></div><div class='hex'><div class='hex-inner'><span>" + this.leadingZeros(data.sec, 2) + " </span><strong>sec</strong></div></div>");
			  } else {
			  $(this.el).html("<div class='hex'><div class='hex-inner'><span>" + this.leadingZeros(data.days, 3) + " </span><strong>days</strong></div></div><div class='hex'><div class='hex-inner'><span>" + this.leadingZeros(data.hours, 2) + "  </span><strong>hrs</strong></div></div><div class='hex'><div class='hex-inner'><span>" + this.leadingZeros(data.min, 2) + "</span><strong>min</strong></div></div><div class='hex'><div class='hex-inner'><span>" + this.leadingZeros(data.sec, 2) + " </span><strong>sec</strong></div> </div>");
			  }
          }
        });
	  
	// Accordion Symbols
	$('.panel-title a').on("click", function() {
			var thisParent = $(this).parent().parent().next();
		if(thisParent.hasClass('in')) {
				$(this).parent().removeClass('active');
		} else {
				$('.panel-title').removeClass('active');
				$(this).parent().addClass('active');
		}
	});
	
	// Artist and lineup carousel
	$("#speaker").owlCarousel({
		items : 3,
		lazyLoad : true,
		navigation : true,
    	navigationText : ["&#xf104;","&#xf105;"],
		pagination :false,
		itemsDesktop : [1199,3],
    	itemsTablet: [998,2],
    	itemsMobile : [600,1]
	 
	});
	
	// Artist and lineup carousel
	$("#sponsorOwl").owlCarousel({
		items : 4,
		lazyLoad : true,
		navigation : false,
    	navigationText : ["&#xf104;","&#xf105;"],
		pagination :false,
		itemsDesktop : [1199,4],
    	itemsTablet: [998,2],
    	itemsMobile : [600,1]
	 
	});
	  
	// slider
	 $('.bxslider').bxSlider({
		speed: 1000, // speed/time between changing slides
		auto: true, 
		pause: 5500, // slider duration if auto: true
		pager: false,
		mode: 'fade',
		captions: true
	  });
		
	  
	// Event schedule
	 $('#schedule-carousel.carousel').carousel({
		  interval: false // 5500 change value to set speed of slideshow and making auto
	 })
		
	  
	// Testimonial
	 $('#testimonial.carousel').carousel({
		  interval: false // 5500 change value to set speed of slideshow and making auto
	 })
				
	// Subscription Form Validation
	   $("#subscribeForm input").on('focus click', (function() {
		  $(this).prev("label").hide();
		  $(this).prev().prev("label").hide();	 		 	
	  }));
	   
	  $("#subscribeForm").submit(function() {
		  // validate and process form here
		  var emailSubscribe = $("#emailSubscribe").val();
		  if (emailSubscribe == "") {
				$('#emailSubscribe').addClass('reqfld');
				$('<span class="error" style="display:none; color:#ffc107"><i class="fa fa-exclamation-circle"></i></span>').insertBefore('#emailSubscribe').fadeIn(400);
				$("#emailSubscribe").on('focus click', (function() {  $('#emailSubscribe').removeClass('reqfld');  $(this).prev().fadeOut(400); }));
				return false;
		   } else if(emailSubscribe.indexOf('@') == -1 || emailSubscribe.indexOf('.') == -1) {
				$('#emailSubscribe').addClass('reqfld');
				$('<span class="error" style="display:none;  color:#ffc107">Invalid!</span>').insertBefore('#emailSubscribe').fadeIn(400);
				$("#emailSubscribe").on('focus click', (function() {  $('#emailSubscribe').removeClass('reqfld');  $(this).prev().fadeOut(400); }));
				return false;
		  }
	  
		  var sub_security = $("#sub-security").val();
			  
		  var dataString = '&emailSubscribe=' + emailSubscribe + '&sub-security=' + sub_security;
		  
		  $.ajax({
			type: "POST",
			url: "form/subscribe.php",
			data: dataString,
			success: function() {
			  $("#subscribeForm .form-row").hide();
			  $('#subscribeForm').append("<div id='subscribesuccess' class='alert alert-success' style='border:#"+sub_successBox_Border_Color+" 1px "+sub_successBoxBorderStyle+"; background:#"+sub_successBoxColor+";' ></div>");
			  $('#subscribesuccess').html("<h5 class='text-center' style='color:#"+sub_textColor+";'><i class='fa fa-check-circle'></i> "+sub_submitMessage+"</h5>")
			  .hide().delay(300)
			  .fadeIn(1500);
			  
			  $('#subscribeForm .form-row').delay(6000).slideUp('fast');
			  
			}
		  });
		  return false;
	});	
  
	// Register Form
	   $("#registerForm input, #registerForm select").on('focus click', (function() {
		  $(this).prev("label").hide();
		  $(this).prev().prev("label").hide();	 		 	
	  }));
	   
	  $("#registerForm").submit(function() {
		  // validate and process form here
		  var name = $("#name").val();
				if (name == "") {
				$('#name').addClass('reqfld');
				$('<span class="error" style="display:none; margin-top:0px; color:#ffc107"><i class="fa fa-exclamation-circle"></i></span>').insertBefore('#name').fadeIn(400);
				$("#name").on('focus click', (function() {  $('#name').removeClass('reqfld');  $(this).prev().fadeOut(400); }));
				return false;
		  }
		  
		  var email = $("#email").val();
		  if (email == "") {
				$('#email').addClass('reqfld');
				$('<span class="error" style="display:none; color:#ffc107"><i class="fa fa-exclamation-circle"></i></span>').insertBefore('#email').fadeIn(400);
				$("#email").on('focus click', (function() {  $('#email').removeClass('reqfld');  $(this).prev().fadeOut(400); }));
				return false;
		   } else if(email.indexOf('@') == -1 || email.indexOf('.') == -1) {
				$('#email').addClass('reqfld');
				$('<span class="error" style="display:none;  color:#ffc107">Invalid!</span>').insertBefore('#email').fadeIn(400);
				$("#email").on('focus click', (function() {  $('#email').removeClass('reqfld');  $(this).prev().fadeOut(400); }));
				return false;
		  } 
			
		  var phone = $("#phone").val();
				if (phone == "") {
				$('#phone').addClass('reqfld');
				$('<span class="error" style="display:none; color:#ffc107"><i class="fa fa-exclamation-circle"></i></span>').insertBefore('#phone').fadeIn(400);
				$("#phone").on('focus click', (function() {  $('#phone').removeClass('reqfld');  $(this).prev().fadeOut(400); }));
				return false;
		  }
		  
		  var packageList = $("#package option:selected").val();
					  if (packageList == "") {
					  $('#package').addClass('reqfld');
					  $('<span class="error" style="display:none; color:#ffc107"><i class="fa fa-exclamation-circle"></i></span>').insertBefore('#package').fadeIn(400);
					  $("#package").on('focus click', (function() {  $('#package').removeClass('reqfld');  $(this).prev().fadeOut(400); }));
					  return false;
				}
		  
		  var security = $("#security").val();
		  
		  var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone + '&package=' + packageList + '&security=' + security;
		  //alert (dataString);return false;
		  $.ajax({
			type: "POST",
			url: "form/register.php",
			data: dataString,
			success: function() {
			  $("#registerForm").animate({opacity:'1'}, 500);
			  $('.loader').hide();
			  $("<div id='success' class='alert alert-success' style='border:#"+successBox_Border_Color+" 1px "+successBoxBorderStyle+"; background:#"+successBoxColor+";' ></div>").insertAfter('.field-wrapper');
			  $('.field-wrapper').slideUp(300);
			  $('#success').html("<h5 style='color:#"+textColor+";'>"+submitMessage+"</h5><p style='color:#"+textColor+";'>"+successParagraph+"</p>")
			  .delay(300)
			  .fadeIn(1500);
			  
			  $('#registerForm').delay(6000).slideUp('fast');
			  
			}
		  });
		  return false;
	  });
	  
	});
} ( jQuery ) );

// Google Map	  
	function initialize() {
	  var myLatlng = new google.maps.LatLng(42.879489,-78.876206); // Add your coordinates here
	  var mapOptions = {
		zoom: 17,
		scrollwheel:false,
		center: myLatlng,
		disableAutoPan: true
	  }
	  var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	  
	  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h4>Cityhall Audiotorium</h4>'+ // Your Company Image here
      '<div id="bodyContent">'+
      '<p>Call Us: <strong>123-456-7890</strong></p>' +
      '</div>'+
      '</div>';

	  var infowindow = new google.maps.InfoWindow({
		  content: contentString
	  });

	  var marker = new google.maps.Marker({
		  position: myLatlng,
		  map: map
	  });
	   
	  google.maps.event.addListener(marker, 'click', function() {
		  infowindow.open(map,marker); 	  
	   });

	}
	
	google.maps.event.addDomListener(window, 'load', initialize);