$(document).ready( function() {
	
	app.init();
	
	$('.submit').click( function(event) {
		
		event.preventDefault();
		//alert('ads');
		
		app.locWeather();
		
		return false;
	});


	$(".panel").swipe( {

		swipeLeft:function(event, direction, distance, duration, fingerCount) {
		  app.swipeLeft(); 
		},
		
		swipeRight:function(event, direction, distance, duration, fingerCount) {
		  app.swipeRight(); 
		},
		
		swipeUp:function(event, direction, distance, duration, fingerCount) {
		  app.swipeUp(); 
		},
		
		swipeDown:function(event, direction, distance, duration, fingerCount) {
		  app.swipeDown(); 
		},
		pinchIn:function(event, direction, distance, duration, fingerCount, longTap) {
			alert('longTap');
        	app.showMoreInfo();
        },
        pinchOut:function(event, direction, distance, duration, fingerCount, pinchZoom) {
          	app.hideMoreInfo();
        },
								
		
    });
	
	
});