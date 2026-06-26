<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once '../config.php';

$data = json_decode(file_get_contents('php://input'), true);

$user_id = $data['user_id'] ?? null;
$name = trim($data['name'] ?? '');
$location = trim($data['location'] ?? '');
$last_calibration = $data['last_calibration'] ?? null;
$next_calibration = $data['next_calibration'] ?? null;
$status = $data['status'] ?? 'Active';
$purchase_date = $data['purchase_date'] ?? null;
$warranty_expiry = $data['warranty_expiry'] ?? null;

if (!$user_id || !$name || !$location || !$last_calibration) {
    echo json_encode(['success' => false, 'message' => 'Required fields are missing']);
    exit;
}

$allowed_status = ['Active', 'Needs Check', 'Out of Service'];
if (!in_array($status, $allowed_status)) {
    echo json_encode(['success' => false, 'message' => 'Invalid status']);
    exit;
}

try {
$stmt = $pdo->prepare('INSERT INTO equipment (user_id, name, location, last_calibration, next_calibration, status, purchase_date, warranty_expiry) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
$stmt->execute([$user_id, $name, $location, $last_calibration, $next_calibration, $status, $purchase_date, $warranty_expiry]);

    $id = $pdo->lastInsertId();

    echo json_encode([
        'success' => true,
        'message' => 'Equipment added successfully',
        'id' => $id
    ]);

} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Server error']);
}
?>