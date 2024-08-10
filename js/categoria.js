function pintarNombre() {
  document.getElementById("saludo").innerHTML += localStorage.getItem("name");
}

pintarNombre()

const temas = [
  "cultura general", "cultura del perú", "matematicas"
]