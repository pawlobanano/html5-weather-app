<?php 

    // generated wunderground API key
	$API_KEY = '39a31a215185cabd';

    // Session handler
    $_SESSION['location'] = $_POST['location'];
    $loc = $_POST['location'];


    // Api logic
    $json_string    = file_get_contents("http://api.wunderground.com/api/$API_KEY/geolookup/forecast/conditions/lang:PL/q/$loc.json");
    $parsed_json    = json_decode($json_string);

    
    // Get information from API query
    $city           = $parsed_json  ->  {'location'}            ->  {'city'};
    $country_name   = $parsed_json  ->  {'location'}            ->  {'country_name'};
    
    $dewpoint_c     = $parsed_json  ->  {'current_observation'} ->  {'dewpoint_c'};
    $elevation      = $parsed_json  ->  {'current_observation'} ->  {'elevation'};
    $feelslike_c    = $parsed_json  ->  {'current_observation'} ->  {'feelslike_c'};
    $icon_url       = $parsed_json  ->  {'current_observation'} ->  {'icon_url'};
    $pressure_mb    = $parsed_json  ->  {'current_observation'} ->  {'pressure_mb'};
    $relative_humidity  = $parsed_json  ->  {'current_observation'} ->  {'relative_humidity'};
    $temp_c         = $parsed_json  ->  {'current_observation'} ->  {'temp_c'};
    $weather        = $parsed_json  ->  {'current_observation'} ->  {'weather'};    
    $visibility_km  = $parsed_json  ->  {'current_observation'} ->  {'visibility_km'};
    $fcttext_metric = $parsed_json 	-> 	{'forecast'} 			-> 	{'forecastday'} 	-> {'fcttext_metric'};
    
    //$weather_data = array( $temp_c );
    
    //echo json_encode( $weather_data );
    
    
    
    $arr = array (
    	'city' 			=> $city,
    	'temp_c' 		=> $temp_c,
    	'desc'			=> $weather,
    	'feelslike_c'	=> $feelslike_c,
    	'fcttext_metric'=> $fcttext_metric,
    	'pressure_mb'	=> $pressure_mb
    );
    //echo json_encode($arr); <!--  tutaj zwraca do ajaxa, odkomentować by dziłało w panelu apki -->
    
    
    $json_string2    = file_get_contents("http://api.wunderground.com/api/39a31a215185cabd/geolookup/forecast/conditions/lang:PL/q/wroclaw.json");
    $parsed_json2 = json_decode($json_string2, true);
    
    
    print_r( $parsed_json2['forecast'] );
    //echo $parsed_json2['forecast']['forecastday'];
    
    
    //echo json_encode( $temp_c );
    