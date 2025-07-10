function changeLang(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const placeholders = document.querySelectorAll("[data-key-placeholder]");
  placeholders.forEach((el) => {
    const key = el.getAttribute("data-key-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  localStorage.setItem("preferredLang", lang);
}


// Apply language when page loads
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLang") || "en";
  changeLang(savedLang);
});