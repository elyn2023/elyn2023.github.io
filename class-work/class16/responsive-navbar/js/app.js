// hide menu when window's smaller code below


$(document).ready(function () {

	$(window).resize(function(){
		// console.log($(window).width());
		if ($(window).width()>"875"){
			$('#mobile-nav').hide(); 
		}


	})

	
// click burger to show menu below

	$("#burger").click(function(){
		$('#mobile-nav').slideToggle(); 
	})
})
