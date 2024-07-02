<?php
include ('cors.php');
include ('dbconfig.php');

header('Content-Type: application/json');

error_reporting(E_ALL);
ini_set('display_errors', '1');

$response = ["success" => false, "message" => ""];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $dbusername, $dbpassword);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $data = json_decode(file_get_contents("php://input"));

    if (!isset($data->email) || !isset($data->password)) {
        $response["message"] = "Email and password are required";
        echo json_encode($response);
        exit;
    }

    error_log("Received email: " . $data->email);
    error_log("Received password: " . $data->password);

    $stmt = $conn->prepare("SELECT * FROM users WHERE email = :email LIMIT 1");
    $stmt->execute(['email' => $data->email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        error_log("Fetched user data: " . print_r($user, true));
    } else {
        error_log("No user found with the email: " . $data->email);
    }

    if (!$user) {
        $response["message"] = "Invalid email or password";
        echo json_encode($response);
        exit;
    }

    if (!isset($user['userpw'])) {
        error_log("Password field 'userpw' not set for the user: " . $data->email);
        $response["message"] = "Invalid email or password";
        echo json_encode($response);
        exit;
    }

    if (!password_verify($data->password, $user['userpw'])) {
        error_log("Password verification failed for the user: " . $data->email);
        $response["message"] = "Invalid email or password";
        echo json_encode($response);
        exit;
    }

    error_log("Login successful for the user: " . $data->email);

    $response["success"] = true;
    $response["message"] = "Login successful";
    echo json_encode($response);

} catch (PDOException $e) {
    error_log("Database error: " . $e->getMessage());
    $response["message"] = "Failed to connect to database: " . $e->getMessage();
    echo json_encode($response);
    exit;
} catch (Exception $e) {
    error_log("Unexpected error: " . $e->getMessage());
    $response["message"] = "An unexpected error occurred: " . $e->getMessage();
    echo json_encode($response);
    exit;
}
