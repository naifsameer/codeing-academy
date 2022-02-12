/* eslint-disable quotes */
const el = (element) => document.querySelector(element);
// mode btn
el('.mode-btn').onclick = () => {
  let modeLabel = 'dark';
  const isDark = el('body').classList.contains('dark');
  if (isDark) {
    el('body').classList.remove('dark');
    modeLabel = 'light';
    el('.mode-btn').textContent = modeLabel;
  } else {
    el('body').classList.add('dark');
    modeLabel = 'dark';
    el('.mode-btn').textContent = modeLabel;
  }
};
/** **************** form  validation ******************************** */
// name
const nameInput = el('#form-name');
nameInput.onblur = () => {
  const nameLen = nameInput.value.length;
  if (nameLen < 3 || nameLen > 30) {
    el('.form-name-err').textContent =
      'please enter correct name between 3 and 30 letters';
    nameInput.classList.add('border-red');
  } else {
    el('.form-name-err').textContent = '';
    nameInput.classList.remove('border-red');
  }
};

// email
const emailInput = el('#form-email');
emailInput.onblur = () => {
  const isValidEmail = emailInput.value.match(/\S+@\S+\.\S+/);
  if (!isValidEmail) {
    el('.form-email-err').textContent = 'please enter correct email';
    emailInput.classList.add('border-red');
  } else {
    el('.form-email-err').textContent = '';
    emailInput.classList.remove('border-red');
  }
};

// message
const messageInput = el('#form-message');
messageInput.addEventListener('blur', () => {
  const messageLen = messageInput.value.length;
  if (messageLen < 30) {
    el('.form-message-err').textContent = 'please write at least 30 letters';
    messageInput.classList.add('border-red');
  } else {
    el('.form-message-err').textContent = '';
    messageInput.classList.remove('border-red');
  }
});

// form btn
el('#form-btn').onclick = (e) => {
  e.preventDefault();
  // check if there are no err
  const errElemens = document.querySelectorAll('.form-err');
  for (let i = 0; i < errElemens.length; i += 1) {
    if (errElemens[i].textContent !== '') {
      alert('please fix the error on the form before sending the form');
      break;
    }
  }
};

// img
const allImage = document.querySelectorAll('.c-works__item img');

allImage.forEach((item) => {
  item.addEventListener('click', () => {
    item.style.border = '4px solid red';
  });
});
