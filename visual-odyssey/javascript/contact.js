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

// SCROLLS DOWN TO THE TARGET
//   document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll("nav a");

//     navLinks.forEach((link) => {
//       link.addEventListener("click", function (event) {
//         event.preventDefault();
//         const targetId = this.getAttribute("href");
//         const targetElement = document.querySelector(targetId);

//         if (targetElement) {
//           targetElement.scrollIntoView({ behavior: "smooth" });
//         }
//       });
//     });
//   });


