<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

require_once '../config.php';

$equipment_id = $_GET['equipment_id'] ?? null;
$user_id = $_GET['user_id'] ?? null;

if (!$equipment_id || !$user_id) {
    echo json_encode(['success' => false, 'message' => 'Required fields missing']);
    exit;
}

try {
    $stmt = $pdo->prepare('SELECT * FROM repairs WHERE equipment_id = ? AND user_id = ? ORDER BY repair_date DESC');
    $stmt->execute([$equipment_id, $user_id]);
    $repairs = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(['success' => true, 'data' => $repairs]);

} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Server error']);
}
?>