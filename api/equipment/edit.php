<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, PUT');
header('Access-Control-Allow-Headers: Content-Type');

require_once '../config.php';

$data = json_decode(file_get_contents('php://input'), true);

$id = $data['id'] ?? null;
$user_id = $data['user_id'] ?? null;
$name = trim($data['name'] ?? '');
$location = trim($data['location'] ?? '');
$last_calibration = $data['last_calibration'] ?? null;
$next_calibration = $data['next_calibration'] ?? null;
$status = $data['status'] ?? 'Active';

if (!$id || !$user_id || !$name || !$location || !$last_calibration) {
    echo json_encode(['success' => false, 'message' => 'Required fields are missing']);
    exit;
}

$allowed_status = ['Active', 'Needs Check', 'Out of Service'];
if (!in_array($status, $allowed_status)) {
    echo json_encode(['success' => false, 'message' => 'Invalid status']);
    exit;
}

try {
    $stmt = $pdo->prepare('UPDATE equipment SET name=?, location=?, last_calibration=?, next_calibration=?, status=? WHERE id=? AND user_id=?');
    $stmt->execute([$name, $location, $last_calibration, $next_calibration, $status, $id, $user_id]);

    if ($stmt->rowCount() === 0) {
        echo json_encode(['success' => false, 'message' => 'Equipment not found or unauthorized']);
        exit;
    }

    echo json_encode(['success' => true, 'message' => 'Equipment updated successfully']);

} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Server error']);
}
?>