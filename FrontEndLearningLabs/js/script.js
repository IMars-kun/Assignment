// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {  // Pastikan elemen target ada
          e.preventDefault();
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
          });
      }
  });
});


// Feedback Form Submission Confirmation
const feedbackForm = document.querySelector("form");
if (feedbackForm) {
  feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simulate form submission and show confirmation message
    alert("Terima kasih atas feedback Anda!");

    // Optionally clear the form after submission
    feedbackForm.reset();
  });
}

// Back to Top Button
const backToTopButton = document.createElement("button");
backToTopButton.textContent = "⬆️";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.padding = "10px";
backToTopButton.style.fontSize = "20px";
backToTopButton.style.backgroundColor = "#3a7bd5";
backToTopButton.style.color = "white";
backToTopButton.style.border = "none";
backToTopButton.style.borderRadius = "50%";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.display = "none";
backToTopButton.style.zIndex = "1000";

document.body.appendChild(backToTopButton);

// Show/Hide Back to Top Button
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Scroll to Top when Button is Clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

