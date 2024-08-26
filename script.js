const logo = "logo.jpg";
const ancho = "220 px";
const alto = "180 px";

function generatePageContent() {
  const content = `
        <div class="container">
        <h1>NUESTROS SERVICIOS</h2><br>
            <!-- Logo de la empresa -->
            <img src=${logo} width=${ancho} height=${alto} alt="Logo de la Empresa" class="logo">

            <!-- Botones de servicios -->
            <div class="row">
                <div class="col-12 col-md-6">
                    <button class="btn btn-custom" onclick="alqui_uni_port()">Alquiler de unidades portátiles</button>
                </div>
                <div class="col-12 col-md-6">
                    <button class="btn btn-custom" onclick="lim_pozo()">Limpieza de pozo</button>
                </div>
                
            </div>
            <div class="row">
            <div class="col-12 col-md-6">
                    <button class="btn btn-custom" onclick="molineria()">Molinería</button>
                </div>
                <div class="col-12 col-md-6">
                    <button class="btn btn-custom" onclick="fumigacion()">Fumigación</button>
                </div>
            </div>
            <div class="row">
            <div class="col-12 col-md-6">
                    <button class="btn btn-custom" onclick="pqrsf()">PQRSF</button>
                </div>

            <div class="col-12 col-md-6">
                    <button class="btn btn-custom" onclick="panel_administrador()">Panel Admin</button>
                </div>
            </div>
        </div>
    `;
  document.getElementById("content").innerHTML = content;
}

//Menu principal
function lim_pozo() {
  const content = `
        <div class="container">
        <h2>Servicio de Limpieza de pozo</h2><br>
        <!-- Logo de la empresa -->
            <img src=${logo} width=${ancho} height=${alto} alt="Logo de la Empresa" class="logo">
            <div class="row">
                <div class="col-12 col-md-6">
                    <button class="btn btn-custom" onclick="agendar_servicio_limpieza_pozo()">Agendar servicio</button>
                </div>
                <div class="col-12 col-md-6">
                    <button class="btn btn-custom" onclick="costo_limpieza_pozo()">Costo limpieza</button>
                </div>
                <div class="col-12 col-md-6">
                    <button class="btn btn-custom" onclick="generatePageContent()">Menú principal</button>
                </div>
            </div>
        </div>
    `;
  document.getElementById("content").innerHTML = content;
}

//Formulario de servicio de limpieza de pozo
function agendar_servicio_limpieza_pozo() {
    const content = `
          <div class="container">
              <h2>Agendar servicio de limpieza de pozo</h2><br>
              <form>
                  <!-- Formulario aquí -->
                  ${input_nombre()}
                  ${input_celular()}
                  ${input_dir_serv()}
                  ${input_correo()}
                  ${input_informacion('Area para limpiar')}
                  ${input_fecha_servicio()}
                  
                  <button type="submit" class="btn btn-custom">Enviar</button>
              </form>
              <button class="btn btn-custom mt-3" onclick="lim_pozo()">Volver</button>
          </div>
      `;
    document.getElementById("content").innerHTML = content;
  }

  //Formulario de costo de servicio de limpieza de pozo
  function costo_limpieza_pozo() {
    const content = `
          <div class="container">
              <h2>Costo de Limpieza de Pozo</h2><br>

                <select class="form-select form-select-lg mb-3" id="costo_pozo" name="costo_pozo" onchange="actualizarCostoPozo()">
  <option selected>Seleccione el servicio...</option>
  <option value="superficial">Superficial</option>
  <option value="profundo">Profundo</option>
</select>
                
<div class="form-floating mb-3">
  <input type="text" class="form-control" name="costo" id="costo" placeholder="Costo estimado" disabled>
  <label for="floatingInput">Costo estimado</label>
</div>
              <button class="btn btn-custom mt-3" onclick="lim_pozo()">Volver</button>
          </div>
      `;
    document.getElementById("content").innerHTML = content;
  }


//Menu principal
function pqrsf() {
  const content = `
        <div class="container">
            <h2>PQRSF</h2><br>
          ${input_nombre()}
          ${input_celular()}
          ${input_correo()}
          ${input_informacion('Redacta los detalles')}
          
                <button type="submit" class="btn btn-custom" onclick="enviarFormulario()">Enviar</button>
            </form>
            <button class="btn btn-custom mt-3" onclick="generatePageContent()">Volver</button>
        </div>
    `;
  document.getElementById("content").innerHTML = content;
}

