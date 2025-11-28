<?php
header("Content-Type: application/json");
require "db.php";

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->product_id) || !isset($data->quantity)) {
    echo json_encode(["error" => "Missing fields"]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO orders (product_id, quantity) VALUES (?, ?)");
$stmt->bind_param("ii", $data->product_id, $data->quantity);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "order_id" => $stmt->insert_id]);
} else {
    echo json_encode(["error" => "Failed to create order"]);
}
?>
