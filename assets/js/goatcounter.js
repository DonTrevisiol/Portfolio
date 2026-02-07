function loadVisits() {
	console.log("window.goatcounter: ", window.goatcounter);
	console.log("goatcounter.visit_count: ", goatcounter.visit_count)
	if (window.goatcounter && goatcounter.visit_count) {
		goatcounter.visit_count({
			append: "#gc-visits",
			type: "html",
			no_branding: true
			});
		} else {
			setTimeout(loadVisits, 3000)
			}
	}
	
	loadVisits();
