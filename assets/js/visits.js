fetch("https://dontrevisiol.goatcounter.com/counter/TOTAL.json")
.then(r => r.json())
.then(data => {
	document.getElementById("gc-visits").textContent = data.count ?? 0;
	})
	.catch(() => {
		document.getElementById("gc-visits").textContent = "0";
		});
