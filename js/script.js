document.getElementById('loadDatos').addEventListener('click', function() {
    loadSection('sections/datos_personales.html');
});
document.getElementById('loadObjetivo').addEventListener('click', function() {
    loadSection('sections/objetivo_profesional.html');
});
document.getElementById('loadEducacion').addEventListener('click', function() {
    loadSection('sections/educacion.html');
});
document.getElementById('loadExperiencia').addEventListener('click', function() {
    loadSection('sections/experiencia_laboral.html');
});
document.getElementById('loadReferencias').addEventListener('click', function() {
    loadSection('sections/referencias.html');
});

function loadSection(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar la sección:', error));
}
