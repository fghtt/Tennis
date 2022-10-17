
/*setInterval(function(){
	if(window.pageYOffset >= 90){
		$('.top-menu').css('position', 'fixed');
		$('.top-menu').css('z-index', '3');
		$('.top-menu').css('background', '#8D86C9');
	}else{
		$('.top-menu').css('position', 'relative');
		$('.top-menu').css('z-index', '0');
		$('.top-menu').css('background', '');
	}
}, 10)*/

$(window).scroll(function(){
	if($(this).scrollTop() > 90){
		$('.top-menu').css('position', 'fixed')
		.css('z-index', '3')
		.css('background', '#8D86C9')
		.css('border', '0');
	}else{
		$('.top-menu').css('position', 'relative')
		.css('z-index', '0')
		.css('background', '0')
		.css('border-bottom', '1px white solid');
	}
})
