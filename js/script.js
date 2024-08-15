document.addEventListener("DOMContentLoaded", function () {
  // Function to show the slider and activate the corresponding button
  function showSlider(index) {
    sliders.forEach((slider, i) => {
      slider.classList.toggle("active", i === index);
    });
    buttons.forEach((button, i) => {
      button.classList.toggle("active", i === index);
    });
  }

  // Selecting all sliders and buttons
  const sliders = document.querySelectorAll(".conference-slider"); // Select all slider elements
  const buttons = document.querySelectorAll(".tab-button"); // Select all tab button elements

  // Set up a click event listener on all button elements stored in the buttons variable
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      showSlider(index); // Call the showSlider function with the index to display the corresponding slider content
    });
  });

  // Find the index of the button that has the "active" class
  const activeIndex = Array.from(buttons).findIndex((button) =>
    button.classList.contains("active")
  );
  // If there is an active button, show its corresponding slider; otherwise, show the first slider
  showSlider(activeIndex >= 0 ? activeIndex : 0);

  // Iterate over each conference card
  document.querySelectorAll(".conferences-card").forEach((card) => {
    let priceField = card.querySelector(".views-field-field-price"); // Find the price field within the card
    let price = priceField.textContent.trim(); // Get the trimmed text content of the price field

    // Check if the card is inside a .past-conferences div
    if (card.closest(".past-conferences")) {
      priceField.style.display = "none"; // Hide the price field if it's in a past-conferences div
    } else {
      if (price === "") {
        priceField.textContent = "FREE"; // Set the price to FREE if it's empty
      } else {
        priceField.textContent = "₹ " + price; // Add ₹ before the price
      }
    }

    // Check if imageField contains an <img> tag with a title attribute
    let imageField = card.querySelector(".views-field-field-card-image");
    if (imageField) {
      let img = imageField.querySelector("img");
      if (img) {
        let title = img.getAttribute("title");
        if (title) {
          // Append the title as a <span> inside imageField
          let span = document.createElement("span");
          span.className = "image-title";
          span.textContent = title;
          imageField.appendChild(span);
        }
      }
    }
  });
});
