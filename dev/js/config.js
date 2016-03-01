jQuery(function($) {
	// $(".lout-base").onepage_scroll({
	// 	sectionContainer: "section",
	// 	easing: "ease",
	// 	animationTime: 1000,
	// 	pagination: true,
	// 	updateURL: false,
	// 	$.fn.moveTo:
	// 	beforeMove: function(index) {},
	// 	afterMove: function(index) {},
	// 	loop: true,
	// 	keyboard: true,
	// 	responsiveFallback: false,
	// 	direction: "vertical"
	// });
	$('#fullpage').fullpage({
		menu: '.lout-sidebar-navi',
		anchors:['js-mainvisual', 'js-idea', 'js-overview', 'js-form', 'js-privacy']
	});
});