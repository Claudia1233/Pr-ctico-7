document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btn-ejecutar");
  const resultado = document.getElementById("resultado");
  const select = document.getElementById("opcion");

  boton.addEventListener("click", () => {
    const opcion = select.value;
    resultado.className = "mensaje"; // Reinicia clases
    let mensaje = "";

    switch (opcion) {
      case "INS":
        mensaje = " Seleccionó INSERTAR (INS)";
        resultado.classList.add("ins");
        break;

      case "DEL":
        mensaje = " Seleccionó ELIMINAR (DEL)";
        resultado.classList.add("del");
        break;

      case "UPD":
        mensaje = " Seleccionó ACTUALIZAR (UPD)";
        resultado.classList.add("upd");
        break;

      case "LST":
        mensaje = " Seleccionó LISTAR (LST)";
        resultado.classList.add("lst");
        break;

      case "END":
        mensaje = " Seleccionó FINALIZAR (END)";
        resultado.classList.add("end");
        break;

      default:
        mensaje = " Debes seleccionar una opción válida.";
        resultado.classList.add("error");
        break;
    }

    resultado.textContent = mensaje;
  });
});
