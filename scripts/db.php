<?php
$host = "db.inf.uct.cl";
$user = "vrivera";
$pass = "21799760";
$db = "A2023_vrivera";
$conn = new mysqli($host,$user,$pass,$db);
$conn->set_charset("utf8mb4");
if ($conn-> connect_error) {
    die("Error: " . $conn-> connect_error);
}
?>