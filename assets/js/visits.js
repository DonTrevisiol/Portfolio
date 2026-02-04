document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".gc-counter");
  if (!el) return;

  fetch("https://dontrevisiol.goatcounter.com/api/v0/stats/total")
    .then(r => r.json())
    .then(data => {
      el.textContent = data.count;
    })
    .catch(err => {
      console.error("Error obteniendo visitas:", err);
      el.textContent = "-";
    });
});
