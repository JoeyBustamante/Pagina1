const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("error-message");

// Usuario y contraseña "de prueba"
const USER = "admin";
const PASS = "1234";

loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que la página se recargue

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === USER && password === PASS) {
        alert("✅ Inicio de sesión exitoso");
        window.location.href = "home.html"; // redirige a otra página
    } else {
        errorMessage.textContent = "❌ Usuario o contraseña incorrectos";
    }
});
