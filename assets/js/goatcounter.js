function loadVisits() {
  if (window.goatcounter && window.goatcounter.visit_count) {

    window.goatcounter.visit_count({
      append: "#gc-visits",
      type: "html",
      no_branding: true
    });

    // Esperamos que GoatCounter escriba
    setTimeout(() => {
      const el = document.querySelector("#gc-visits");
      if (!el) return;

      const match = el.innerText.match(/\d+/);
      const visits = match ? match[0] : "0";

      // dejamos texto fijo y eliminamos nodos internos
      el.textContent = visits;

    }, 1000);

  } else {
    setTimeout(loadVisits, 500);
  }
}

loadVisits();
