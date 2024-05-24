function validarFormulario() {
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("message").value;

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, complete todos los campos.");
        return false; //Validar que los campos no estén vacíos
    }

    alert('GRACIAS POR ESCRIBIRNOS, ESTAREMOS EN CONTACTO CON USTED.');
    
}

//VALIDACION SUSCRIPCION

function validarSuscripcion(){
    var nombreCompleto = document.getElementById("nombreYapellido").value;
    var correo = document.getElementById("correo").value;
    var correoVerificado = document.getElementById("confirmacionCorreo").value;
    var password = document.getElementById("password1").value;

   // Validar que los campos no estén vacíos
   if (nombreCompleto === '' || correo === '' || correoVerificado === '' || password === '') {
    alert('Por favor, complete todos los campos.');
   
    return;
}

// Expresion regular para validar el nombre y apellido
if (!/^[A-Za-z ]{1,20}$/.test(nombreCompleto)) {
    alert(
      "El nombre no debe contener números y ademas no debe superar los 20 caracteres de longitud."
    );
    return;
}

// Expresión regular para validar el formato de correo electrónico
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Verificar si el correo electrónico es válido
if (emailRegex.test(correo)) {
  alert("El correo electrónico válido: " + correo);
} else {
  
  alert("Correo Invalido. Por favor vuelva a intentar");
  
}

// Validar que el correo y la confirmación del correo sean iguales
if (correo !== correoVerificado) {
    alert('Los correos electrónicos no coinciden.');
    return;
}

// Expresion regular para validar la contaseña
if (!/(?=.*\d)(?=.*[A-Z])/.test(password)) {
    alert('La contraseña debe contener al menos un número y una letra mayúscula.');
    return;
  }

// Si pasa todas las validaciones, se puede enviar el formulario o hacer otra acción
alert('Formulario válido. ¡Gracias por suscribirte!');
}
