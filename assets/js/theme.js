// Cargar tema guardado al abrir la página
(function () {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.classList.add("dark-mode");
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("moon-sun-icon");
  if (!themeButton) return;

  function updateButton() {
    const dark = document.documentElement.classList.contains("dark-mode");
    themeButton.textContent = dark ? "☀️" : "🌙";
    themeButton.title = dark ? "Modo claro" : "Modo oscuro";
  }

  updateButton();

  themeButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");

    const dark = document.documentElement.classList.contains("dark-mode");
    localStorage.setItem("theme", dark ? "dark" : "light");

    updateButton();
  });
});
