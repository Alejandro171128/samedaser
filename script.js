<script src="formularios.js"></script>
const logo = "logo.jpg";
const ancho = "220 px";
const alto = "180 px";

function logo_empresa(){
    const logo = `<!-- Logo de la empresa -->
    <img src=${logo} width=${ancho} height=${alto} alt="Logo de la Empresa" class="logo">`;
}

function generatePageContent() {
    const content = `
        <div class="container">
           
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
