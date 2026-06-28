<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once '../config.php';

$data = json_decode(file_get_contents('php://input'), true);

$equipment_id = $data['equipment_id'] ?? null;
$user_id = $data['user_id'] ?? null;
$repair_date = $data['repair_date'] ?? null;
$problem_type = trim($data['problem_type'] ?? '');
$problem_desc = trim($data['problem_desc'] ?? '');
$action_taken = trim($data['action_taken'] ?? '');
$technician = trim($data['technician'] ?? '');
$cost = $data['cost'] ?? 0;
$status_after = $data['status_after'] ?? 'Resolved';
$invoice_number = trim($data['invoice_number'] ?? '');

if (!$equipment_id || !$user_id || !$repair_date || !$problem_type || !$problem_desc || !$action_taken) {
    echo json_encode(['success' => false, 'message' => 'Required fields missing']);
    exit;
}

$allowed_status = ['Resolved', 'Needs Follow-up', 'Referred to Vendor'];
if (!in_array($status_after, $allowed_status)) {
    echo json_encode(['success' => false, 'message' => 'Invalid status']);
    exit;
}

try {
    $stmt = $pdo->prepare('INSERT INTO repairs (equipment_id, user_id, repair_date, problem_type, problem_desc, action_taken, technician, cost, status_after, invoice_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    $stmt->execute([$equipment_id, $user_id, $repair_date, $problem_type, $problem_desc, $action_taken, $technician, $cost, $status_after, $invoice_number]);

    echo json_encode([
        'success' => true,
        'message' => 'Repair record added successfully',
        'id' => $pdo->lastInsertId()
    ]);

} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Server error']);
}
?>