$(document).ready(function() {

////////////////////// SCROLL //////////////////////////

	 $("a.anchor").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - $(".header").height() - 50;
        if (id == "#skills") {
        	top = $(id).offset().top - $(".header").height();
        }
        if ($('.header-nav-toggle').hasClass("active")) {
        	$('.header-nav-toggle').removeClass('active');
			$(".header-nav").removeClass("active");
			$(".header .animation").removeClass("active");
			$(".header .animation__element").removeClass("active");
			setTimeout(function() {
				$('body,html').animate({scrollTop: top}, 1200);
			}, 500);
        } else {
        	$('body,html').animate({scrollTop: top}, 1200);
    	}
    });

////////////////////// Primary Menu (Responsive) ///////////////////////

	$('.header-nav-toggle').click(function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(".header-nav").removeClass("active");
			setTimeout(function() {
				$(".header .animation").removeClass("active");
			}, 500);
			$(".header .animation__element").removeClass("active");
		} else {
			$(this).addClass('active');
			$(".header .animation").addClass("active");
			setTimeout(function() {
				$(".header .animation__element").addClass("active");
			}, 1);
			setTimeout(function() {
				$(".header-nav").addClass("active");
			}, 500);
		}
	});

////////////////////// Header Transform ////////////////////////////

	var stages = {
		section_1: {
			start: $("#main-section").offset().top - $(".header").height(),
			end: $("#main-section").offset().top + $("#main-section").height()
		},
		section_2: {
			start: $("#about").offset().top - $(".header").height() - 200,
			end: $("#about").offset().top + $("#about").height() + $(".header").height()
		},
		section_3: {
			start: $("#skills").offset().top - $(".header").height() - 71,
			end: $("#skills").offset().top + $("#skills").height() + $(".header").height()
		},
		section_4: {
			start: $("#portfolio").offset().top - $(".header").height() - 70,
			end: $("#portfolio").offset().top + $("#portfolio").height() + $(".header").height()
		},
		section_5: {
			start: $("#contacts-box").offset().top - $(".header").height() - 60,
			end: $("#contacts-box").offset().top + $("#contacts-box").height() + $(".header").height()
		}
	};

	var scroll = 0;

	$(window).on("scroll", function(event) {
		if ($(this).scrollTop() >= stages.section_1.start && $(this).scrollTop() <= stages.section_1.end) {
			$(".header").css({"background-color": "rgba(255, 255, 255, .45)", "color": "#000"});
			$('.header-nav-toggle span').css({"background-color": "#000"});
			if ($("html,body").width() > 1000) {
				$(".header-nav a").css({"color": "#000"});
				$(".header-nav a").hover(function() {
					$(this).css({"color": "#fff"});
				}, function() {
					$(this).css({"color": "#000"});
				});
			} else {
				$(".header-nav a").css({"color": "#000"});
				$(".header-nav a").hover(function() {
					$(this).css({"color": "#FF7200"});
				}, function() {
					$(this).css({"color": "#000"});
				});
			}
			$(".header__border").css({"background-color": "rgba(255, 255, 255, .3)"});
		}

		if ($(this).scrollTop() >= stages.section_2.start && $(this).scrollTop() <= stages.section_2.end) {
			$(".header").css({"background-color": "#050505", "color": "#fff"});
			$('.header-nav-toggle span').css({"background-color": "#fff"});
			if ($("html,body").width() > 1000) {
				$(".header-nav a").css({"color": "#fff"});
				$(".header-nav a").hover(function() {
					$(this).css({"color": "#FF7200"});
				}, function() {
					$(this).css({"color": "#fff"});
				});
			} else {
				$(".header-nav a").css({"color": "#000"});
				$(".header-nav a").hover(function() {
					$(this).css({"color": "#FF7200"});
				}, function() {
					$(this).css({"color": "#000"});
				});
			}
			$(".header__border").css({"background-color": "#333333", "height": "7px", "bottom": "-7px"});
		}

		if ($(this).scrollTop() >= stages.section_3.start && $(this).scrollTop() <= stages.section_3.end) {
			$(".header").css({"background-color": "#1454D8", "color": "#fff"});
			$('.header-nav-toggle span').css({"background-color": "#fff"});
			if ($("html,body").width() > 1000) {
				$(".header-nav a").css({"color": "#fff"});
				$(".header-nav a").hover(function() {
					$(this).css({"color": "#FF7200"});
				}, function() {
					$(this).css({"color": "#fff"});
				});
			} else {
				$(".header-nav a").css({"color": "#000"});
				$(".header-nav a").hover(function() {
					$(this).css({"color": "#FF7200"});
				}, function() {
					$(this).css({"color": "#000"});
				});
			}
			$(".header__border").css({"background-color": "#fff", "height": "2px", "bottom": "-2px"});
		}

		if ($(this).scrollTop() >= stages.section_4.start && $(this).scrollTop() <= stages.section_5.end) {
			$(".header").css({"background-color": "#110B0B", "color": "#FF7200"});
			$('.header-nav-toggle span').css({"background-color": "#FF7200"});
			if ($("html,body").width() > 1000) {
				$(".header-nav a").css({"color": "#FF7200"});
				$(".header-nav a").hover(function() {
					$(this).css({"color": "#fff"});
				}, function() {
					$(this).css({"color": "#FF7200"});
				});
			} else {
				$(".header-nav a").css({"color": "#000"});
				$(".header-nav a").hover(function() {
					$(this).css({"color": "#FF7200"});
				}, function() {
					$(this).css({"color": "#000"});
				});
			}
			$(".header__border").css({"background-color": "#FF7200", "height": "2px", "bottom": "-2px"});
		}
	});

});