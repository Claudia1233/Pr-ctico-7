document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btn-ejecutar");
  const resultado = document.getElementById("resultado");
  const select = document.getElementById("opcion");

  boton.addEventListener("click", () => {
    const opcion = select.value;
    resultado.className = "mensaje"; // resetea estilos
    let mensaje = "";

    switch (opcion) {
      case "INS":
        mensaje = "Seleccionó INSERTAR";
        resultado.classList.add("ins");
        break;

      case "DEL":
        mensaje = "Seleccionó ELIMINAR";
        resultado.classList.add("del");
        break;

      case "UPD":
        mensaje = "Seleccionó ACTUALIZAR";
        resultado.classList.add("upd");
        break;

      case "LST":
        mensaje = "Seleccionó LISTAR";
        resultado.classList.add("lst");
        break;

      case "END":
        mensaje = "Seleccionó SALIR";
        resultado.classList.add("end");
        break;

      default:
        mensaje = "Debe seleccionar una opción válida.";
        resultado.classList.add("error");
        break;
    }

    resultado.textContent = mensaje;
  });
});
