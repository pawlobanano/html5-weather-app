app = {
	
	latitude: 0,
	longitude: 0,

	init: function() {
		
		//alert('init');
		
		app.getLocation();
		app.getWeather();

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

		if (navigator.geolocation)
		{
			navigator.geolocation.getCurrentPosition(showPosition);
		}
		else {}

        function showPosition(position)
		{
			app.latitude 	= position.coords.latitude;
			app.longitude 	= position.coords.longitude;    
			
			//alert(app.latitude);
			//alert(app.longitude);
			
		}
	},
	
	getWeather: function() {
	
		$.ajax({
			type: "POST",
             url: "lib/api/getWeather.php",
             data: {
                 //location: 'Wroclaw',
             },
             success: function( data ) {
                 $( "#weather" ).html( "<strong>" + data + "</strong> stopni" );
             }
        });	
        
		
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