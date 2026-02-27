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
const redesSociales = {
	whatsappTitle: "WhatsApp - Escríbeme",
	linkedinTitle: "LinkedIn - Perfil profesional",
	youtubeTitle: "YouTube - Canal oficial",
	facebookTitle: "Facebook - Perfil personal",
	githubTitle: "GitHub - Repositorios y código"
	}
const socialNetworks = {
	whatsappTitle: "WhatsApp - Chat me",
	linkedinTitle: "LinkedIn - Professional profile",
	youtubeTitle: "YouTube - Official channel",
	facebookTitle: "Facebook - Personal profile",
	githubTitle: "GitHub - Repositories and code"
	}
	
const currentLangBtn = document.getElementById("current-lang");
const langMenu = document.getElementById("lang-menu");
const langOptions = document.querySelectorAll(".lang-option");
const downloadLink = document.getElementById("download-cv");


currentLangBtn.addEventListener("click", () => {
  langMenu.style.display =
    langMenu.style.display === "flex" ? "none" : "flex";
});
function getSocialTitles(lang) {
	if (lang === 'en') {
		return socialNetworks;
		} else {
			return redesSociales;
			}
	}
async function setLanguage(lang) {
  const response = await fetch(`data/${lang}.json`);
  const texts = await response.json();
  const titles = getSocialTitles(lang);
  
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (texts[key]) {
      el.textContent = texts[key];
    }
  });
  
  // Cambiar title de las redes sociales:
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    if (titles[key]) {
      el.title = titles[key];
    }
  });
  // Cambiar placeholders del form:
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
	  const key = el.getAttribute("data-i18n-placeholder");
	  if (texts[key]) {
		  el.placeholder = texts[key]
		  }
	  })
  
	// Recordar el cambio de idioma segun el navegador:
	
	localStorage.setItem("language", lang);
	
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
  document.documentElement.classList.add("lang-ready");
  document.body.classList.add("loaded");
}

document.querySelectorAll(".toggle-cert").forEach(button => {
  button.addEventListener("click", () => {
    const frame = button.previousElementSibling;
    frame.style.display =
      frame.style.display === "block" ? "none" : "block";
  });
});

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

const savedLang = localStorage.getItem("language") || "es";
document.documentElement.lang = savedLang;
setLanguage(savedLang);
