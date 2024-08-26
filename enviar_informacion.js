//ENVIO DE FORMULARIOS A BASE DE DATOS................

function enviarFormulario() {   //Formulario de PQRSF
    const nombre = document.getElementById('nombre').value;
    const celular = document.getElementById('celular').value;
    const email = document.getElementById('email').value;
    const detalles = document.getElementById('detalles').value;
  
    const datos = {
        nombre: nombre,
        celular: celular,
        email: email,
        detalles: detalles
    };
  
    fetch('guardar_pqrsf.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Sin conexión al servidor');
        }
        return response.json();
    })
    .then(data => {
        if(data.success) {
            alert('Formulario enviado correctamente.');
            document.getElementById('notificacion').textContent = 'Formulario enviado correctamente';
            document.getElementById('notificacion').style.display = 'block';
            document.getElementById('notificacion').style.visibility = 'visible';
            resetForm();
        } else {
            alert('Error al enviar el formulario: ' + data.error);
            document.getElementById('notificacion').className= 'alert alert-danger';
              document.getElementById('notificacion').textContent = 'Error al enviar el formulario: ' + data.error;
              document.getElementById('notificacion').style.display = 'block';
              document.getElementById('notificacion').style.visibility = 'visible';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema con la solicitud: ' + error.message);
        document.getElementById('notificacion').className= 'alert alert-danger';
              document.getElementById('notificacion').textContent = 'Error al enviar el formulario: ' + data.error;
              document.getElementById('notificacion').style.display = 'block';
              document.getElementById('notificacion').style.visibility = 'visible';
    });
  }
  
  function agendar_servicio_unidades_portatiles_form(){
      const nombre = document.getElementById('nombre').value;
      const celular = document.getElementById('celular').value;
      const direccion = document.getElementById('direccion').value;
      const email = document.getElementById('email').value;
      const cantidad = document.getElementById('cantidad').value;
      const fecha_servicio = document.getElementById('fecha').value;
  
      const datos = {
          nombre: nombre,
          celular: celular,
          direccion: direccion,
          email: email,
          cantidad: cantidad,
          fecha_servicio: fecha_servicio
      };
  
      fetch('guardar_servicio_unidades_portatiles.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(datos)
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('No hay conexión con el servidor');
          }
          return response.json();
      })
      .then(data => {
          if (data.success) {
              //alert('Formulario enviado correctamente.');
              // Llamar a la función para limpiar los campos
              document.getElementById('nombre').value = '';
              document.getElementById('celular').value = '';
              document.getElementById('direccion').value = '';
              document.getElementById('email').value = '';
              document.getElementById('cantidad').value = '';
              document.getElementById('fecha').value = '';
              document.getElementById('notificacion').textContent = 'Formulario enviado correctamente';
              document.getElementById('notificacion').style.display = 'block';
              document.getElementById('notificacion').style.visibility = 'visible';
  
          } else {
              document.getElementById('notificacion').className= 'alert alert-danger';
              document.getElementById('notificacion').textContent = 'Error al enviar el formulario: ' + data.error;
              document.getElementById('notificacion').style.display = 'block';
              document.getElementById('notificacion').style.visibility = 'visible';
              //alert('Error al enviar el formulario: ' + data.error);
          }
      })
      .catch(error => {
          document.getElementById('notificacion').className= 'alert alert-danger';
          document.getElementById('notificacion').textContent = 'Hubo un problema con la solicitud: ' + error.message;
          console.error('Error:', error);
          //alert('Hubo un problema con la solicitud: ' + error.message);
      });
  }
  
  function agendar_limpieza_unidades_portatiles_form(){
      const nombre = document.getElementById('nombre').value;
      const celular = document.getElementById('celular').value;
      const email = document.getElementById('email').value;
      const cantidad = document.getElementById('cantidad').value;
      const fecha_servicio = document.getElementById('fecha').value;
  
      const datos = {
          nombre: nombre,
          celular: celular,
          email: email,
          cantidad: cantidad,
          fecha_servicio: fecha_servicio
      };
  
      fetch('guardar_limpieza_unidades_portatiles.php', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(datos)
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Sin conexión al servidor');
          }
          return response.json();
      })
      .then(data => {
          if (data.success) {
              alert('Formulario enviado correctamente.');
              // Llamar a la función para limpiar los campos
              document.getElementById('nombre').value = '';
              document.getElementById('celular').value = '';
              document.getElementById('email').value = '';
              document.getElementById('cantidad').value = '';
              document.getElementById('fecha').value = '';
              document.getElementById('notificacion').textContent = 'Formulario enviado correctamente';
              document.getElementById('notificacion').style.display = 'block';
              document.getElementById('notificacion').style.visibility = 'visible';
  
          } else {
              document.getElementById('notificacion').className= 'alert alert-danger';
              document.getElementById('notificacion').textContent = 'Error al enviar el formulario: ' + data.error;
              document.getElementById('notificacion').style.display = 'block';
              document.getElementById('notificacion').style.visibility = 'visible';
              alert('Error al enviar el formulario: ' + data.error);
          }
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Hubo un problema con la solicitud: ' + error.message);
          document.getElementById('notificacion').className= 'alert alert-danger';
              document.getElementById('notificacion').textContent = 'Error al enviar el formulario: ' + data.error;
              document.getElementById('notificacion').style.display = 'block';
              document.getElementById('notificacion').style.visibility = 'visible';
      });
  }