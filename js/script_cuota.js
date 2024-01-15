function iniciarArrastre(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function permitirSoltar(event) {
    event.preventDefault(); // Permite que los elementos se puedan soltar en los huecos
}

function soltar(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var bombilla = document.getElementById(data);

    // Asegúrate de que la acción de soltar ocurra en un hueco y no en una imagen u otro elemento
    var hueco = event.target;
    if (hueco.className === "hueco" || hueco.className === "imgempresas") {
        // Si se suelta sobre una imagen dentro del hueco, selecciona el contenedor hueco
        if (hueco.className === "imgempresas") {
            hueco = hueco.parentNode;
        }

        switch(hueco.id) {
            case "hueco1":
                bombilla.src = "imagenes/bombi1.png"; // Se queda igual
                break;
            case "hueco2":
                bombilla.src = "imagenes/bombi2.png"; // Cambia a bombi2.png
                break;
            case "hueco3":
                bombilla.src = "imagenes/bombi3.png"; // Cambia a bombi3.png
                break;
        }
    }
}
