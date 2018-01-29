//menu effect below

var isActive = false;

$('.js-menu').on('click', function() {
	if (isActive) {
		$(this).removeClass('active');
		$('body').removeClass('menu-open');
	} else {
		$(this).addClass('active');
		$('body').addClass('menu-open');
	}

	isActive = !isActive;
});

// slide effect below

  $(function() {
    $(".rslides").responsiveSlides({
	timeout: 4000,
	});
	});
	

// menu jump below

	$("#location_click").click(function() {
    $('html, body').animate({
        scrollTop: $(".location").offset().top
    }, 1000);
});

$("#gallery_click").click(function() {
	$('html, body').animate({
			scrollTop: $(".gallery").offset().top
	}, 1000);
});

$("#chef_click").click(function() {
	$('html, body').animate({
			scrollTop: $(".chef").offset().top
	}, 1000);
});

$("#custom_cake").click(function() {
	$('html, body').animate({
			scrollTop: $(".custom_cake").offset().top
	}, 1000);
});

//scroll icon

$(function() {
  $('span').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(".rslides").attr('href')).offset().top}, 500, 'linear');
  });
});

$('.view_bottom').click(function(){
	$('.chef_bodycopy').slideToggle();
})



