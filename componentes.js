function input_nombre() {
    const nom = `<div class='form-floating mb-3'>
   <input type='text' class='form-control' name='nombre' id='nombre' placeholder='Tu nombre completo'>
   <label for='floatingInput'>Tu nombre completo</label></div>`;
  
    return nom;
  }
  
  function input_celular() {
    const cel = `<div class="form-floating mb-3">
    <input type="number" class="form-control" name="celular" id="celular" placeholder="Tu celular">
    <label for="floatingInput">Número de celular</label>
  </div>`;
  
    return cel;
  }
  
  function input_correo() {
    const correo = `<div class="form-floating mb-3">
    <input type="email" class="form-control" name="email" id="email" placeholder="Tu email">
    <label for="floatingInput">Tu correo electronico</label>
  </div>`;
  
    return correo;
  }
  
  function input_fecha_servicio() {
    const fecha_ser = `
     <div class="form-floating mb-3">
     <input type="date" class="form-control" name="fecha" id="fecha" placeholder="Fecha del servicio">
     <label for="floatingInput">Fecha del servicio</label>
   </div>`;
  
    return fecha_ser;
  }
  
  function input_dir_serv() {
    const dir_ser = `
     <div class="form-floating mb-3">
    <input type="text" class="form-control" name="direccion" id="direccion" placeholder="Dirección destino">
    <label for="floatingInput">Dirección destino</label>
  </div>`;
  
    return dir_ser;
  }
  
  function input_informacion(titulo) {
      const observaciones = `
       <div class="form-floating mb-3">
      <textarea class="form-control" name="detalles" id="detalles" placeholder="${titulo}"></textarea>
      <label for="floatingInput">${titulo}</label>
    </div>`;
    
      return observaciones;
    }
  
    function contenedor_notificacion(){
    const notify = `<div class="alert alert-success" role="alert" id="notificacion" style="display: none;"></div></br>`
    return notify;
    }