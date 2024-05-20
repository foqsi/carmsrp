<?php
include ('cors.php');
include ('dbconfig.php');

$username = $_POST['username'];
$password = $_POST['password'];

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

try {
    $query = $conn->prepare("SELECT * FROM users WHERE username = ? AND userpw = ?");
    $query->execute([$username, $password]);
    $user = $query->fetch();

} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}