const themeButton = document.getElementById("moon-sun-icon");

	themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Cambiar icono
  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "☀️";
    themeButton.title = "Modo claro";
  } else {
    themeButton.textContent = "🌙";
    themeButton.title = "Modo oscuro";
  }
});
