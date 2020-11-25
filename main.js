
function mostrarAlerta() {

    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;

    if ( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Nombre en blanco',

          })
    }else{
        Swal.fire({
            icon: 'success',
            title: 'Datos ingresados: ',
            text: 'NOmbre: '+ nombre,
            text: 'Edad: ' + edad,
          })
    } 
     
}

     