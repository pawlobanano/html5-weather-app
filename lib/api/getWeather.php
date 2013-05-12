<?php 


if(isset($_POST['submit']))
{ 
    // Session handler
    $_SESSION['location'] = $_POST['location'];


    // Api logic
    $json_string    = file_get_contents("http://api.wunderground.com/api/39a31a215185cabd/geolookup/conditions/q/$_SESSION[location].json");

    $parsed_json    = json_decode($json_string);
    $city           = $parsed_json->{'location'}->{'city'};
    $temp_c         = $parsed_json->{'current_observation'}->{'temp_c'};

    echo "Obecna temperatura w ${city} to: ${temp_c}";
}