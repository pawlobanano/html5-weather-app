app = {
	

	init: function() {
		
		//alert('init');
		
		app.getWeather();
		app.getSecondLocWeather();
		
		latitude = 0;
		longtitude = 0;

		app_panel = $('#app');
		app_panel.css('width', $(window).width() );
		app_panel.css('height', $(window).height() );
		
		x = $('.panel-wrap').width();
		y = $('.panel-wrap').height();
		
		main_panel = $('#main-panel');
		days_panel = $('#days-panel');
		secondloc_panel = $('#second-location');
		settings_panel = $('#settings-panel');
		
		secondloc_panel.css("left", "-95%" );
				
		main_panel.show();
		activePanel = 0;
		
	},
	
	getWeather: function() {
	
	
		var latitude = 0;
		var longitude = 0;
		
		var today 					= new Date();
		var dd 	  	= today.getDate();
		var mm 		= today.getMonth()+1; //January is 0!
		var yyyy 	= today.getFullYear();
		if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = dd+'/'+mm+'/'+yyyy;
		
		$('span.date').html( today );
		//$('span#days-date').html(twoDaysAfterTomorrow);
		
	
		if (navigator.geolocation)
		{
			navigator.geolocation.getCurrentPosition(showPosition);
		}
		else {}

        function showPosition(position)
		{
			latitude 	= position.coords.latitude;
			longitude 	= position.coords.longitude;
			
			loc = latitude+","+longitude;	
			    
			    
			$.ajax({
				type: "POST",
	             url: "lib/api/getWeather.php",
	             dataType: 'json',
	             data: {
	                 location: loc,
	             },
	             success: function( data ) {
	
		             app.setCurrentForecast( data );
	                 app.setSkyImage( data.desc );
	                 app.set3DayForecast( data );
	                 
	             },
	             error: function () {
		             
		             alert("Błąd podczas pobierania danych");
		             
	             }
	        });				    
			    
		}

	},
	
	setCurrentForecast: function( data ) {
	
	     $("#main-panel .temp_c .value" ).html( Math.round(data.temp_c) );
	     $("#main-panel .feelslike_c .value" ).html( Math.round(data.feelslike_c) );
	     $("#main-panel span.city").html( data.city );
	     $("#main-panel .desc p").html( data.desc );
	     $("#main-panel .more-info").append("<p>Ciśnienie: "+data.pressure_mb+"</p>");
	     $("#main-panel .more-info").append("<p>"+data.fcttext_metric+"</p>");	
	     	
	},
	
	set3DayForecast: function( data ) {
		
		var raindrops = 'mm opadów';
		var humidity = '% zachmurzenia';

		var dd1 = data.tomorrow_day;
		var mm1 = data.tomorrow_month;
		if(dd1<10){dd1='0'+dd1} if(mm1<10){mm1='0'+mm1};

		var dd2 = data.dayAfterTomorrow_day;
		var mm2 = data.dayAfterTomorrow_month;
		if(dd2<10){dd2='0'+dd2} if(mm2<10){mm2='0'+mm2};

		var dd3 = data.twoDaysAfterTomorrow_day;
		var mm3 = data.twoDaysAfterTomorrow_month;
		if(dd3<10){dd3='0'+dd3} if(mm3<10){mm3='0'+mm3};

		// Dane pozyskane z ostatniego wywołania geolokacji
		$("#days-panel #tomorrow .city").html( data.city );
		$("#days-panel #tomorrow span.day").html( dd1 );
		$("#days-panel #tomorrow span.month").html( mm1 );
		$("#days-panel #tomorrow span.year").html( data.tomorrow_year );
		$("#days-panel #tomorrow .temp-wrap .temp_c_high span.value").html( data.tomorrow_high_celsius );
		$("#days-panel #tomorrow .temp-wrap .temp_c_low span.value").html( data.tomorrow_low_celsius );
		$("#days-panel #tomorrow .sky").html( data.tomorrow_conditions );
		$("#days-panel #tomorrow .raindrops span.value").html( data.tomorrow_qpf_allday + raindrops );
		$("#days-panel #tomorrow .avehumidity").html( data.tomorrow_avehumidity + humidity );
		$("#days-panel #tomorrow .fcttext_metric").html( data.tomorrow_fcttext_metric );


		// Dane pozyskane z ostatniego wywołania geolokacji
		$("#days-panel #dayAfterTomorrow .city").html( data.city );
		$("#days-panel #dayAfterTomorrow span.day").html( dd1 );
		$("#days-panel #dayAfterTomorrow span.month").html( mm1 );
		$("#days-panel #dayAfterTomorrow span.year").html( data.dayAfterTomorrow_year );
		$("#days-panel #dayAfterTomorrow .temp-wrap .temp_c_high span.value").html( data.dayAfterTomorrow_high_celsius );
		$("#days-panel #dayAfterTomorrow .temp-wrap .temp_c_low span.value").html( data.dayAfterTomorrow_low_celsius );
		$("#days-panel #dayAfterTomorrow .sky").html( data.dayAfterTomorrow_conditions );
		$("#days-panel #dayAfterTomorrow .raindrops span.value").html( data.dayAfterTomorrow_qpf_allday + raindrops );
		$("#days-panel #dayAfterTomorrow .avehumidity").html( data.dayAfterTomorrow_avehumidity + humidity );
		$("#days-panel #dayAfterTomorrow .fcttext_metric").html( data.dayAfterTomorrow_fcttext_metric );

		// Dane pozyskane z ostatniego wywołania geolokacji
		$("#days-panel #twoDaysAfterTomorrow .city").html( data.city );
		$("#days-panel #twoDaysAfterTomorrow span.day").html( dd1 );
		$("#days-panel #twoDaysAfterTomorrow span.month").html( mm1 );
		$("#days-panel #twoDaysAfterTomorrow span.year").html( data.twoDaysAfterTomorrow_year );
		$("#days-panel #twoDaysAfterTomorrow .temp-wrap .temp_c_high span.value").html( data.twoDaysAfterTomorrow_high_celsius );
		$("#days-panel #twoDaysAfterTomorrow .temp-wrap .temp_c_low span.value").html( data.twoDaysAfterTomorrow_low_celsius );
		$("#days-panel #twoDaysAfterTomorrow .sky").html( data.twoDaysAfterTomorrow_conditions );
		$("#days-panel #twoDaysAfterTomorrow .raindrops span.value").html( data.twoDaysAfterTomorrow_qpf_allday + raindrops );
		$("#days-panel #twoDaysAfterTomorrow .avehumidity").html( data.twoDaysAfterTomorrow_avehumidity + humidity );
		$("#days-panel #twoDaysAfterTomorrow .fcttext_metric").html( data.twoDaysAfterTomorrow_fcttext_metric );
		
	},

	setSkyImage: function( sky ) {
	
		//console.log( sky.length );
		$('#main-panel .sky-image').addClass( 'sky-'+sky.length );
		
	},

	getSecondLocWeather: function() {
	
		
		if( localStorage['loc'] === "undefined" ) {
		
			$('.second-loc-heading').html('brak wybranej lokacji, wpisz ją w powyższe pole');	
			
			
		}
		else {
			$('.second-loc-heading').html('lokacja: ' + localStorage['loc']);
			
			$.ajax({
				type: "POST",
	             url: "lib/api/getWeather.php",
	             dataType: 'json',
	             data: {
	                 location: localStorage['loc'],
	             },
	             success: function( data ) {
	
		             var desc = data.desc;
		             $('.loc2-weather .value').text( data.temp_c );
		             $('.loc2-weather .sky-image').addClass('sky-' + desc.length );
		             $('.loc2-weather .sky .desc p').text( data.desc );
		             $('.loc2-weather .more-info p').text( data.fcttext_metric ).hide;
	                 
	             },
	             error: function () {
		             
		             alert("Błąd podczas pobierania danych");
		             
	             }
	        });	
		}
		
	},

	locWeather: function() {
	
		var loc2 = $('#locInput').val();
		
		localStorage.setItem('loc', loc2);
				
		app.getSecondLocWeather();		
		
	},
	
	swipeLeft: function() { 
	
		
		if( activePanel == 0 ) {
			//$('.panel-wrap').css("margin-left", "-105%");
			$('.panel-wrap').animate({marginLeft: "-105%" }, 500);
			app.showDaysPanel();
		}
		if( activePanel == 3 ) {
			$('.panel-wrap').animate({marginLeft: "0" }, 500);
			app.showMainPanel();
		}
	
	},

	swipeRight: function() { 
	
		if( activePanel == 1 ) {
			$('.panel-wrap').animate({marginLeft: "0"}, 500);
			app.showMainPanel();
		}
		else if( activePanel == 0) {
			
			$('.panel-wrap').animate({marginLeft: "100%" }, 500);
			app.showSecondLocPanel();
		}
	},
	
	swipeUp: function() { 
	
		if( activePanel == 0) {
			$('.panel-wrap').animate({marginTop: -$(document).height()}, 500);
			app.showSettingsPanel();
		}
		
	
	},
	
	swipeDown: function() { 
	
		if( activePanel == 2 ) {
			$('.panel-wrap').animate({marginTop: "0"}, 500);
			app.showMainPanel();
		}

	},
	
	showMainPanel: function() {
		
		//$('.panel').hide();
		//main_panel.show();
		activePanel = 0;
				
	},	
	showDaysPanel: function() {

		activePanel = 1;
		
	},
	showSettingsPanel: function() {
		
		//$('.panel').hide();
		//settings_panel.show();
		activePanel = 2;
		
	},
	showSecondLocPanel: function() {
		
		activePanel = 3;

	},
	showMoreInfo: function() {

		$("#main-panel .more-info").toggle();
		
	},			
	toggleDaysTemp: function() {

		// $("#days-panel #tomorrow .temp-wrap .temp_c_high").toggle();

	}
	
}

$('#main-panel .temp-wrap').on('click', function() {
	
	$(this).children('.temp_c').slideToggle();
	$(this).children('.feelslike_c').slideToggle();
	
});

$('#days-panel .temp-wrap').on('click', function() {
	
	$(this).children('.temp_c_high').slideToggle();
	$(this).children('.temp_c_low').slideToggle();
	
});