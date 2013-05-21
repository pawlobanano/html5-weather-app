<?php 

    // generated wunderground API key
	$API_KEY = '39a31a215185cabd';

    // Session handler
    $_SESSION['location'] = $_POST['location'];
    $loc = $_POST['location'];


    // Api logic
    $json_string    = file_get_contents("http://api.wunderground.com/api/$API_KEY/geolookup/conditions/q/$loc.json");
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
    
    // Testing string
    echo "Obecna temperatura w ${city} to: ${temp_c}";