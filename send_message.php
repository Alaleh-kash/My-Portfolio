<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$host = "localhost";
$dbname = "contact_message";
$dbusername = "root";
$dbpassword = "root";

$conn = mysqli_connect($host, $dbusername, $dbpassword, $dbname);

if (!$conn) {
    die("Connection error: " . mysqli_connect_error());
}

$sql = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
$stmt = mysqli_stmt_init($conn);

if (mysqli_stmt_prepare($stmt, $sql)) {
    mysqli_stmt_bind_param($stmt, "sss", $name, $email, $message);

    if (mysqli_stmt_execute($stmt)) {
        echo "Message sent successfully!";
    } else {
        echo "Error: " . mysqli_stmt_error($stmt);
    }
} else {
    echo "Error: " . mysqli_stmt_error($stmt);
}

mysqli_stmt_close($stmt);
mysqli_close($conn);
?>






