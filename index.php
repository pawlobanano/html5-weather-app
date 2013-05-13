<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Weatherek</title>
		<meta name="keywords" content="" />
		<meta name="author" content="" />        
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="css/style.css">


        <!--[if lt IE 9]>
            <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
            <script>window.html5 || document.write('<script src="js/vendor/html5shiv.js"><\/script>')</script>
        <![endif]-->
        
        
        
        
    </head>
    <body>


    	<div id="app">
	    	
	    	<div class="panel" id="main-panel">
		    	
		    	
		    	<div class="panel-contents">
		    	
			    	<h1>main panel</h1>
			    	
	                <div id="weather">WEATHER</div>
	

                
                </div>

	    	</div><!-- / main panel -->
	    	
	    	
	    	<div class="panel" id="days-panel">
		    	
		    	<div class="panel-contents">
			    	
					prognoza na 3 dni			    	
			    	
		    	</div>
		    	
	    	</div><!-- / days panel -->
	    	
	    	<div class="panel" id="settings-panel">
		    	
		    	<div class="panel-contents">
			    	
			    	panel ustawień
			    	
		    	</div>
		    	
	    	</div><!-- / settings panel -->
	    	
	    	<div class="panel" id="new-city-panel">
		    	
		    	<div class="panel-contents">
			    	
			    	<?php include('lib/api/getWeather.php'); ?>
	                <h2>Wpisz szukane miasto w formularzu</h2>
	                <form method="post" action="">
	
	                    <input type="text" name="location" value="Wroclaw" />
	                    <input type="submit" name="submit"/>
	
	                </form>
			    	
			    	
		    	</div>
		    	
	    	</div><!-- /new city panel -->
	    	
    	</div><!-- / main app screen -->


        <script src="js/jquery.1.9.1.js"></script>
        <script src="lib/touchswipe/jquery.touchSwipe.min.js"></script>
        <script src="js/engine.js"></script>
        <script src="js/scripts.js"></script>

        
    </body>
</html>