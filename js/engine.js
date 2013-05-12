app = {
	
	latitude: 0,
	longitude: 0,

	init: function() {
		
		alert('init');
		
		app.getLocation();

		app_panel = $('#app');
		app_panel.css('width', $(window).width() );
		app_panel.css('height', $(window).height() );
		
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
		}
	}
	
	swipeLeft: function() { 
	
		alert('left');
	
	},

	swipeRight: function() { 
	
		alert('right');
	},
	
	swipeUp: function() { 
	
		alert('up');
	
	},
	
	swipeDown: function() { 
	
		alert('down')

	}			
	
}