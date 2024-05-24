document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    const nombreUsuario = document.getElementById("nombreUsuario");
    const errorMessage = document.getElementById("error-message");

    if (nombreUsuario.value.trim() === ''){
      errorMessage.textContent = 'Este campo no puede estar vacío.';
      errorMessage.style.display = 'block';
      event.preventDefault();
    }else{
      errorMessage.style.display = 'none';
    }
  });

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    const emailUsuario = document.getElementById("emailUsuario");
    const errorMessage2 = document.getElementById("error-message2");

    if (emailUsuario.value.trim() === ''){
      errorMessage2.textContent = 'Este campo no puede estar vacío.';
      errorMessage2.style.display = 'block';
      event.preventDefault();
    }else{
      errorMessage2.style.display = 'none';

    }
  });


document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    const consultaUsuario = document.getElementById("consultaUsuario");
    const errorMessage3 = document.getElementById("error-message3");

    if (consultaUsuario.value.trim() === ''){
      errorMessage3.textContent = 'Este campo no puede estar vacío.';
      errorMessage3.style.display = 'block';
      event.preventDefault();
    }else{
      errorMessage3.style.display = 'none';

    }
  });