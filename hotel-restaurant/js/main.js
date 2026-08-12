document.addEventListener("DOMContentLoaded", () => {
  // የዓመተ ምህረት ማስተካከያ
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  // የቋንቋ መቀየሪያ (English / Amharic Toggle)
  const langToggleBtn = document.querySelector("[data-lang-toggle]");
  
  // የተመረጠውን ቋንቋ ከ localStorage መውሰድ (ነባሪው 'en' ይሆናል)
  let currentLang = localStorage.getItem("hotelLang") || "en";

  function applyLanguage() {
    // የኤችቲኤምኤል ቋንቋ መቀየር
    document.documentElement.lang = currentLang === "am" ? "am" : "en";

    // data-en እና data-am ያሏቸውን ጽሁፎች በሙሉ መቀየር
    document.querySelectorAll("[data-en][data-am]").forEach(el => {
      if (el.dataset[currentLang]) {
        el.textContent = el.dataset[currentLang];
      }
    });

    // የቋንቋ መቀየሪያ አዝራሩን ጽሁፍ ማስተካከል
    if (langToggleBtn) {
      langToggleBtn.textContent = currentLang === "en" ? "አማርኛ" : "English";
    }

    // ምርጫውን በ localStorage ማስቀመጥ
    localStorage.setItem("hotelLang", currentLang);
  }

  // አዝራሩ ሲጫን ቋንቋውን መቀየር
  langToggleBtn?.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "am" : "en";
    applyLanguage();
    
    // ሌሎች ገጾች ላይ ወይም ዳታዎች ላይ ሪፍሬሽ እንዲያደርግ ወይም እንዲቀየር ከፈለገ
    window.location.reload(); 
  });

  // ገጹ ሲከፈት ቋንቋውን ተግባራዊ ማድረግ
  applyLanguage();

  // የ FAQ (ጥያቄ እና መልስ) አቆጣጠር እና ስራ
  document.querySelectorAll(".faq-question").forEach(btn => 
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item"); 
      const isOpen = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen);
    })
  );
});