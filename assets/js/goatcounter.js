function debugGoatCounter() {
	console.log("DEBUG: comprobando GoatCounter...");
	}
	
const el = document.querySelector("#gc-visits");
console.log("Elemento contador: ", el);

if (!el) {
	console.log("No existe #gc-visits");
	}
	
console.log("window.goatcounter =", window.goatcounter);

if (window.goatcounter && goatcounter.visit_count) {
	console.log("visit_count: ", goatcounter.visit_count);
	
	const count = goatcounter.visit_count.count;
	console.log("Número recibido: ", count);
	
	el.textContent = count ?? "0";
	} else {
		console.log("GoatCounter aun no esta listo.");
		}

	
	setTimeout(debugGoatCounter, 1000);
	setTimeout(debugGoatCounter, 2000);
	setTimeout(debugGoatCounter, 3000);
