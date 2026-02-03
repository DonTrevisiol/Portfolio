document.addEventListener("DOMContentLoaded", () => {
  const visitEl = document.getElementById("visit-number");
  if (!visitEl) return;

  const NAMESPACE = "dontrevisiol-portfolio";
  const KEY = "visits";

  fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`)
    .then(res => res.json())
    .then(data => {
      visitEl.textContent = data.value;
    })
    .catch(err => {
      console.error("Error contador de visitas:", err);
      visitEl.textContent = "—";
    });
});
