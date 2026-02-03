document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("moon-sun-icon");
  if (!themeButton) return;

  const isDark = document.documentElement.classList.contains("dark-mode");

  themeButton.textContent = isDark ? "☀️" : "🌙";
  themeButton.title = isDark ? "Modo claro" : "Modo oscuro";

  themeButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");

    const dark = document.documentElement.classList.contains("dark-mode");
    localStorage.setItem("theme", dark ? "dark" : "light");

    themeButton.textContent = dark ? "☀️" : "🌙";
    themeButton.title = dark ? "Modo claro" : "Modo oscuro";
  });
});
