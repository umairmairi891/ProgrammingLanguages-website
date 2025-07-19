
let selectedLanguage=null;

  document.querySelectorAll(".list-unstyled li").forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault(); // prevent default anchor behavior
      selectedLanguage = item.textContent.trim().toLowerCase();
      showImage("overview"); // default view
    });
  });

  // Listen to button clicks (Overview, Syntax, etc.)
  document.querySelectorAll(".button .btn").forEach(button => {
    button.addEventListener("click", function () {
      const type = this.textContent.trim().toLowerCase();
      showImage(type);
    });
  });

  function showImage(type) {
    if (!selectedLanguage) return;

    const imageDiv = document.querySelector(".img");
    const imagePath = `Images/${selectedLanguage}-${type}.png`;

    imageDiv.innerHTML = `
      <img src="${imagePath}" alt="${selectedLanguage}-${type}" class="img-fluid border rounded shadow">    
    `;
  }

  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
    
  }
  
  
  window.addEventListener("DOMContentLoaded", function () {
    selectedLanguage = "python";
    showImage("overview");
  });