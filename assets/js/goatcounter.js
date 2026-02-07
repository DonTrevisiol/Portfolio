function updateVisitCount() {
    console.log("Comprobando contador...");

    const el = document.querySelector("#gc-visits");

    if (!el) {
        console.log("No existe #gc-visits");
        return;
    }

    if (window.goatcounter && goatcounter.visit_count) {
        const count = goatcounter.visit_count.count;
        console.log("Visitas recibidas:", count);

        el.textContent = count ?? "0";
    } else {
        console.log("GoatCounter aún no está listo...");
    }
}

// Esperar a que cargue la página
window.addEventListener("load", () => {
    // Intentar varias veces por carga lenta
    setTimeout(updateVisitCount, 1000);
    setTimeout(updateVisitCount, 2000);
    setTimeout(updateVisitCount, 3000);
    setTimeout(updateVisitCount, 5000);
});
