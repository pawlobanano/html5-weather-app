<?php 


	
    // Session handler
    $_SESSION['location'] = $_POST['location'];
    
    $loc = $_POST['location'];


    // Api logic
    $json_string    = file_get_contents("http://api.wunderground.com/api/39a31a215185cabd/geolookup/conditions/q/$loc.json");

    $parsed_json    = json_decode($json_string);


    // Get information from API query
    $city           = $parsed_json  ->  {'location'}            ->  {'city'};
    $temp_c         = $parsed_json  ->  {'current_observation'} ->  {'temp_c'};
    $icon_url       = $parsed_json  ->  {'current_observation'} ->  {'icon_url'}
    $feelslike_c    = $parsed_json  ->  {'feelslike_c'}         ->  {'feelslike_c'}


    echo "Obecna temperatura w ${city} to: ${temp_c}";
    
    //echo "asdasd as asd jaskld from WEATHER API";