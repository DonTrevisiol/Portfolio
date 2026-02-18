const form = document.querySelector("form");
const statusDiv = document.getElementById("form-status");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // evita recarga

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      const lang = localStorage.getItem("language") || "es";
      const texts = await fetch(`data/${lang}.json`).then(r => r.json());

      statusDiv.textContent = texts.formSuccess;
      form.reset();
      alert("MENSAJE ENVIADO CORRECTAMENTE...");
    } else {
      statusDiv.textContent = "Error sending message";
    }
  } catch {
    statusDiv.textContent = "Connection error";
  }
});
