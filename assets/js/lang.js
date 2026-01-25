const flagMap = {
	es: "es",
	en: "us",
	it: "it",
	jp: "jp"
	};
const langNames = {
	es: "Español",
	en: "English",
	it: "Italiano",
	jp: "日本語"
	};
	
const currentLangBtn = document.getElementById("current-lang");
const langMenu = document.getElementById("lang-menu");
const langOptions = document.querySelectorAll(".lang-option");
const downloadLink = document.getElementById("download-cv");


currentLangBtn.addEventListener("click", () => {
  langMenu.style.display =
    langMenu.style.display === "flex" ? "none" : "flex";
});

async function setLanguage(lang) {
  const response = await fetch(`data/${lang}.json`);
  const texts = await response.json();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (texts[key]) {
      el.textContent = texts[key];
    }
  });

  // cambiar flag visible
	const currentFlag = currentLangBtn.querySelector("img");
	const currentText = currentLangBtn.querySelector("span");
	currentFlag.src = `assets/img/flags/${flagMap[lang]}.svg`;
	currentText.textContent = langNames[lang];
	

  // cambiar CV
  const cvMap = {
		es: "cv_es.pdf",
		en: "cv_en.pdf",
		it: "cv_es.pdf",
		jp: "cv_es.pdf"
	  };
	  
	downloadLink.href = `assets/pdf/${cvMap[lang]}`;
  
  
  // cerrar menú
  langMenu.style.display = "none";
}

langOptions.forEach(option => {
	option.addEventListener("click", () => {
		const lang = option.dataset.lang;
		setLanguage(lang);
		langMenu.style.display = "none";
		})
	})

// cerrar menú si clickeás afuera
document.addEventListener("click", e => {
  if (!e.target.closest(".lang-selector")) {
    langMenu.style.display = "none";
    
  }
});

setLanguage("es");
