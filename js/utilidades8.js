function extraerPares() {
    const inputNumeros = document.getElementById('numeros').value;
    const numeros = inputNumeros.split(',').map(Number);
    const resultado = document.getElementById('resultado');

    if (numero => numero % 2 === 0) {
        resultado.textContent = numeros.filter(numero => numero % 2 === 0).join(', ');
    } else {
        resultado.textContent = "No se encontraron números pares.";
    }
}
