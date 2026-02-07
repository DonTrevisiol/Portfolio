function loadVisits() {
  console.log("window.goatcounter:", window.goatcounter);

  if (window.goatcounter && window.goatcounter.visit_count) {
    console.log("GoatCounter listo");

    window.goatcounter.visit_count({
      append: "#gc-visits",
      type: "html",
      no_branding: true
    });

  } else {
    console.log("GoatCounter aún no cargó, reintentando...");
    setTimeout(loadVisits, 1000);
  }
}

loadVisits();
