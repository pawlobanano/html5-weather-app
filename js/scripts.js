$(document).ready( function() {
	
	app.init();
	
	$('.submit').click( function(event) {
		
		event.preventDefault();
		//alert('ads');
		
		app.locWeather();
		
		return false;
	});


	$(".panel").swipe( {

		swipeLeft:function() {
		  app.swipeLeft(); 
		},
		
		swipeRight:function() {
		  app.swipeRight(); 
		},
		
		swipeUp:function() {
		  app.swipeUp(); 
		},
		
		swipeDown:function() {
		  app.swipeDown(); 
		},

		longTap:function() {
        	app.showMoreInfo();
        },
        
        doubleTap:function() {
          	app.toggleDaysTemp();
        },
								
		
    });
	
	
});