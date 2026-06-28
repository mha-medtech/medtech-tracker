<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

require_once '../config.php';

$data = json_decode(file_get_contents('php://input'), true);

$id = $data['id'] ?? null;
$user_id = $data['user_id'] ?? null;

if (!$id || !$user_id) {
    echo json_encode(['success' => false, 'message' => 'ID and User ID required']);
    exit;
}

try {
    $stmt = $pdo->prepare('DELETE FROM repairs WHERE id = ? AND user_id = ?');
    $stmt->execute([$id, $user_id]);

    if ($stmt->rowCount() === 0) {
        echo json_encode(['success' => false, 'message' => 'Record not found or unauthorized']);
        exit;
    }

    echo json_encode(['success' => true, 'message' => 'Repair record deleted successfully']);

} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Server error']);
}
?>