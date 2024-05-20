<?php
session_start();

include ('cors.php');
include ('dbconfig.php');

$email = $_POST['email'];
$password = $_POST['password'];

// TODO: Add email validation
// TODO: PASSWORD STRENGTH VALIDATION

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $dbpassword);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO users (email, userpw) VALUES (?, ?)");
    $stmt->execute([$email, $hashedPassword]);

    if ($stmt->rowCount() > 0) {
        $_SESSION['user_email'] = $email;
        echo json_encode(["message" => "User registered and logged in successfully", "success" => true]);
    } else {
        echo json_encode(["message" => "Registration failed", "success" => false]);
    }
} catch (PDOException $e) {
    echo json_encode(["message" => "Registration failed, please contact support@allcardb.com: " . $e->getMessage(), "success" => false]);
}