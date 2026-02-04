document.addEventListener("DOMContentLoaded", async () => {
  const visitEl = document.getElementById("visit-number");
  if (!visitEl) return;

  try {
    const res = await fetch(
      "https://dontrevisiol.goatcounter.com/counter/TOTAL.json"
    );

    const data = await res.json();
    visitEl.textContent = data.count;
  } catch (err) {
    console.error("Error obteniendo visitas:", err);
    visitEl.textContent = "-";
  }

  document.body.classList.add("loaded");
});