//Menu principal
function fumigacion() {
    const content = `
          <div class="container">
          <h2>Servicios de fumigación</h2><br>
          <!-- Logo de la empresa -->
              <img src=${logo} width=${ancho} height=${alto} alt="Logo de la Empresa" class="logo">
              <div class="row">
                  <div class="col-12 col-md-6">
                      <button class="btn btn-custom" onclick="agendar_servicio_fumigacion()">Agendar servicio de fumigación</button>
                  </div>
                  <div class="col-12 col-md-6">
                      <button class="btn btn-custom" onclick="costo_servicio_fumigacion()">Costo servicio de fumigación</button>
                  </div>
                  <div class="col-12 col-md-6">
                      <button class="btn btn-custom" onclick="generatePageContent()">Menú principal</button>
                  </div>
              </div>
          </div>
      `;
    document.getElementById("content").innerHTML = content;
  }

function costo_servicio_fumigacion() {
  const content = `
        <div class="container">
            <h2>Cotizar servicio fumigación</h2><br>
            ${input_nombre()}
            ${input_celular()}
            ${input_correo()}
            ${input_fecha_servicio()}
            ${input_dir_serv()}
            ${input_informacion('Para que es la fumigación')}
            
                <button type="submit" class="btn btn-custom">Enviar</button>
            </form>
            <button class="btn btn-custom mt-3" onclick="fumigacion()">Volver</button>
        </div>
    `;
  document.getElementById("content").innerHTML = content;
}

function agendar_servicio_fumigacion() {
  const content = `
        <div class="container">
            <h2>Agendar Servicio de Fumigación</h2><br>
              ${input_nombre()}
            ${input_celular()}
            ${input_correo()}
            ${input_dir_serv()}
            ${input_fecha_servicio()}
            <form>
                <!-- Formulario aquí -->
                <div class="mb-3">
                    <input type="time" class="form-control" id="hora">
                </div>
                ${input_informacion('Para que es la fumigación')}
                <button type="submit" class="btn btn-custom">Enviar</button>
            </form>
            <button class="btn btn-custom mt-3" onclick="fumigacion()">Volver</button>
        </div>
    `;
  document.getElementById("content").innerHTML = content;
}

//Menu principal
function molineria() {
    const content = `
          <div class="container">
          <h2>Recolección de plastico</h2><br>
          <!-- Logo de la empresa -->
              <img src=${logo} width=${ancho} height=${alto} alt="Logo de la Empresa" class="logo">
              <div class="row">
                  <div class="col-12 col-md-6">
                      <button class="btn btn-custom" onclick="agendar_recoleccion_plastico()">Agendar Recolección de plástico</button>
                  </div>
                  <div class="col-12 col-md-6">
                      <button class="btn btn-custom" onclick="cotizar_compra_material_procesado()">Cotizar compra de material procesado</button>
                  </div>
                  <div class="col-12 col-md-6">
                      <button class="btn btn-custom" onclick="generatePageContent()">Menú principal</button>
                  </div>
              </div>
          </div>
      `;
    document.getElementById("content").innerHTML = content;
  }

function agendar_recoleccion_plastico() {
  const content = `
        <div class="container">
            <h2>Agendar recolección de plástico</h2><br>
            ${input_nombre()}
            ${input_celular()}
            ${input_correo()}
            ${input_informacion('Material')}
            <div class="form-floating mb-3">
  <input type="number" class="form-control" name="cantidad" id="cantidad" placeholder="Cantidad">
  <label for="floatingInput">Cantidad</label><br>
  
                <button type="submit" class="btn btn-custom">Enviar</button>
            </form>
            <button class="btn btn-custom mt-3" onclick="molineria()">Volver</button>
        </div>
    `;
  document.getElementById("content").innerHTML = content;
}

function cotizar_compra_material_procesado() {
  const content = `
        <div class="container">
            <h2>Cotizar compra de material procesado</h2><br>
            ${input_nombre()}
            ${input_celular()}
            ${input_correo()}
            ${input_informacion('Material')}
            <div class="form-floating mb-3">
  <input type="number" class="form-control" name="cantidad" id="cantidad" placeholder="Cantidad">
  <label for="floatingInput">Cantidad</label><br>            
                <button type="submit" class="btn btn-custom">Enviar</button>
            <button class="btn btn-custom mt-3" onclick="molineria()">Volver</button>
        </div>
    `;
  document.getElementById("content").innerHTML = content;
}

