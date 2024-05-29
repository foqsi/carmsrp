<?php
session_start();

include ('cors.php');
include ('dbconfig.php');

$email = isset($_POST['email']) ? $_POST['email'] : null;
$password = isset($_POST['password']) ? $_POST['password'] : null;
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

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
