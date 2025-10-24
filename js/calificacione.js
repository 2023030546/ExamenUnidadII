const tabla = document.getElementById("tabla")
const cuerpoTabla = document.getElementById("cuerpotabla")
const btnMostrar  = document.getElementById("Mostrarlista")
const btnLimpiar  = document.getElementById("Limpiarlista")

function listaAlumnos(){
    fetch('/js/calificaciones.json')
    .then(respuesta => respuesta.json())
    .then(datos => {
        let tabla = document.getElementById('tabla')
        
            datos.forEach(alumno => {
            const fila = document.createElement("tr");

            const celdaId = document.createElement("td");
            celdaId.textContent = alumno.matricula;
            fila.appendChild(celdaId);

            const celdaNombre = document.createElement("td");
            celdaNombre.textContent = alumno.nombre;
            fila.appendChild(celdaNombre);

            const celdaEscuela = document.createElement("td");
            celdaEscuela.textContent = alumno.calificacion;
            fila.appendChild(celdaEscuela);

            cuerpoTabla.appendChild(fila);
        }); 
    }) 

    .catch( error => console.log('Error' + console.error));
}

btnMostrar.addEventListener("click",listaAlumnos)

