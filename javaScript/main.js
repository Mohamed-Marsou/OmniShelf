"use strict";

const boxes = document.querySelectorAll('.f-box');
const featuresSection = document.querySelector('#app-features');

const observerOptions = {
  root: null, // Use the viewport as the root
  rootMargin: '0px',
  threshold: 0.1 // Trigger when at least 10% of the section is in view
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      boxes.forEach(box => {
        box.classList.add('fade-In');
        console.log("sa");
      });
      observer.unobserve(featuresSection); // Stop observing after the class is added
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(featuresSection);
