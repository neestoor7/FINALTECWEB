function iniciarArrastre(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function permitirSoltar(event) {
    event.preventDefault();
}

function soltar(event) {
    var idImagen = event.dataTransfer.getData("text");
    var elementoDestino = document.getElementById(event.target.id);
    switch (elementoDestino.id) {
        case "hueco1":
            document.getElementById(idImagen).src = "imagenes/bombi1.png";
            break;
        case "hueco2":
            document.getElementById(idImagen).src = "imagenes/bombi2.png";
            break;
        case "hueco3":
            document.getElementById(idImagen).src = "imagenes/bombi3.png";
            break;
        default:
            break;
    }
}