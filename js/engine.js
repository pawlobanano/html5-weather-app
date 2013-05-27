app = {
	

	init: function() {
		
		//alert('init');
		
		app.getLocation();
		app.getWeather();
		
		latitude = 0;
		longtitude = 0;

		app_panel = $('#app');
		app_panel.css('width', $(window).width() );
		app_panel.css('height', $(window).height() );
		
		main_panel = $('#main-panel');
		days_panel = $('#days-panel');
		settings_panel = $('#settings-panel');
		
		main_panel.show();
		activePanel = 0;
		
		
	},

	getLocation: function() {


		
		
		
	},
	
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
	
		console.log( sky.length );
		$('.sky-image').addClass( 'sky-'+sky.length );
		
	},

	
	swipeLeft: function() { 
	
		if( activePanel == 0 ) {
			app.showDaysPanel();
		}
	
	},

	swipeRight: function() { 
	
		if( activePanel == 1 ) {	
			app.showMainPanel();
		}
	},
	
	swipeUp: function() { 
	
		if( activePanel != 2 && activePanel != 1) {
			app.showSettingsPanel();
		}
	
	},
	
	swipeDown: function() { 
	
		if( activePanel == 2 ) {
			app.showMainPanel();
		}

	},
	
	showMainPanel: function() {
		
		$('.panel').hide();
		main_panel.show();
		activePanel = 0;
				
	},	
	showDaysPanel: function() {
		
		$('.panel').hide();
		days_panel.show();
		activePanel = 1;
		
	},	
	showSettingsPanel: function() {
		
		$('.panel').hide();
		settings_panel.show();
		activePanel = 2;
		
	}				
	
}

$('.temp-wrap').on('click', function() {
	
	$(this).children('.temp_c').slideToggle();
	$(this).children('.feelslike_c').slideToggle();
	
});







