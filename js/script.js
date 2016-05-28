$(document).ready(function(){

	$('.menu-btn').click(function(){
		$('.navbar-list').slideToggle();
		$('.lvl-3').toggle();
		$('.lvl-2').toggleClass('lvl-2-rotated');
		$('.lvl-1').toggleClass('lvl-1-rotated');
	});

});