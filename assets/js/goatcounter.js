function loadVisits() {
  if (window.goatcounter && window.goatcounter.visit_count) {

    window.goatcounter.visit_count({
      append: "#gc-visits",
      type: "html",
      no_branding: true
    });

    // Limpiamos el contenido después de que se inserte
    setTimeout(() => {
      const el = document.querySelector("#gc-visits");
      if (!el) return;

      const text = el.innerText || "";
      const match = text.match(/\d+/);

      el.innerHTML = match ? match[0] : "0";
    }, 500);

  } else {
    setTimeout(loadVisits, 1000);
  }
}

loadVisits();
