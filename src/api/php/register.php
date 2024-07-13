<?php

session_start();

include ('cors.php');
include ('dbconfig.php');

$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$userInputPassword = $_POST['password'] ?? null;

if ($email && $userInputPassword) {
    $hashedPassword = password_hash($userInputPassword, PASSWORD_DEFAULT);

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $dbusername, $dbpassword);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $conn->prepare("INSERT INTO users (email, userpw) VALUES (?, ?)");
        $success = $stmt->execute([$email, $hashedPassword]);

        if ($success && $stmt->rowCount() > 0) {
            echo json_encode(["message" => "User registered successfully", "success" => true]);
        } else {
            echo json_encode(["message" => "Registration failed, no rows affected", "success" => false]);
        }
    } catch (PDOException $e) {
        echo json_encode(["message" => "Registration failed: " . $e->getMessage(), "success" => false]);
    }
} else {
    echo json_encode(["message" => "Invalid email or password are required", "success" => false]);
}