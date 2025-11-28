<?php
header("Content-Type: application/json");
require "db.php";

if (!isset($_GET["id"])) {
    echo json_encode(["error" => "Missing id"]);
    exit;
}

$id = intval($_GET["id"]);
$stmt = $conn->prepare("SELECT * FROM products WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();

echo json_encode($result->fetch_assoc());
?>
