"use strict";

const boxes = document.querySelectorAll(".f-box");
const featuresSection = document.querySelector("#app-features");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      boxes.forEach((box) => {
        box.classList.add("fade-In");
        console.log("sa");
      });
      observer.unobserve(featuresSection);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(featuresSection);

// collecting email
document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const user_email = emailInput.value;

    if (user_email) {
      // Prepare the email content
      const emailParams = {
        to_email: "marsoumtm@gmail.com",
        user_email: user_email,
      };

      // Send the email
      emailjs.send("service_lm4juau", "template_3n8awzg", emailParams).then(
        (response) => {
          if (response.status === 200) {
            alert(
              "Thank you! Your email was added successfully. We will be in touch soon :)"
            );
          } else {
            alert("Something went wrong. Please try again later.");
          }
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
      emailInput.value = "";
    } else {
      alert("Please enter a valid email.");
    }
  });
