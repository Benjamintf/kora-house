document.addEventListener("DOMContentLoaded", () => {
  // የቋንቋ መልእክቶች መዝገብ
  const formMessages = {
    en: {
      dateError: "Check-out date must be later than check-in date.",
      successDefault: "Thank you. Your request has been received."
    },
    am: {
      dateError: "የመልቀቂያ ቀን ከገባበት ቀን መብለጥ አለበት።",
      successDefault: "እናመሰግናለን። ጥያቄዎ ደርሶናል።"
    }
  };

  const setMsg = (form, type, text) => {
    const box = form.querySelector(".form-message");
    if (!box) return;
    box.className = "form-message " + type;
    box.textContent = text;
  };

  document.querySelectorAll("[data-validate-form]").forEach(form => 
    form.addEventListener("submit", e => {
      e.preventDefault();
      let ok = true; 
      
      const currentLang = localStorage.getItem('selectedLang') || 'en';
      const messages = formMessages[currentLang] || formMessages.en;

      const checkin = form.querySelector("[name=checkin]");
      const checkout = form.querySelector("[name=checkout]");

      if (checkin && checkout && checkin.value && checkout.value && checkout.value <= checkin.value) {
        ok = false;
        setMsg(form, "error", messages.dateError);
      }

      form.querySelectorAll("[required]").forEach(el => {
        if (!el.value.trim()) {
          ok = false;
          el.setAttribute("aria-invalid", "true");
        } else {
          el.removeAttribute("aria-invalid");
        }
      });

      if (ok) {
        const successMsg = form.dataset.success 
          ? (currentLang === 'am' ? (form.dataset.successAm || messages.successDefault) : form.dataset.success) 
          : messages.successDefault;
          
        setMsg(form, "success", successMsg);
        form.reset();
      }
    })
  );

  document.querySelectorAll("[data-guest-selector]").forEach(sel => {
    const input = sel.querySelector("input");
    const minus = sel.querySelector("[data-minus]");
    const plus = sel.querySelector("[data-plus]");
    const min = Number(input.min || 1);
    const max = Number(input.max || 10);

    minus?.addEventListener("click", () => input.value = Math.max(min, Number(input.value) - 1));
    plus?.addEventListener("click", () => input.value = Math.min(max, Number(input.value) + 1));
  });
});