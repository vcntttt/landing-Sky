<?php
    include "localhost.php";
    header('Content-Type: application/json; charset=utf-8');
    $getPlanesQuery = "SELECT * FROM planes";
    $planesResult = $conn->query($getPlanesQuery);

    $planes = [];
    while ($plan = $planesResult->fetch_assoc()) {
        $planes[] = $plan;
    }
    echo json_encode($planes);
    $conn->close();
?>