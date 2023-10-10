
function handleFormSubmit(e) {
    e.preventDefault();


    var nombreCliente = document.getElementById('nombreCliente').value;
    var nombreEmpresa = document.getElementById('nombreEmpresa').value;
    var fechaInicio = document.getElementById('fechaInicio').value;
    var terminos = document.getElementById('terminos').value;


    const contratoTexto = `
        CONTRATO LEGAL

        Entre ${nombreCliente} y la empresa ${nombreEmpresa}, en adelante denominada "La Empresa".

        Fecha de Inicio: ${fechaInicio}

        Términos y Condiciones:

        ${terminos}

        
        EL EMPLEADOR,                                                        EL TRABAJADOR,
        ____________________                                              ____________________

        Nombre del Empleador                                                 Nombre del Trabajador
        C.C.                                                                               C.C.

    `;
    document.getElementById('contrato').textContent = contratoTexto;
}
document.getElementById('contratoForm').addEventListener('submit', handleFormSubmit);
