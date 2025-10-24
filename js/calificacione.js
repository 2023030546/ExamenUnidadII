const tabla = document.getElementById("tabla")
const cuerpoTabla = document.getElementById("cuerpotabla")
const btnMostrar  = document.getElementById("Mostrarlista")
const btnLimpiar  = document.getElementById("Limpiarlista")
const resultado = document.getElementById("resultado")

function listaAlumnos(){
    fetch('calificaciones.json')
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

function calculo() {

    const elementoResultado = document.getElementById("resultado")
    fetch('calificaciones.json')
        .then(respuesta => {
            
            if (!respuesta.ok) {
                throw new Error('Error al cargar los datos: ' + respuesta.statusText);
            }
            return respuesta.json();
        })
        .then(datos => {
            
            let sumaPromedios = 0; 
            let contador = 0;
            let contador_apro = 0;
            let contador_repo = 0;
            
            
            datos.forEach(alumno => {
                if(alumno.calificacion >= 7){
                    contador_apro++;
                    sumaPromedios += alumno.calificacion; 
                    contador++;
                }else{
                    contador_repo++;
                    sumaPromedios += alumno.calificacion; 
                    contador++;
                }
                 

            });

            if (contador > 0) {
                resultado_promedios = sumaPromedios / contador;
            } else {
                resultado_promedios = 0; 
            }


            if (elementoResultado) {
                elementoResultado.innerHTML = `Promedio Grupal: <strong>${resultado_promedios.toFixed(2)}</strong> - Alumnos aprobados -> <strong>${contador_apro}</strong> -Alumnos Reprobados -> <strong>${contador_repo}</strong>`;
            } else {
                console.error("El elemento 'resultado' no se encontró en json");
            }
        })
        .catch(error => {
            console.error('Hubo un error en la operación fetch:', error);
            if (elementoResultado) {
                 elementoResultado.innerHTML = `Error: No se pudo calcular el promedio. (${error.message})`;
            }
        });
}

btnMostrar.addEventListener("click",listaAlumnos)
btnMostrar.addEventListener("click",calculo)

