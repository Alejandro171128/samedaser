<?php
// Configuración de la conexión a la base de datos
$host = 'localhost';
$dbname = 'samedaser_servicios';
$username = 'root';
$password = '';

try {
    // Crear una nueva conexión PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//    print "Conexion establecida";
} catch (PDOException $e) {
    // Manejar cualquier error de conexión
    echo json_encode(['success' => false, 'error' => "Error al conectar a la base de datos: " . $e->getMessage()]);
    exit; // Asegura que el script se detenga aquí si hay un error
    
}

