function loadVisits() {
  const el = document.getElementById("gc-visits");
  if (!el) return;

  fetch("https://dontrevisiol.goatcounter.com/counter/TOTAL.json")
    .then(r => r.json())
    .then(data => {
      if (data && data.count) {
        el.textContent = data.count;
      } else {
        el.textContent = "—";
      }
    })
    .catch(() => {
      el.textContent = "—";
    });
}

loadVisits();
