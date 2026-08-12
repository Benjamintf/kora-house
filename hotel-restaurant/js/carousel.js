document.addEventListener("DOMContentLoaded", () => {
  const quotesData = {
    en: [
      ["“A rare balance of Ethiopian soul and quiet luxury. Every detail felt intentional.”", "Maya R.", "Nairobi"],
      ["“The coffee ceremony, the gardens, and the warmth of the team made our stay unforgettable.”", "Daniel K.", "London"],
      ["“Beautiful rooms, exceptional food, and the kind of service that anticipates your needs.”", "Selam T.", "Addis Ababa"]
    ],
    am: [
      ["“የኢትዮጵያን ባህል እና የተረጋጋ የቅንጦት ውበት በልዩ ሁኔታ የያዘ። እያንዳንዱ ዝርዝር ሁኔታ በጥንቃቄ የታሰበበት ነው።”", "ማያ አ.", "ናይሮቢ"],
      ["“የቡና ስነ-ሰርዓቱ፣ የአትክልት ስፍራዎቹ እና የቡድኑ ሞቅ ያለ አቀባበል ቆይታችንን የማይረሳ አድርጎታል።”", "ዳንኤል ከ.", "ለንደን"],
      ["“ ውብ ክፍሎች፣ ድንቅ ምግብ እና ፍላጎትዎን ቀድሞ የሚያውቅ ምርጥ አገልግሎት።”", "ሰላም ተ.", "አዲስ አበባ"]
    ]
  };

  let i = 0; 
  const q = document.querySelector("[data-quote]");
  const a = document.querySelector("[data-author]");
  const l = document.querySelector("[data-location]");

  function render() {
    // ከ selectedLang ወደ hotelLang ተቀይሯል
    const currentLang = localStorage.getItem('hotelLang') || 'en';
    const quotes = quotesData[currentLang] || quotesData.en;

    if (q && quotes[i]) {
      q.textContent = quotes[i][0];
      a.textContent = quotes[i][1];
      l.textContent = quotes[i][2];
    }
  }

  document.querySelector("[data-next]")?.addEventListener("click", () => {
    const currentLang = localStorage.getItem('hotelLang') || 'en';
    const quotes = quotesData[currentLang] || quotesData.en;
    i = (i + 1) % quotes.length;
    render();
  });

  document.querySelector("[data-prev]")?.addEventListener("click", () => {
    const currentLang = localStorage.getItem('hotelLang') || 'en';
    const quotes = quotesData[currentLang] || quotesData.en;
    i = (i - 1 + quotes.length) % quotes.length;
    render();
  });

  render();
});