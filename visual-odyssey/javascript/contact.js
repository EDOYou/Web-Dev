document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Perform any custom validation you need here

    // Display a success message and clear the form
    successMessage.textContent = "Thank you! Your message has been submitted.";
    successMessage.classList.remove("hidden");

    contactForm.reset();
  });
});