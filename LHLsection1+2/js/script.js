$(document).ready( function(){

	$('ul li').click(function() {
		$(this).toggleClass('purchased');
	}); // Allow users to cross off ingredients as they purchase them

	$('ol li').click(function() {
		$('ol li').removeClass(); // Remove all class styles
		$('ol li').toggleClass('inactive'); // Apply inactive style to all items
		$(this).removeClass('inactive'); // Remove the inactive style from clicked item
		$(this).addClass('active'); // Apply the active style to the clicked item
	});

	$('div.row div').click(function() {
		
		if($('img').css('opacity') == 1) {
			$('img').fadeTo('slow', 0);
		} else {
			$('img').fadeTo('slow', 1);
		}

		if($(this).html() == 'Hide images') {
			$(this).html('Show images');
		} else {
			$(this).html('Hide images');
		}

		if($('.row.clearfix:nth-of-type(1)').height() > 0) {
			$('.row.clearfix:nth-of-type(1)').animate({
				height: 0
			}, 'slow');
		} else {
			$('.row.clearfix:nth-of-type(1)').animate({
				height: $('img[src="images/tilapia.jpg"]').height()
			}, 'slow');		
		}

	});


});