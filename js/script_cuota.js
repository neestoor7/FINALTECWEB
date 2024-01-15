function iniciarArrastre(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function permitirSoltar(event) {
    event.preventDefault();
}

function actualizarInfoEmpresa(empresa, precio, energia) {
    document.getElementById("nombreEmpresa").innerText = empresa;
    document.getElementById("precioEmpresa").innerText = precio;
    document.getElementById("energiaEmpresa").innerText = energia;
}

function soltar(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var bombilla = document.getElementById(data);

    var hueco = event.target;
    if (hueco.className === "hueco" || hueco.className === "imgempresas") {
        if (hueco.className === "imgempresas") {
            hueco = hueco.parentNode;
        }

        switch (hueco.id) {
            case "hueco1":
                bombilla.src = "imagenes/bombi1.png";
                actualizarInfoEmpresa("Sin suministro", "-", "-");
                break;
            case "hueco2":
                bombilla.src = "imagenes/bombi2.png";
                actualizarInfoEmpresa("Empresa Convencional", "60€-80€/mes", "Energía NO Renovable");
                break;
            case "hueco3":
                bombilla.src = "imagenes/bombi3.png";
                actualizarInfoEmpresa("Con Ecolux Energy", "50€/mes", "Energía Renovable");
                break;
        }
    }
}