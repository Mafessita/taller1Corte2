document.getElementById('tarjeta').addEventListener('submit', function (e) {
    e.preventDefault();
    
    
    var nombre = document.getElementById("nombre").value;
    var cargo = document.getElementById("cargo").value;
    var empresa = document.getElementById("empresa").value;
    var contacto = document.getElementById("contacto").value;

  
    var tarjetaTexto = `Tarjeta de Presentación: Nombre: ${nombre} Cargo: ${cargo} Empresa: ${empresa} Contacto: ${contacto}`;
   
    document.getElementById('tarjetaPresentacion').textContent = tarjetaTexto;
    
});

