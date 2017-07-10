$(document).ready(function($) {

	window.onscroll = function() {
		if (window.pageYOffset >= 200) {
			$('#nav').addClass('show');
			$('#main').addClass('active');
			$('#salon').removeClass('active');
		} else {
			$('#nav').removeClass('show');
		}

		if(window.pageYOffset >= 800) {
			$('#main').removeClass('active');
			$('#edom').removeClass('active');
			$('#salon').addClass('active');
		} 

		if(window.pageYOffset >= 2400) {
			$('#salon').removeClass('active');
			$('#edom').addClass('active');
			
		} 

		if(window.pageYOffset >= 3600) {
			$('#edom').removeClass('active');
			$('#shop').addClass('active');
		} else {$('#shop').removeClass('active');}

		if(window.pageYOffset >= 7221) {
			$('#shop').removeClass('active');
			$('#edom').removeClass('active');
			$('#exp').addClass('active');
			
		} else {
			$('#exp').removeClass('active');
		}

		console.log(window.pageYOffset);

		jQuery('.bxslider').bxSlider({
			controls: 'true',
			nextText: 'NEXT',
			prevText: 'PREV',
			auto: 'true',
			pager: false
		});

		jQuery('.bxslider2').bxSlider({
			controls: 'true',
			nextText: 'NEXT',
			prevText: 'PREV',
		});


  			$('.hover').hover(function(){
  				$(this).addClass('flip');
  			},function(){
  				$(this).removeClass('flip');
  			});		
	}

	
	});