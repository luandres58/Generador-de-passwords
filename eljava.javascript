function generarContrasena() {
    var palabra = document.getElementById("wordField").value;
    var numero = document.getElementById("numberField").value;

    if (palabra.length <= 6 && /^\d{1,4}$/.test(numero)) {
        var caracteresEspeciales = "!@#$%^&*()";
        var contrasena = palabra + numero + caracteresEspeciales.charAt(0) + caracteresEspeciales.charAt(1);

        contrasena = shuffleString(contrasena);

        document.getElementById("passwordField").value = contrasena;
    } else {
        alert("Por favor, ingresa una palabra de máximo 6 letras y un número de máximo 4 dígitos.");
    }
}

function shuffleString(string) {
    var array = Array.from(string);
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array.join("");
}

function enviarCorreo() {
    var email = document.getElementById("emailField").value;

    // Aquí puedes agregar tu código personalizado para enviar el correo electrónico

    alert("El correo electrónico ha sido enviado a: " + email);

    // Limpiar los campos después de aceptar el alert
    document.getElementById("wordField").value = "";
    document.getElementById("numberField").value = "";
    document.getElementById("passwordField").value = "";
    document.getElementById("emailField").value = "";
}
# Generador-de-passwords
