<?php
header("Content-Type: application/json");
require "db.php";

if (!isset($_GET["product_id"])) {
    echo json_encode(["error" => "Missing product_id"]);
    exit;
}

$id = intval($_GET["product_id"]);

$stmt = $conn->prepare("
    SELECT * FROM orders 
    WHERE product_id = ?
    ORDER BY created_at DESC
    LIMIT 10
");
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();

$orders = [];
while ($row = $result->fetch_assoc()) {
    $orders[] = $row;
}

echo json_encode($orders);
?>
