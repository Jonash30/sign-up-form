const showInputErrors = () => {
  const fname = document.getElementById('first-name');
  const lname = document.getElementById('last-name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const pass = document.getElementById('password');
  const confirmPass = document.getElementById('confirm-password');
  const emailError = document.querySelector('.email-error');
  const fnameError = document.querySelector('.fname-error');
  const lnameError = document.querySelector('.lname-error');
  const phoneError = document.querySelector('.phone-error');
  const passError1 = document.querySelector('.password-error1');
  const passError2 = document.querySelector('.password-error2');
  const confirmPassError = document.querySelector('.confirm-pass-error');


  fname.addEventListener('input', () => {
    if(fname.validity.valid){
      fnameError.textContent = '';
    }
  })

  lname.addEventListener('input', () => {
    if(lname.validity.valid){
      lnameError.textContent = '';
    }
  })

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

const formSubmit = () => {
  const form = document.getElementById('form');
  const fname = document.getElementById('first-name');
  const lname = document.getElementById('last-name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const pass = document.getElementById('password');
  const confirmPass = document.getElementById('confirm-password');
  const fnameError = document.querySelector('.fname-error');
  const lnameError = document.querySelector('.lname-error');
  const emailError = document.querySelector('.email-error');
  const phoneError = document.querySelector('.phone-error');
  const passError1 = document.querySelector('.password-error1');
  const passError2 = document.querySelector('.password-error2');
  const confirmPassError = document.querySelector('.confirm-pass-error');

  form.addEventListener('submit', (event) => {
    if(fname.value === ''){
      fnameError.textContent = '* This is required';
      event.preventDefault();
    } else {
      fnameError.textContent = '';
    }

    if (lname.value === '') {
      lnameError.textContent = '* This is required';
      event.preventDefault();
    } else {
      lnameError.textContent = '';
    }

    if(!email.validity.valid){
      emailError.textContent = '* Please enter a valid email address';
      event.preventDefault();
    } else if (email.value === ''){
      emailError.textContent = '* This is required';
      event.preventDefault();
    } else {
      emailError.textContent = '';
    }


    if(phone.validity.patternMismatch){
      phoneError.textContent = '* Please follow this format (+63 XXX XXX XXXX)';
      event.preventDefault();
    } else if (phone.value === ''){
      phoneError.textContent = '* This is required';
      event.preventDefault();
    } else {
      phoneError.textContent = '';
    }

    if(pass.validity.tooShort){
      passError1.textContent = '* Password must contain at least 8 characters';
      event.preventDefault();
    } else if (pass.value === '') {
      passError1.textContent = '* This is required';
      event.preventDefault();
    } else {
      passError1.textContent = '';
    }

    if(pass.validity.patternMismatch){
      passError2.textContent = '* Password must include (numbers, uppercase characters, lowercase characters)';
      event.preventDefault();
    } else {
      passError2.textContent = '';
    }


    if(pass.value !== confirmPass.value){
      confirmPassError.textContent = '* Password does not match';
      confirmPass.style.border = '1px solid red';
      event.preventDefault();
    } else {
      confirmPassError.textContent = '';
      confirmPass.style.border = '1px solid #9c9c9c';
    }
  })
}

formSubmit();
showInputErrors();