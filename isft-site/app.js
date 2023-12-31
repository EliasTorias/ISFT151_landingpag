/*js_landingpage*/
/*Carreras disponibles */
const courses = [
    { name: "Tecnicatura Superior en Análisis de Sistemas" },
    { name: "Tecnicatura Superior en Gestión Ambiental" },
    { name: "Tecnicatura Superior en Emergencias de Salud" },
    { name: "Tecnicatura Superior en Logística" },
    { name: "Tecnicatura Superior en Turismo" }
];

/* // Función para generar las opciones de carrera en el formulario */
function generateCourseOptions() {
    const courseSelect = document.getElementById("course-select");
    courses.forEach(course => {
        const option = document.createElement("option");
        option.value = course.name;
        option.textContent = course.name;
        courseSelect.appendChild(option);
    });
}

/* // Función para manejar el envío del formulario de inscripción */
function handleFormSubmit(event) {
    event.preventDefault();

    const course = document.getElementById("course-select").value;
    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;

    if (course && name && email) {
        // Aquí puedes realizar la lógica para enviar el formulario
        console.log("Formulario enviado");
        console.log("Carrera:", course);
        console.log("Nombre:", name);
        console.log("Email:", email);

        // Restablecer los campos del formulario
        document.getElementById("course-select").selectedIndex = 0;
        document.getElementById("name-input").value = "";
        document.getElementById("email-input").value = "";

        // Mostrar un mensaje de éxito
        alert("Formulario enviado correctamente");
    } else {
        // Mostrar un mensaje de error
        alert("Por favor, completa todos los campos");
    }
}

/* // Cargar las opciones de carrera al cargar la página */
window.onload = function () {
    generateCourseOptions();
    document.getElementById("registration-form").addEventListener("submit", handleFormSubmit);
};
