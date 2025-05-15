document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("quote-form");
    const result = document.getElementById("result");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const siteType = form.siteType.value;
      const pages = parseInt(form.pages.value, 10);
      const isCustom = form.customDesign.value === "yes";
  
      if (isNaN(pages) || pages < 1 || pages > 10) {
        result.textContent = "Please enter a valid number of pages (1–10).";
        return;
      }
  

      let basePrice = 0;
      switch (siteType) {
        case "business":
          basePrice = 1000;
          break;
        case "store":
          basePrice = 2000;
          break;
        case "blog":
          basePrice = 800;
          break;
        default:
          basePrice = 0;
      }
  
      const pagePrice = pages * 200;
      const customPrice = isCustom ? 500 : 0;
  
      const total = basePrice + pagePrice + customPrice;
  
      result.textContent = `Estimated Price: ₪${total.toLocaleString()}`;
    });


    form.addEventListener("reset", () => {
      result.textContent = "";
    });
  });
  