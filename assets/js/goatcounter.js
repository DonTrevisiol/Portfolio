function loadVisits() {
  if (window.goatcounter && window.goatcounter.visit_count) {

    window.goatcounter.visit_count({
      append: "#gc-visits",
      type: "html",
      no_branding: true
    });

    // Esperamos a que inserte el texto y dejamos solo el número
    setTimeout(() => {
      const el = document.querySelector("#gc-visits");
      if (el) {
        const num = el.textContent.match(/\d+/);
        if (num) el.textContent = num[0];
      }
    }, 300);

  } else {
    setTimeout(loadVisits, 1000);
  }
}

loadVisits();
