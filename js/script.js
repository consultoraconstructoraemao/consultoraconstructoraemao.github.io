
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

document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario estándar

    const formData = new FormData(this);
    console.log("formulario enviado")
    fetch('https://formspree.io/f/mkgwegwb', { // Reemplaza con tu URL de Formspree
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    }).then(response => {
        if (response.ok) {
            alert('Gracias por tu consulta. Nos pondremos en contacto contigo pronto.');
            document.getElementById('consultaForm').reset(); // Resetea el formulario
            var consultaModal = bootstrap.Modal.getInstance(document.getElementById('consultaModal'));
            consultaModal.hide(); // Cierra el modal
        } else {
            alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
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
type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EMAO Consultora Constructora",
  "url": "https://www.example.com",
  "logo": "https://www.example.com/assets/images/Logo emao.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+51 968215184",
    "contactType": "Customer Service"
  }
}

