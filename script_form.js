document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var tipoServicio = document.getElementById('tipoServicio').value;
    var consumo = document.getElementById('consumo').value;
    var preferenciaContacto = document.querySelector('input[name="preferenciaContacto"]:checked').value;
    var suscripcionNoticias = document.querySelector('input[name="noticias"]').checked;
    var comentarios = document.getElementById('comentarios').value;

    // Cálculo de la cuota según el tipo de servicio
    var precioPorKWh;
    switch (tipoServicio) {
        case 'residencial':
            precioPorKWh = 0.12;
            break;
        case 'comercial':
            precioPorKWh = 0.15;
            break;
        case 'industrial':
            precioPorKWh = 0.20;
            break;
        default:
            precioPorKWh = 0.15; // Precio por defecto
    }

    var cuota = consumo * precioPorKWh;

    // Crear mensaje de respuesta
    var respuesta = 'Hola ' + nombre + ',\n';
    respuesta += 'Tu cuota estimada para un servicio ' + tipoServicio + ' es: ' + cuota.toFixed(2) + ' Euros.\n';
    respuesta += 'Preferencia de contacto: ' + preferenciaContacto + '\n';
    respuesta += suscripcionNoticias ? 'Gracias por suscribirte a nuestro boletín.\n' : '';
    respuesta += 'Tus comentarios: ' + comentarios;

    // Mostrar el resultado
    document.getElementById('resultadoCuota').innerText = respuesta;
});
