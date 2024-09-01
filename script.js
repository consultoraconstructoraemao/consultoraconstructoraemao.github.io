
document.addEventListener('DOMContentLoaded', function () {
    // Ejemplo: Cambio de color del header al hacer scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
function sendWhatsAppMessage() {
    // Obtener los valores de los campos del formulario
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('phone').value;
    var empresa = document.getElementById('company').value;
    var message = document.getElementById('message').value;

    // El número de teléfono con el código de país (sin el signo +)
    var phoneNumber = '51968215184';

    // Mensaje personalizado para enviar en WhatsApp
    var whatsappMessage = 'Hola, soy ' + name + '\n' + 'Mi correo es: ' + email + '\n' +'mi numero es: '+ telefono +'\n' +'soy de: '+ empresa +'\n' +'tengo una consulta: '+ message;

    // Codificar el mensaje para que sea compatible con URL
    var encodedMessage = encodeURIComponent(whatsappMessage);

    // Construir la URL de WhatsApp
    var whatsappURL = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodedMessage;

    // Abrir la URL en una nueva ventana o pestaña
    window.open(whatsappURL, '_blank');
}