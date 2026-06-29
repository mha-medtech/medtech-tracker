<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once '../config.php';

$data = json_decode(file_get_contents('php://input'), true);

$user_id = $data['user_id'] ?? null;
$name = trim($data['name'] ?? '');
$clinic_name = trim($data['clinic_name'] ?? '');
$phone = trim($data['phone'] ?? '');
$address = trim($data['address'] ?? '');
$city = trim($data['city'] ?? '');
$new_password = $data['new_password'] ?? '';
$current_password = $data['current_password'] ?? '';

if (!$user_id || !$name || !$clinic_name) {
    echo json_encode(['success' => false, 'message' => 'Required fields missing']);
    exit;
}

try {
    if ($new_password) {
        if (strlen($new_password) < 6) {
            echo json_encode(['success' => false, 'message' => 'Password must be at least 6 characters']);
            exit;
        }

        $stmt = $pdo->prepare('SELECT password FROM users WHERE id = ?');
        $stmt->execute([$user_id]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$user || !password_verify($current_password, $user['password'])) {
            echo json_encode(['success' => false, 'message' => 'Current password is incorrect']);
            exit;
        }

        $hashed = password_hash($new_password, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare('UPDATE users SET name=?, clinic_name=?, phone=?, address=?, city=?, password=? WHERE id=?');
        $stmt->execute([$name, $clinic_name, $phone, $address, $city, $hashed, $user_id]);
    } else {
        $stmt = $pdo->prepare('UPDATE users SET name=?, clinic_name=?, phone=?, address=?, city=? WHERE id=?');
        $stmt->execute([$name, $clinic_name, $phone, $address, $city, $user_id]);
    }

    $stmt = $pdo->prepare('SELECT id, name, email, clinic_name, phone, address, city FROM users WHERE id = ?');
    $stmt->execute([$user_id]);
    $updated = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode(['success' => true, 'message' => 'Profile updated successfully', 'data' => $updated]);

} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Server error']);
}
?>