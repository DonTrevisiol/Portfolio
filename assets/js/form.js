const form = document.querySelector("form");
const statusDiv = document.getElementById("form-status");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  //Honeypot check
  const honeypot = form.querySelector('input[name="website"]');
  if (honeypot.value) {
	  console.warn("Bot detected");
	  return;
	  }

  const lang = localStorage.getItem("language") || "es";
  const texts = await fetch(`data/${lang}.json`).then(r => r.json());

  const nameInput = form.querySelector('input[name="name"]');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  const submitBtn = document.getElementById("submit-btn");
  const spinner = submitBtn.querySelector(".spinner");

  // Limpiar estados anteriores
  statusDiv.textContent = "";
  statusDiv.classList.remove("success", "error");
  form.querySelectorAll(".input-error").forEach(el =>
    el.classList.remove("input-error")
  );

function showError(input, message) {
  statusDiv.textContent = message;
  statusDiv.classList.add("error");
  input.classList.add("input-error");

  // quitar efecto shake
  setTimeout(() => {
    input.classList.remove("input-error");
  }, 500);

  // borrar mensaje después de 5 segundos
  setTimeout(() => {
    statusDiv.textContent = "";
    statusDiv.classList.remove("error");
  }, 5000);
}



  // Validaciones
  if (!nameInput.value.trim()) {
    showError(nameInput, texts.requiredField);
    return;
  }

  if (!emailInput.value.trim()) {
    showError(emailInput, texts.requiredField);
    return;
  }

  if (!emailInput.checkValidity()) {
    showError(emailInput, texts.invalidEmail);
    return;
  }

  if (!messageInput.value.trim()) {
    showError(messageInput, texts.requiredField);
    return;
  }

	submitBtn.disabled = true;
	spinner.classList.add("active");

  // Envío
  const formData = new FormData(form);

try {
  const response = await fetch(form.action, {
    method: "POST",
    body: formData
  });

  if (response.ok) {
    statusDiv.textContent = texts.formSuccess;
    statusDiv.classList.add("success");
    form.reset();

    setTimeout(() => {
      statusDiv.textContent = "";
      statusDiv.classList.remove("success");
    }, 5000); // ahora dura 5 segundos
  } else {
    statusDiv.textContent = "Error sending message.";
    statusDiv.classList.add("error");
  }

} catch (error) {
  console.error("Submission error:", error);
  statusDiv.textContent = "Network error.";
  statusDiv.classList.add("error");

} finally {
  // SIEMPRE se ejecuta
  submitBtn.disabled = false;
  spinner.classList.remove("active");
}
});
