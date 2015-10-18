$(document).ready(function() {

	$(".auth_buttons").click(function() {
		$(this).next().slideToggle();
	});
	$(".nav_button").click(function() {
		$(".nav ul").slideToggle();
	});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	//$(".fancybox").fancybox();
	$(function () {
		$(".fancybox").fancybox({
			'beforeClose': function() {
           $('#feedback')[0].reset();
        }
		});
	});

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 5,
		autoHeight : true
	});
	/*owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});*/
	$(".next_button").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function() {
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Карта
	var map;

			function initialize() {

				

				var mapOptions = {
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					mapTypeControl: false,
					zoom: 16,
					zoomControl: true,
					zoomControlOptions: {
						style: google.maps.ZoomControlStyle.DEFAULT,
						position: google.maps.ControlPosition.DEFAULT
					},
					panControl: false,
					streetViewControl: false,
					scaleControl: false,
					overviewMapControl: false,
					center: new google.maps.LatLng(50.4390449, 30.498883400000068),
					styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]
				};
				
				map = new google.maps.Map(document.getElementById('map-canvas'),
					mapOptions);
				
				var icon = {
					path: 'M16.5,51s-16.5-25.119-16.5-34.327c0-9.2082,7.3873-16.673,16.5-16.673,9.113,0,16.5,7.4648,16.5,16.673,0,9.208-16.5,34.327-16.5,34.327zm0-27.462c3.7523,0,6.7941-3.0737,6.7941-6.8654,0-3.7916-3.0418-6.8654-6.7941-6.8654s-6.7941,3.0737-6.7941,6.8654c0,3.7916,3.0418,6.8654,6.7941,6.8654z',
					anchor: new google.maps.Point(16.5, 51),
					fillColor: '#0090FF',
					fillOpacity: 0.6,
					strokeWeight: 0,
					scale: 1
				};
				
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(50.4390449, 30.498883400000068),
					map: map,
					icon: icon,
					title: 'marker'
				});

			}
			
			google.maps.event.addDomListener(window, 'load', initialize);
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	// $("#feedback").(function() {
	// 			$('form')[0].reset();
	// 	});

	$("#feedback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#feedback").serialize()
		}).done(function() {
			alert("Thanks for feedback!");
			setTimeout(function() {
				$('form')[0].reset();
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});


	/* скроллинг меню */

		$('#nav-about').on('click', function(e){
			var header = $('.main_header').height();
			var scrolling = ($('.second_section').offset().top)-header;
			e.preventDefault();
			
			$('html,body').stop(true).animate({scrollTop: scrolling},500,function(){	})
		})

		$('#nav-team').on('click', function(e){
			var header = $('.main_header').height();
			var scrolling = ($('.third_section').offset().top)-header;
			e.preventDefault();
			
			$('html,body').stop(true).animate({scrollTop: scrolling},500,function(){	})
		})

		$('#nav-portfolio').on('click', function(e){
			var header = $('.main_header').height();
			var scrolling = ($('.fourth_section').offset().top)-header;
			e.preventDefault();
			
			$('html,body').stop(true).animate({scrollTop: scrolling},500,function(){	})
		})

		$('#nav-contact').on('click', function(e){
			var header = $('.main_header').height();
			var scrolling = ($('.sixth_section').offset().top)-header;
			e.preventDefault();
			
			$('html,body').stop(true).animate({scrollTop: scrolling},500,function(){	})
		})

});