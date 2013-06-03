app = {
	

	init: function() {
		
		//alert('init');
		
		app.getLocation();
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

	getLocation: function() {},
	
	getWeather: function() {
	
	
		var latitude = 0;
		var longitude = 0;
		
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!

		var yyyy = today.getFullYear();
		if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = mm+'/'+dd+'/'+yyyy;
		
		$('span.date').html( today );
		
			
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
		             $('.loc2-weather .more-info p').text( data.fcttext_metric );
	                 
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
		$("#main-panel .more-info").show();
		$("#main-panel span.city").html( "pincz!" );
		
	},			
	hideMoreInfo: function() {
		$("#main-panel .more-info").hide();
		
	}
	
}

$('.temp-wrap').on('click', function() {
	
	$(this).children('.temp_c').slideToggle();
	$(this).children('.feelslike_c').slideToggle();
	
});







