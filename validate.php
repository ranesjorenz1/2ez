<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $apiKey = '8ac1790588064a88b764b333d8bf895c';
    $input = json_decode(file_get_contents('php://input'), true);
    $phone = urlencode($input['phone']);

    $url = "https://phonevalidation.abstractapi.com/v1/?api_key=$apiKey&phone=$phone";

    $response = file_get_contents($url);
    header('Content-Type: application/json');
    echo $response;
}
