<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

date_default_timezone_set('America/Bogota'); // Establecer la zona horaria

// Incluir el archivo de conexión
require 'conexyon.php';

header('Content-Type: application/json'); // Asegura que la respuesta sea JSON

try {
    // Recibir los datos JSON enviados desde JavaScript
    $data = json_decode(file_get_contents('php://input'), true);

    // Verificar que todos los datos están presentes
    if (isset($data['nombre'], $data['celular'], $data['email'], $data['detalles'])) {
        $nombre = $data['nombre'];
        $celular = $data['celular'];
        $email = $data['email'];
        $detalles = $data['detalles'];
        $fecha_registro = date('Y-m-d H:i:s'); // Fecha y hora actual del servidor

        // Preparar la consulta SQL
        $stmt = $pdo->prepare("INSERT INTO pqrsf (nombre, celular, email, detalles, fecha_registro) VALUES (:nombre, :celular, :email, :detalles, :fecha_registro)");
        
        // Ejecutar la consulta con los valores capturados
        $stmt->execute([
            ':nombre' => $nombre,
            ':celular' => $celular,
            ':email' => $email,
            ':detalles' => $detalles,
            ':fecha_registro' => $fecha_registro
        ]);

        // Responder a la petición
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Datos incompletos']);
    }
} catch (PDOException $e) {
    // Manejar cualquier error
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
