function calculoCuota() {
    var tipoServicio = document.getElementById('tipoServicioCalculo').value;
    var consumo = document.getElementById('consumoCalculo').value;
    var precioPorKWh;

    // Cálculo de la cuota según el tipo de servicio
    if (tipoServicio === 'residencial') {
        precioPorKWh = 0.12;
    } else if (tipoServicio === 'comercial') {
        precioPorKWh = 0.15;
    } else if (tipoServicio === 'industrial') {
        precioPorKWh = 0.20;
    } else {
        precioPorKWh = 0.15; // Precio por defecto
    }

    var cuota = consumo * precioPorKWh;

    // Mostrar el resultado
    document.getElementById('resultadoCuota').innerText = 'Tu cuota estimada es: ' + cuota.toFixed(2) + ' Euros';
}
