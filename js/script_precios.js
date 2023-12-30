var boton_info1 = document.getElementById("boton_info1")
var boton_info2 = document.getElementById("boton_info2")
var boton_info3 = document.getElementById("boton_info3")

boton_info1.onclick = aviso1
boton_info2.onclick = aviso2
boton_info3.onclick = aviso3

function aviso1() {
    window.alert("Nuestros servidores están colapsados. Vuelve a intentarlo más tarde.")
    boton_info1.disabled = true
    boton_info1.classList.add("deshabilitado");
    boton_info1.style.backgroundColor = "#ddd";
    boton_info1.style.color = "#888";
    boton_info1.style.cursor = "not-allowed";
    boton_info1.style.border = "2px solid #ccc";
}

function aviso2() {
    window.alert("Nuestros servidores están colapsados. Vuelve a intentarlo más tarde.")
    boton_info2.disabled = true
    boton_info2.classList.add("deshabilitado");
    boton_info2.style.backgroundColor = "#ddd";
    boton_info2.style.color = "#888";
    boton_info2.style.cursor = "not-allowed";
    boton_info2.style.border = "2px solid #ccc";
}

function aviso3() {
    window.alert("Nuestros servidores están colapsados. Vuelve a intentarlo más tarde.")
    boton_info3.disabled = true
    boton_info3.classList.add("deshabilitado");
    boton_info3.style.backgroundColor = "#ddd";
    boton_info3.style.color = "#888";
    boton_info3.style.cursor = "not-allowed";
    boton_info3.style.border = "2px solid #ccc";
}