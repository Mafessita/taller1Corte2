
function manejarEnvioFormulario(e) {
    e.preventDefault();
     
    var datosInput = document.getElementById('datos').value;
    var datosArray = datosInput.split(',').map(Number);
    var grafico = generarGrafico(datosArray);
    document.getElementById('grafico').textContent = grafico;
}
function generarGrafico(datos) {
    let grafico = '';
    for (let i = 0; i < datos.length; i++) {
        var valor = datos[i];
        var barra = '*'.repeat(valor);
        grafico += i + 1;
        grafico += barra;
    }

    return grafico;
}

document.getElementById('datosForm').addEventListener('submit', manejarEnvioFormulario);
