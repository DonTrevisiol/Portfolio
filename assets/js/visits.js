function loadVisits() {
  const el = document.getElementById("gc-visits");
  const container = document.getElementById("visit-counter");

  if (!el || !container) return;

  fetch("https://dontrevisiol.goatcounter.com/counter/TOTAL.json")
    .then(r => r.json())
    .then(data => {
      if (data && data.count) {
        el.textContent = data.count;
      } else {
        container.style.display = "none";
      }
    })
    .catch(() => {
      container.style.display = "none";
    });
}

loadVisits();
