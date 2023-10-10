

const autores = [
    "Albert Einstein", 
    "Isaac Newton", 
    "Leonardo da Vinci", 
    "Marie Curie", 
    "Nelson Mandela"
];
const citas = [
    "La imaginación es más importante que el conocimiento.",
    "Lo que sabemos es una gota de agua; lo que ignoramos es el océano.",
    "La simplicidad es la máxima sofisticación.",
    "La vida no se mide por el número de veces que respiramos, sino por los momentos que nos dejan sin aliento.",
    "Después de escalar una montaña muy alta, descubrimos que hay muchas más montañas por escalar."
];
function generarCitaAleatoria() {
    const autor = autores[Math.floor(Math.random() * autores.length)];
    const cita = citas[Math.floor(Math.random() * citas.length)];
    return `${autor} dijo: '${cita}'`;
}

document.getElementById('cita').textContent = generarCitaAleatoria();

document.getElementById('generarCita').addEventListener('click', function () {
    document.getElementById('cita').textContent = generarCitaAleatoria();
});