//Opciones a cargar del boton Alquilar unidades portatiles
function alqui_uni_port() {
  const content = `
        <div class="container">
        <h2>Alquiler de unidades portatiles</h2><br>
        <!-- Logo de la empresa -->
            <img src=${logo} alt="Logo de la Empresa" class="logo">
            <div class="row">
                <div class="col-12 col-md-6">
                    <button class="btn btn-custom" onclick="agendar_servicio()">Agendar servicio</button>
                </div>
                <div class="col-12 col-md-6">
                    <button class="btn btn-custom" onclick="agendar_limpieza()">Agendar Limpieza</button>
                </div>
                <div class="col-12 col-md-6">
                    <button class="btn btn-custom" onclick="costo_servicio()">Costo del servicio</button>
                </div>
                <div class="col-12 col-md-6">
                    <button class="btn btn-custom" onclick="generatePageContent()">Menú principal</button>
                </div>
            </div>
        </div>
    `;
  document.getElementById("content").innerHTML = content;
}

//Formulario de Alquilar unidades portatiles boton Agendar servicio
function agendar_servicio() {
  const content = `
        <div class="container">
            <h2>Agendar Servicio unidades portatiles</h2><br>
                ${contenedor_notificacion()}
            <!-- Formulario aquí -->
                ${input_nombre()}
                ${input_celular()}
                ${input_dir_serv()}
                ${input_correo()}

                <div class="form-floating mb-3">
  <input type="number" class="form-control" name="cantidad" id="cantidad" placeholder="Cantidad a alquilar">
  <label for="floatingInput">Cantidad a alquilar</label>
</div>
                ${input_fecha_servicio()}
                
                <button type="submit" class="btn btn-custom" onclick="agendar_servicio_unidades_portatiles_form()">Enviar</button>
            
            <button class="btn btn-custom mt-3" onclick="alqui_uni_port()">Volver</button>
        </div>
    `;
  document.getElementById("content").innerHTML = content;
}

//Formulario de Alquilar unidades portatiles boton Agendar limpieza
function agendar_limpieza() {
  const content = `
        <div class="container">
            <h2>Agendar Limpieza Unidades portatiles</h2><br>
            ${contenedor_notificacion()}
                <!-- Formulario aquí -->
                ${input_nombre()}
                ${input_celular()}
                ${input_correo()}
                
                <div class="form-floating mb-3">
  <input type="number" class="form-control" name="cantidad" id="cantidad" placeholder="Cantidad a limpiar">
  <label for="floatingInput">Cantidad a limpiar</label>
</div>
                ${input_fecha_servicio()}

                <button type="submit" class="btn btn-custom" onclick="agendar_limpieza_unidades_portatiles_form()">Enviar</button>
            <button class="btn btn-custom mt-3" onclick="alqui_uni_port()">Volver</button>
        </div>
    `;
  document.getElementById("content").innerHTML = content;
}

//Formulario de Alquilar unidades portatiles boton costo del servicio
function costo_servicio() {
  const content = `
        <div class="container">
            <h2>Costo del Servicio</h2><br>
                <!-- Formulario aquí -->

                <select class="form-select form-select-lg mb-3" id="tipo_servicio" name="tipo_servicio" aria-label="Large select example" onchange="actualizarCosto()">
  <option selected>Seleccione el servicio...</option>
  <option value="alq_uni_por">Alquiler de unidades portatiles</option>
  <option value="lim_uni_por">Servicio limpieza de unidades portatiles</option>
</select>
                
<div class="form-floating mb-3">
  <input type="text" class="form-control" name="costo" id="costo" placeholder="Costo estimado" disabled>
  <label for="floatingInput">Costo estimado</label>
</div>

            <button class="btn btn-custom mt-3" onclick="alqui_uni_port()">Volver</button>
        </div>
    `;
  document.getElementById("content").innerHTML = content;
}

// Llamar a la función para generar el contenido inicial
generatePageContent();

function resetForm() {
  document.getElementById('nombre').value = '';
  document.getElementById('celular').value = '';
  document.getElementById('email').value = '';
  document.getElementById('detalles').value = '';
}

