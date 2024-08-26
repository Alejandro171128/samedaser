function actualizarCosto() {
    var tipoServicio = document.getElementById("tipo_servicio").value;
    var costoInput = document.getElementById("costo");
    
    // Definir costos en función del servicio seleccionado
    var costos = {
        "alq_uni_por": '$80.000 x unidad', // Ejemplo de costo para "Alquiler de unidades portatiles"
        "lim_uni_por": '$75.000 x unidad'   // Ejemplo de costo para "Servicio limpieza de unidades portatiles"
    };
    
    // Actualizar el campo de costo con el valor correspondiente
    if (costos[tipoServicio]) {
        costoInput.value = costos[tipoServicio];
    } else {
        costoInput.value = "";
    }
}

function actualizarCostoPozo() {
    var tipoServicio = document.getElementById("costo_pozo").value;
    var costoInput = document.getElementById("costo");
    
    // Definir costos en función del servicio seleccionado
    var costos = {
        "profundo": '$120.000 x unidad', // Ejemplo de costo para "Alquiler de unidades portatiles"
        "superficial": '$90.000 x unidad'   // Ejemplo de costo para "Servicio limpieza de unidades portatiles"
    };
    
    // Actualizar el campo de costo con el valor correspondiente
    if (costos[tipoServicio]) {
        costoInput.value = costos[tipoServicio];
    } else {
        costoInput.value = "";
    }
}