$(document).ready(function () {
	var w = window.innerWidth;

	if (w > 767) {
		$("#menu-jk").scrollToFixed();
	} else {
		$("#menu-jk").scrollToFixed();
	}
});

$(document).ready(function () {
	$(".owl-carousel-partners").owlCarousel({
		loop: true,
		margin: 50,
		nav: false,
		autoplay: true,
		dots: false,
		autoplayTimeout: 4000,
		navText: [
			'<i class="fa fa-angle-left"></i>',
			'<i class="fa fa-angle-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 4,
			},
		},
	});

	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		autoplay: true,
		dots: true,
		autoplayTimeout: 5000,
		navText: [
			'<i class="fa fa-angle-left"></i>',
			'<i class="fa fa-angle-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});
});
