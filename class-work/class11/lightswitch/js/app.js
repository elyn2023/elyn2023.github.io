$(document).ready(function () {

	var lights = 'on';


$('#lightswitch').click(function(){

	if (lights == 'on'){
		$('#lightswitch')
			.toggleClass("switch-on")
			.html("OFF");
			$('body').addClass('bg-off');
		lights = "off";
	} else {
		$('#lightswitch')
			.toggleClass("switch-on")
			.html("ON");
		$('body').removeClass('bg-off');	
		lights = "on";	

	}

})

})


// When the lights are on:

// give the #lightswitch element a background-color of black and a text color of white
// give the body a background color of white

// When the lights are off:

// give the #lightswitch element a background-color of white and a text color of black
// give the body a background color of black;