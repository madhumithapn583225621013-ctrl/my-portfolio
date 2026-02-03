// Simple contact form alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for reaching out, " + document.getElementById("name").value + "!");
  this.reset();
});
