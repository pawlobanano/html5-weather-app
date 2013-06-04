<?php 

    // generated wunderground API key
	$API_KEY = '39a31a215185cabd';

    // Session handler
    $_SESSION['location'] = $_POST['location'];
    $loc = $_POST['location'];

    // Api logic
    $json_string    = file_get_contents("http://api.wunderground.com/api/$API_KEY/geolookup/forecast/conditions/lang:PL/q/$loc.json");
    $parsed_json    = json_decode($json_string, true);

    // Get information from API query
    $city               = $parsed_json['location']['city'];
    $temp_c             = $parsed_json['current_observation']['temp_c'];
    $weather            = $parsed_json['current_observation']['weather'];
    $feelslike_c        = $parsed_json['current_observation']['feelslike_c'];
    $pressure_mb        = $parsed_json['current_observation']['pressure_mb'];
    $fcttext_metric     = $parsed_json['forecast']['txt_forecast']['forecastday']['0']['fcttext_metric'];
    
    $tomorrow_day       = $parsed_json['forecast']['simpleforecast']['forecastday']['1']['date']['day'];
    $tomorrow_month     = $parsed_json['forecast']['simpleforecast']['forecastday']['1']['date']['month'];
    $tomorrow_year      = $parsed_json['forecast']['simpleforecast']['forecastday']['1']['date']['year'];
    $tomorrow_high_celsius      = $parsed_json['forecast']['simpleforecast']['forecastday']['1']['high']['celsius'];
    $tomorrow_low_celsius       = $parsed_json['forecast']['simpleforecast']['forecastday']['1']['low']['celsius'];
    $tomorrow_conditions        = $parsed_json['forecast']['simpleforecast']['forecastday']['1']['conditions'];
    $tomorrow_qpf_allday        = $parsed_json['forecast']['simpleforecast']['forecastday']['1']['qpf_allday']['mm'];
    $tomorrow_avehumidity       = $parsed_json['forecast']['simpleforecast']['forecastday']['1']['avehumidity'];
    $tomorrow_fcttext_metric    = $parsed_json['forecast']['txt_forecast']['forecastday']['1']['fcttext_metric'];

    $dayAfterTomorrow_day               = $parsed_json['forecast']['simpleforecast']['forecastday']['2']['date']['day'];
    $dayAfterTomorrow_month             = $parsed_json['forecast']['simpleforecast']['forecastday']['2']['date']['month'];
    $dayAfterTomorrow_year              = $parsed_json['forecast']['simpleforecast']['forecastday']['2']['date']['year'];
    $dayAfterTomorrow_high_celsius      = $parsed_json['forecast']['simpleforecast']['forecastday']['2']['high']['celsius'];
    $dayAfterTomorrow_low_celsius       = $parsed_json['forecast']['simpleforecast']['forecastday']['2']['low']['celsius'];
    $dayAfterTomorrow_conditions        = $parsed_json['forecast']['simpleforecast']['forecastday']['2']['conditions'];
    $dayAfterTomorrow_qpf_allday        = $parsed_json['forecast']['simpleforecast']['forecastday']['2']['qpf_allday']['mm'];
    $dayAfterTomorrow_avehumidity       = $parsed_json['forecast']['simpleforecast']['forecastday']['2']['avehumidity'];
    $dayAfterTomorrow_fcttext_metric    = $parsed_json['forecast']['txt_forecast']['forecastday']['2']['fcttext_metric'];
    
    $twoDaysAfterTomorrow_day               = $parsed_json['forecast']['simpleforecast']['forecastday']['3']['date']['day'];
    $twoDaysAfterTomorrow_month             = $parsed_json['forecast']['simpleforecast']['forecastday']['3']['date']['month'];
    $twoDaysAfterTomorrow_year              = $parsed_json['forecast']['simpleforecast']['forecastday']['3']['date']['year'];
    $twoDaysAfterTomorrow_high_celsius      = $parsed_json['forecast']['simpleforecast']['forecastday']['3']['high']['celsius'];
    $twoDaysAfterTomorrow_low_celsius       = $parsed_json['forecast']['simpleforecast']['forecastday']['3']['low']['celsius'];
    $twoDaysAfterTomorrow_conditions        = $parsed_json['forecast']['simpleforecast']['forecastday']['3']['conditions'];
    $twoDaysAfterTomorrow_qpf_allday        = $parsed_json['forecast']['simpleforecast']['forecastday']['3']['qpf_allday']['mm'];
    $twoDaysAfterTomorrow_avehumidity       = $parsed_json['forecast']['simpleforecast']['forecastday']['3']['avehumidity'];
    $twoDaysAfterTomorrow_fcttext_metric    = $parsed_json['forecast']['txt_forecast']['forecastday']['3']['fcttext_metric'];

    $arr = array (
    	'city' 			   => $city,
    	'temp_c' 		   => $temp_c,
    	'desc'			   => $weather,
    	'feelslike_c'      => $feelslike_c,
    	'fcttext_metric'   => $fcttext_metric,
        'pressure_mb'      => $pressure_mb,

        'tomorrow_day'              => $tomorrow_day,
        'tomorrow_month'            => $tomorrow_month,
        'tomorrow_year'             => $tomorrow_year,
        'tomorrow_high_celsius'     => $tomorrow_high_celsius,
        'tomorrow_low_celsius'      => $tomorrow_low_celsius,
        'tomorrow_conditions'       => $tomorrow_conditions,
        'tomorrow_qpf_allday'       => $tomorrow_qpf_allday,
        'tomorrow_avehumidity'      => $tomorrow_avehumidity,
        'tomorrow_fcttext_metric'   => $tomorrow_fcttext_metric,

        'dayAfterTomorrow_day'              => $dayAfterTomorrow_day,
        'dayAfterTomorrow_month'            => $dayAfterTomorrow_month,
        'dayAfterTomorrow_year'             => $dayAfterTomorrow_year,
        'dayAfterTomorrow_high_celsius'     => $dayAfterTomorrow_high_celsius,
        'dayAfterTomorrow_low_celsius'      => $dayAfterTomorrow_low_celsius,
        'dayAfterTomorrow_conditions'       => $dayAfterTomorrow_conditions,
        'dayAfterTomorrow_qpf_allday'       => $dayAfterTomorrow_qpf_allday,
        'dayAfterTomorrow_avehumidity'      => $dayAfterTomorrow_avehumidity,
        'dayAfterTomorrow_fcttext_metric'   => $dayAfterTomorrow_fcttext_metric,

        'twoDaysAfterTomorrow_day'              => $twoDaysAfterTomorrow_day,
        'twoDaysAfterTomorrow_month'            => $twoDaysAfterTomorrow_month,
        'twoDaysAfterTomorrow_year'             => $twoDaysAfterTomorrow_year,
        'twoDaysAfterTomorrow_high_celsius'     => $twoDaysAfterTomorrow_high_celsius,
        'twoDaysAfterTomorrow_low_celsius'      => $twoDaysAfterTomorrow_low_celsius,
        'twoDaysAfterTomorrow_conditions'       => $twoDaysAfterTomorrow_conditions,
        'twoDaysAfterTomorrow_qpf_allday'       => $twoDaysAfterTomorrow_qpf_allday,
        'twoDaysAfterTomorrow_avehumidity'      => $twoDaysAfterTomorrow_avehumidity,
        'twoDaysAfterTomorrow_fcttext_metric'   => $twoDaysAfterTomorrow_fcttext_metric
    );
    echo json_encode($arr); //<!--  tutaj zwraca do ajaxa, odkomentować by dziłało w panelu apki -->
    
    
    //$json_string2    = file_get_contents("http://api.wunderground.com/api/39a31a215185cabd/geolookup/forecast/conditions/lang:PL/q/wroclaw.json");
    //$parsed_json2 = json_decode($json_string2, true);
    
    
    //print_r( $parsed_json2['forecast'] );
    //echo $parsed_json2['forecast']['forecastday'];
    
    
    //echo json_encode( $temp_c );   