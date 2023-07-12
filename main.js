const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();


  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach(function(element) {
    element.textContent = "";
  });

  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  let hasError = false;

  if (!validateEmail(email)) {
    const emailError = document.querySelector("#email + .error");
    emailError.textContent = "*Provide a valid email address.";
    hasError = true;
  }

  if (!validatePhoneNumber(phone)) {
    const phoneError = document.querySelector("#phone + .error");
    phoneError.textContent = "*Provide a valid phone number.";
    hasError = true;
  }

  if (password !== confirmPassword) {
    const passwordError = document.querySelector("#password + .error");
    passwordError.textContent = "*Password does not match.";
    hasError = true;
  }
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhoneNumber(phone) {
  return /^(0|[0-9])[0-9]{9,10}$/.test(phone);
}
