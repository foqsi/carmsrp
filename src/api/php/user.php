<?php
session_set_cookie_params([
    'lifetime' => 0, // or a specific lifetime
    'path' => '/',
    'domain' => $_SERVER['HTTP_HOST'], // adjust if necessary
    'secure' => false, // set to true if using HTTPS
    'httponly' => true,
    'samesite' => 'Lax' // or 'None' if needed, but consider CSRF implications
]);
if (!isset($_SESSION)) {
    session_start();
    error_log("Session started at " . microtime(true) . " with ID: " . session_id() . " in file: " . __FILE__);
}

// Log the session ID
error_log("Session started with ID: " . session_id());

include ('cors.php');
include ('dbconfig.php');

header('Content-Type: application/json');
error_reporting(E_ALL);
ini_set('display_errors', '1');

$response = ["success" => false, "message" => "", "session_id" => session_id()];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $dbusername, $dbpassword);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Handle login
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents("php://input"));
        if (!isset($data->email) || !isset($data->password)) {
            $response["message"] = "Email and password are required";
            echo json_encode($response);
            exit;
        }

        $stmt = $conn->prepare("SELECT * FROM users WHERE email = :email LIMIT 1");
        $stmt->execute(['email' => $data->email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$user || !password_verify($data->password, $user['userpw'])) {
            $response["message"] = "Invalid email or password";
            echo json_encode($response);
            error_log("$user");
            exit;
        }

        $_SESSION['user_id'] = $user['id'];
        error_log("User logged in with ID: " . $user['id'] . " using session ID: " . session_id());
        $response["success"] = true;
        $response["message"] = "Login successful";
        echo json_encode($response);
        exit;
    }

    // Fetch or update user data
    if (!isset($_SESSION['user_id'])) {
        $response["message"] = "User not authenticated";
        echo json_encode($response);
        exit;
    }

    $user_id = $_SESSION['user_id'];

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $stmt = $conn->prepare("SELECT email, fname, lname, gender_id, dob, country_id, mobile_number FROM users WHERE id = :id LIMIT 1");
        $stmt->execute(['id' => $user_id]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            $response["success"] = true;
            $response["data"] = $user;
        } else {
            $response["message"] = "User not found";
        }
        echo json_encode($response);
        exit;
    }

    if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        $data = json_decode(file_get_contents("php://input"));
        if (!isset($data->email)) {
            $response["message"] = "Email field is required";
            echo json_encode($response);
            exit;
        }

        $stmt = $conn->prepare("UPDATE users SET email = :email, fname = :fname, lname = :lname, gender_id = :gender_id, dob = :dob, country_id = :country_id, mobile_number = :mobile_number WHERE id = :id");
        $success = $stmt->execute([
            'email' => $data->email,
            'fname' => $data->fname,
            'lname' => $data->lname,
            'gender_id' => $data->gender_id,
            'dob' => $data->dob,
            'country_id' => $data->country_id,
            'mobile_number' => $data->mobile_number,
            'id' => $user_id
        ]);

        if ($success) {
            $response["success"] = true;
            $response["message"] = "Profile updated successfully";
        } else {
            $response["message"] = "Failed to update profile";
        }
        echo json_encode($response);
        exit;
    }

} catch (PDOException $e) {
    $response["message"] = "Failed to connect to database: " . $e->getMessage();
    echo json_encode($response);
    exit;
}
