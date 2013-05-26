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
	
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!

		var yyyy = today.getFullYear();
		if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = mm+'/'+dd+'/'+yyyy;
		
		$('span.date').html( today );
		
			
		$.ajax({
			type: "POST",
             url: "lib/api/getWeather.php",
             dataType: 'json',
             data: {
                 location: 'Wroclaw',
             },
             success: function( data ) {
                 $( ".temp_c .value" ).html( data.temp_c );
                 $("span.city").html( data.city );
                 $(".desc p").html( data.desc );
                 
                 app.setSkyImage( data.desc );
             }
        });	
        
        /*
        $.getJSON( "lib/api/getWeather.php", function( data) {
	        
	        console.log( data );
	        
        } );
		*/
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