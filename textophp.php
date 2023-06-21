<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $password = $_POST["password"];
    $email = $_POST["email"];

    $subject = "Contraseña Generada";
    $message = "La contraseña generada es: " . $password;
    $headers = "From: tu_correo@example.com"; // Coloca aquí tu dirección de correo

    if (mail($email, $subject, $message, $headers)) {
        echo "¡Correo enviado con éxito a $email!";
    } else {
        echo "Error al enviar el correo.";
    }
}
?>
# Generador-de-passwords
