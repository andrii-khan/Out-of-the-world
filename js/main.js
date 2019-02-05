;
(function () {
	"use strict";
	$('.slider-section').slick({
		slide: '.slider-item',
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		// fade: true,
		// cssEase: 'linear',
	});
	$('.slick-dots li').on('click', function () {
		var numberDots = $('.slick-active button').text();
		console.log(numberDots);
		$('.slider-content__number').text('0'+numberDots) ;
		// numberSlide.text(numberDots);

	})
	// numberDots.on('change' , checkSlide());

	// function checkSlide() {
	// }

	// console.log(numberDots);



})();