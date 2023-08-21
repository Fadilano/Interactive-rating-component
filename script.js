document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submitBtn");
  const result = document.getElementById("result");

  submitBtn.addEventListener("click", function () {
    const ratingSelect = document.querySelector('input[name="rating"]:checked');

    if (ratingSelect) {
      const selectedRating = ratingSelect.value;
      result.textContent = `You selected ${selectedRating} out of 5`;
    } else {
      result.textContent = "You selected X out of 5";
    }
    const ratingContainer = document.querySelector(".container-1");
    const thankYouContainer = document.querySelector(".container-2");
    ratingContainer.style.display = "none";
    thankYouContainer.style.display = "flex";
  });
});
