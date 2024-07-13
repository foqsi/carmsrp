<?php
include ('cors.php');
include ('dbconfig.php');

header('Content-Type: application/json');

$response = ["success" => false, "data" => [], "message" => ""];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $dbusername, $dbpassword);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $conn->prepare("SELECT id, gender FROM genders");
    $stmt->execute();
    $genders = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = $conn->prepare("SELECT id, country FROM countries");
    $stmt->execute();
    $countries = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $response["success"] = true;
    $response["data"] = ["genders" => $genders, "countries" => $countries];
} catch (PDOException $e) {
    $response["message"] = "Failed to connect to database: " . $e->getMessage();
}

echo json_encode($response);