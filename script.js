
const logo = "logo.jpg";
const ancho = "220 px";
const alto = "180 px";

function logo_empresa(){
    const logo = `<!-- Logo de la empresa -->
    <img src=${logo} width=${ancho} height=${alto} alt="Logo de la Empresa" class="logo">`;
}
//
function generatePageContent() {
    const content = `
        <div class="container">
           logo_empresa()
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
                    <button class="btn btn-custom">Panel Admin</button>
                </div>
            </div>
        </div>
    `;
    document.getElementById('content').innerHTML = content;
}

//Menu principal
function lim_pozo() {
    const content = `
        <div class="container">
        ${logo_empresa()}
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
    document.getElementById('content').innerHTML = content;
}

//Menu principal
function molineria() {
    const content = `
        <div class="container">
        ${logo_empresa()}
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
    document.getElementById('content').innerHTML = content;
}

//Menu principal
function fumigacion() {
    const content = `
        <div class="container">
        ${logo_empresa()}
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
    document.getElementById('content').innerHTML = content;
}

function alqui_uni_port() {
    const content = `
        <div class="container">
        ${logo_empresa()}
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
    document.getElementById('content').innerHTML = content;
}

// Llamar a la función para generar el contenido inicial
generatePageContent();


//Codigo fuente de formularios
function agendar_servicio_fumigacion() {
    const content = `
        <div class="container">
            <h2>Agendar Servicio de Fumigación</h2>
            <form>
                <!-- Formulario aquí -->
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre">
                </div>
                <div class="mb-3">
                    <label for="fecha" class="form-label">Fecha del Servicio</label>
                    <input type="date" class="form-control" id="fecha">
                </div>
                <div class="mb-3">
                    <label for="direccion" class="form-label">Dirección</label>
                    <input type="text" class="form-control" id="direccion">
                </div>
                <button type="submit" class="btn btn-custom">Enviar</button>
            </form>
            <button class="btn btn-custom mt-3" onclick="molineria()">Volver</button>
        </div>
    `;
    document.getElementById('content').innerHTML = content;
}

function agendar_recoleccion_plastico() {
    const content = `
        <div class="container">
            <h2>Agendar Recoleccion de plastico</h2>
            <form>
                <!-- Formulario aquí -->
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre">
                </div>
                <div class="mb-3">
                    <label for="fecha" class="form-label">Fecha del Servicio</label>
                    <input type="date" class="form-control" id="fecha">
                </div>
                <div class="mb-3">
                    <label for="direccion" class="form-label">Dirección</label>
                    <input type="text" class="form-control" id="direccion">
                </div>
                <button type="submit" class="btn btn-custom">Enviar</button>
            </form>
            <button class="btn btn-custom mt-3" onclick="molineria()">Volver</button>
        </div>
    `;
    document.getElementById('content').innerHTML = content;
}

function cotizar_compra_material_procesado() {
    const content = `
        <div class="container">
            <h2>Cotizar compra de material procesado</h2>
            <form>
                <!-- Formulario aquí -->
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre">
                </div>
                <div class="mb-3">
                    <label for="fecha" class="form-label">Fecha del Servicio</label>
                    <input type="date" class="form-control" id="fecha">
                </div>
                <div class="mb-3">
                    <label for="direccion" class="form-label">Dirección</label>
                    <input type="text" class="form-control" id="direccion">
                </div>
                <button type="submit" class="btn btn-custom">Enviar</button>
            </form>
            <button class="btn btn-custom mt-3" onclick="molineria()">Volver</button>
        </div>
    `;
    document.getElementById('content').innerHTML = content;
}

function agendar_servicio_limpieza_pozo() {
    const content = `
        <div class="container">
            <h2>Agendar Servicio de Limpieza de Pozo</h2>
            <form>
                <!-- Formulario aquí -->
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre">
                </div>
                <div class="mb-3">
                    <label for="fecha" class="form-label">Fecha del Servicio</label>
                    <input type="date" class="form-control" id="fecha">
                </div>
                <div class="mb-3">
                    <label for="direccion" class="form-label">Dirección</label>
                    <input type="text" class="form-control" id="direccion">
                </div>
                <button type="submit" class="btn btn-custom">Enviar</button>
            </form>
            <button class="btn btn-custom mt-3" onclick="lim_pozo()">Volver</button>
        </div>
    `;
    document.getElementById('content').innerHTML = content;
}

