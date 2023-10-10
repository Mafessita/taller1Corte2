
function calcularHipoteca(event) {
    event.preventDefault();

    var monto = parseFloat(document.getElementById("monto").value);
    var tasaAnual = parseFloat(document.getElementById("tasa").value);
    var periodoAnual = parseInt(document.getElementById("periodo").value);

    var tasaMensual = (tasaAnual / 100) / 12;
    var numeroPagos = periodoAnual * 12;
    var cuotaMensual = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -numeroPagos));

    document.getElementById('resultado').textContent = "La cuota mensual es de " + cuotaMensual.toFixed(2);
}
document.getElementById('calculadoraForm').addEventListener('submit', calcularHipoteca);
