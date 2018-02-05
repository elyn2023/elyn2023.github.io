
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


$('span').click(function() {
    $('html, body').animate({
        scrollTop: $(".rslides").offset().top
    }, 1000);
});


//logo jump

$('.mini_logo').click(function() {
    $('html, body').animate({
        scrollTop: $("header").offset().top
    }, 1000);
});


//menu effect below

var isActive = false;

$('.js-menu').on('click', function() {
	if (isActive) {
		$(this).removeClass('active');
		$('body').removeClass('menu-open');
		$('header').removeClass('menu-open');
	} else {
		$(this).addClass('active');
		$('body').addClass('menu-open');
		$('header').removeClass('menu-open');
	}

	isActive = !isActive;
});

//cupcake_hover effect

$('.cupcake_1').hover(
	function () {
		$('.cupcake_hover1').fadeIn();
	},
	function () {
		$('.cupcake_hover1').fadeOut();
	}
);

$('.cupcake_2').hover(
	function () {
		$('.cupcake_hover2').fadeIn();
	},
	function () {
		$('.cupcake_hover2').fadeOut();
	}
);

$('.cupcake_3').hover(
	function () {
		$('.cupcake_hover3').fadeIn();
	},
	function () {
		$('.cupcake_hover3').fadeOut();
	}
);


$('.cupcake_4').hover(
	function () {
		$('.cupcake_hover4').fadeIn();
	},
	function () {
		$('.cupcake_hover4').fadeOut();
	}
);


$('.cupcake_5').hover(
	function () {
		$('.cupcake_hover5').fadeIn();
	},
	function () {
		$('.cupcake_hover5').fadeOut();
	}
);


$('.cupcake_6').hover(
	function () {
		$('.cupcake_hover6').fadeIn();
	},
	function () {
		$('.cupcake_hover6').fadeOut();
	}
);


$('.cupcake_7').hover(
	function () {
		$('.cupcake_hover7').fadeIn();
	},
	function () {
		$('.cupcake_hover7').fadeOut();
	}
);


$('.cupcake_8').hover(
	function () {
		$('.cupcake_hover8').fadeIn();
	},
	function () {
		$('.cupcake_hover8').fadeOut();
	}
);


$('.cupcake_9').hover(
	function () {
		$('.cupcake_hover9').fadeIn();
	},
	function () {
		$('.cupcake_hover9').fadeOut();
	}
);


$('.cupcake_10').hover(
	function () {
		$('.cupcake_hover10').fadeIn();
	},
	function () {
		$('.cupcake_hover10').fadeOut();
	}
);


$('.cupcake_11').hover(
	function () {
		$('.cupcake_hover11').fadeIn();
	},
	function () {
		$('.cupcake_hover11').fadeOut();
	}
);


$('.cupcake_12').hover(
	function () {
		$('.cupcake_hover12').fadeIn();
	},
	function () {
		$('.cupcake_hover12').fadeOut();
	}
);