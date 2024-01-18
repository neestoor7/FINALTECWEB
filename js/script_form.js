function calculoCuota() {
    var tipoServicio = document.getElementById('tipoServicioCalculo').value;
    var consumo = document.getElementById('consumoCalculo').value;
    var precioPorKWh;

    if (tipoServicio === 'residencial') {
        precioPorKWh = 0.12;
    } else if (tipoServicio === 'comercial') {
        precioPorKWh = 0.15;
    } else if (tipoServicio === 'industrial') {
        precioPorKWh = 0.20;
    } else {
        precioPorKWh = 0.15;
    }

    var cuota = consumo * precioPorKWh;

    document.getElementById('resultadoCuota').innerText = 'Tu cuota estimada es: ' + cuota.toFixed(2) + ' Euros';
}
