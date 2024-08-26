function panel_administrador(){

    const content = `
    <div class="container">
    <h1>PANEL DE ADMINISTRACION</h2><br>
        <!-- Logo de la empresa -->
        <img src=${logo} width=${ancho} height=${alto} alt="Logo de la Empresa" class="logo">
        ${contenedor_notificacion()}
        <h2>Ingresa la contraseña</h2><br>
        <!-- Botones de servicios -->
            ${input_contrasenia()}
        <div class="row">
        <div class="col-12 col-md-12">
                <button class="btn btn-custom" onclick="validacion_admin()">Ingresar al panel</button>
            </div>
    </div>
`;
document.getElementById("content").innerHTML = content;
}

function validacion_admin(){
    const contra = document.getElementById('pass').value;

    fetch('validar.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contra)
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
            menu_principal_admin();
        } else {
            alert('Error al enviar el formulario: ' + data.error);
            document.getElementById('notificacion').className= 'alert alert-danger';
              document.getElementById('notificacion').textContent = 'Error al enviar el formulario: ' + data.error;
              document.getElementById('notificacion').style.display = 'block';
              document.getElementById('notificacion').style.visibility = 'visible';
              document.getElementById('pass').value = '';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema con la solicitud: ' + error.message);
        document.getElementById('notificacion').className= 'alert alert-danger';
              document.getElementById('notificacion').textContent = 'Error al enviar el formulario: ' + data.error;
              document.getElementById('notificacion').style.display = 'block';
              document.getElementById('notificacion').style.visibility = 'visible';
              resetForm();
    });
}