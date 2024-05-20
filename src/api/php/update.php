<?php
include ('cors.php');
include ('dbconfig.php');

$userId = $_SESSION['userId'];
$name = $_POST['name'];
$age = $_POST['age'];
$birthday = $_POST['birthday'];

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

try {
    $query = "UPDATE users SET name = ?, age = ?, birthday = ? WHERE id = ?";
    $stmt = $conn->prepare($query);
    $stmt->execute([$name, $age, $birthday, $userId]);
    echo "User updated successfully!";
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}