const showInputErrors = () => {
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const pass = document.getElementById('password');
  const confirmPass = document.getElementById('confirm-password');
  const emailError = document.querySelector('.email-error');
  const phoneError = document.querySelector('.phone-error');
  const passError1 = document.querySelector('.password-error1');
  const passError2 = document.querySelector('.password-error2');
  const confirmPassError = document.querySelector('.confirm-pass-error');

  email.addEventListener('input', () => {
    if(!email.validity.valid){
      emailError.textContent = '* Please enter a valid email address';
    } else {
      emailError.textContent = '';
    }
  })

  phone.addEventListener('input', () => {
    if(phone.validity.patternMismatch){
      phoneError.textContent = '* Please follow this format (+63 XXX XXX XXXX)'
    } else {
      phoneError.textContent = '';
    }
  })

  pass.addEventListener('input', () => {
    if(pass.validity.tooShort){
      passError1.textContent = '* Password must contain at least 8 characters'
    }
    else {
      passError1.textContent = '';
    }


    if(pass.validity.patternMismatch){
      passError2.textContent = '* Password must include (numbers, uppercase characters, lowercase characters)'
    } else {
      passError2.textContent = '';
    }

  })

  confirmPass.addEventListener('input', () => {
    if(pass.value !== confirmPass.value){
      confirmPassError.textContent = '* Password does not match';
      confirmPass.style.border = '1px solid red';
    } else {
      confirmPassError.textContent = '';
      confirmPass.style.border = '1px solid #9c9c9c';
    }
  })
}


showInputErrors();

// const form = document.getElementById("form");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();


//   const errorElements = document.querySelectorAll(".error");
//   errorElements.forEach(function(element) {
//     element.textContent = "";
//   });

//   const email = document.getElementById("email").value;
//   const phone = document.getElementById("phone").value;
//   const password = document.getElementById("password").value;
//   const confirmPassword = document.getElementById("confirm-password").value;

//   let hasError = false;

//   if (!validateEmail(email)) {
//     // const emailError = document.querySelector("#email + .error");
//     // emailError.textContent = "*Provide a valid email address.";
//     // hasError = true;
//   }

//   if (!validatePhoneNumber(phone)) {
//     // const phoneError = document.querySelector("#phone + .error");
//     // phoneError.textContent = "*Provide a valid phone number.";
//     // hasError = true;
//   }

//   if (password !== confirmPassword) {
//     // const passwordError = document.querySelector("#password + .error");
//     // passwordError.textContent = "*Password does not match.";
//     // hasError = true;
//   }
// });

// function validateEmail(email) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// function validatePhoneNumber(phone) {
//   return /^(0|[0-9])[0-9]{9,10}$/.test(phone);
// }
