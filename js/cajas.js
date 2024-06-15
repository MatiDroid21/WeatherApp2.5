$(document).ready(function() {
    let temperaturaValor = $('#temperatura-valor');
    let temperaturaDescripcion = $('#temperatura-descripcion');
    let ubicacion = $('#ubicacion');
    let iconoAnimado = $('#icono-animado');
    let vientoVelocidad = $('#viento-velocidad');
    let velocidad = $('#velocidad');
    let alertContainer = $('#alert-container');
    let paisImg = $('#paisImg');
    let tempMin = $('#tempMin');
    let tempMax = $('#tempMax');
    
    // Ocultar elementos iniciales con animación de desvanecimiento
    temperaturaValor.fadeOut();
    temperaturaDescripcion.fadeOut();
    ubicacion.fadeOut();
    iconoAnimado.fadeOut();
    vientoVelocidad.fadeOut();
    tempMin.fadeOut();
    tempMax.fadeOut();
    velocidad.fadeOut();
    paisImg.fadeOut();
    
    let searchBar = $('#search-bar');
    
    searchBar.on('focus', function() {
      $(this).val('');
      temperaturaValor.fadeOut();
      temperaturaDescripcion.fadeOut();
      ubicacion.fadeOut();
      iconoAnimado.fadeOut();
      tempMin.fadeOut();
      tempMax.fadeOut();
      vientoVelocidad.fadeOut();
      velocidad.fadeOut();
      paisImg.fadeOut();
    });
    
    $('#search-button').click(function() {
      let location = searchBar.val().trim();
      
      if (location === '') {
        showAlert('danger', 'Por favor, ingresa una ubicación.');
        return; // Si la caja de texto está vacía, no hacer nada
      } 
      
      // Realizar la búsqueda y mostrar los elementos con animación de desvanecimiento
      // Aquí debes agregar el código para obtener los datos de la API y actualizar los elementos con los datos correspondientes
      
      temperaturaValor.fadeIn();
      temperaturaDescripcion.fadeIn();
      ubicacion.fadeIn();
      iconoAnimado.fadeIn();
      tempMin.fadeIn();
      tempMax.fadeIn();
      vientoVelocidad.fadeIn();
      velocidad.fadeIn();
      paisImg.fadeIn();

      // Ocultar la alerta de Bootstrap si hay un valor ingresado
    hideAlert();
    });

    function showAlert(type, message) {
        // Crear la estructura HTML de la alerta de Bootstrap
        let alertHTML = `
          <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
        
        // Insertar la alerta en el contenedor
        alertContainer.html(alertHTML);
      }
      
      function hideAlert() {
        // Vaciar el contenido del contenedor para ocultar la alerta
        alertContainer.empty();
      }
  });
  