function costo_limpieza_pozo() {
    const content = `
        <div class="container">
            <h2>Costo de Limpieza de Pozo</h2>
            <form>
                <!-- Formulario aquí -->
                <div class="mb-3">
                    <label for="tipo_pozo" class="form-label">Tipo de Pozo</label>
                    <select class="form-select" id="tipo_pozo">
                        <option value="superficial">Superficial</option>
                        <option value="profundo">Profundo</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="costo" class="form-label">Costo Estimado</label>
                    <input type="number" class="form-control" id="costo">
                </div>
                <button type="submit" class="btn btn-custom">Calcular</button>
            </form>
            <button class="btn btn-custom mt-3" onclick="lim_pozo()">Volver</button>
        </div>
    `;
    document.getElementById('content').innerHTML = content;
}

function agendar_servicio() {
    const content = `
        <div class="container">
            <h2>Agendar Servicio</h2>
            <form>
                <!-- Formulario aquí -->
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre">
                </div>
                <div class="mb-3">
                    <label for="fecha" class="form-label">Fecha del Servicio</label>
                    <input type="date" class="form-control" id="fecha">
                </div>
                <div class="mb-3">
                    <label for="direccion" class="form-label">Dirección</label>
                    <input type="text" class="form-control" id="direccion">
                </div>
                <button type="submit" class="btn btn-custom">Enviar</button>
            </form>
            <button class="btn btn-custom mt-3" onclick="alqui_uni_port()">Volver</button>
        </div>
    `;
    document.getElementById('content').innerHTML = content;
}

function agendar_limpieza() {
    const content = `
        <div class="container">
            <h2>Agendar Limpieza</h2>
            <form>
                <!-- Formulario aquí -->
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre">
                </div>
                <div class="mb-3">
                    <label for="fecha" class="form-label">Fecha del Servicio</label>
                    <input type="date" class="form-control" id="fecha">
                </div>
                <div class="mb-3">
                    <label for="direccion" class="form-label">Dirección</label>
                    <input type="text" class="form-control" id="direccion">
                </div>
                <button type="submit" class="btn btn-custom">Enviar</button>
            </form>
            <button class="btn btn-custom mt-3" onclick="alqui_uni_port()">Volver</button>
        </div>
    `;
    document.getElementById('content').innerHTML = content;
}

function costo_servicio() {
    const content = `
        <div class="container">
            <h2>Costo del Servicio</h2>
            <form>
                <!-- Formulario aquí -->
                <div class="mb-3">
                    <label for="tipo_servicio" class="form-label">Tipo de Servicio</label>
                    <select class="form-select" id="tipo_servicio">
                        <option value="agendar">Agendar Servicio</option>
                        <option value="limpieza">Agendar Limpieza</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="costo" class="form-label">Costo Estimado</label>
                    <input type="number" class="form-control" id="costo">
                </div>
                <button type="submit" class="btn btn-custom">Calcular</button>
            </form>
            <button class="btn btn-custom mt-3" onclick="alqui_uni_port()">Volver</button>
        </div>
    `;
    document.getElementById('content').innerHTML = content;
}

//Menu principal
function pqrsf() {
    const content = `
        <div class="container">
            <h2>Agendar Servicio de Fumigación</h2>
            <form>
                <!-- Formulario aquí -->
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre">
                </div>
                <div class="mb-3">
                    <label for="fecha" class="form-label">Fecha del Servicio</label>
                    <input type="date" class="form-control" id="fecha">
                </div>
                <div class="mb-3">
                    <label for="direccion" class="form-label">Dirección</label>
                    <input type="text" class="form-control" id="direccion">
                </div>
                <button type="submit" class="btn btn-custom">Enviar</button>
            </form>
            <button class="btn btn-custom mt-3" onclick="generatePageContent()">Volver</button>
        </div>
    `;
    document.getElementById('content').innerHTML = content;
}

function costo_servicio_fumigacion() {
    const content = `
        <div class="container">
            <h2>Cotizar costo servicio fumigación</h2>
            <form>
                <!-- Formulario aquí -->
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre">
                </div>
                <div class="mb-3">
                    <label for="fecha" class="form-label">Fecha del Servicio</label>
                    <input type="date" class="form-control" id="fecha">
                </div>
                <div class="mb-3">
                    <label for="direccion" class="form-label">Dirección</label>
                    <input type="text" class="form-control" id="direccion">
                </div>
                <button type="submit" class="btn btn-custom">Enviar</button>
            </form>
            <button class="btn btn-custom mt-3" onclick="molineria()">Volver</button>
        </div>
    `;
    document.getElementById('content').innerHTML = content;
}