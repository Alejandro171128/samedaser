<?php
// Mostrar errores para depuración
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
    if (isset($data)) {
        $contra = $data;
        if($contra=="4dm1n1str4d0r@"){
            // Responder a la petición
            echo json_encode(['success' => true]);
        }else{
            echo json_encode(['success' => false, 'error' => 'Credenciales incorrectas']);
        }
    } else {
        echo json_encode(['success' => false, 'error' => 'Datos incompletos']);
    }
} catch (PDOException $e) {
    // Manejar cualquier error
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}
