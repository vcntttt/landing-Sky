<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "skyinventory";
$conn = new mysqli($host,$user,$pass,$db);
$conn->set_charset("utf8mb4");
if ($conn-> connect_error) {
    die("Error: " . $conn-> connect_error);
}
?>