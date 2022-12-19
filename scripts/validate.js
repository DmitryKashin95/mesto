const validCheck = (inp, err, cfg) => {
  err.textContent = '';
  if (inp.validity.valid) {
    err.textContent = '';
    inp.classList.remove(cfg.inputErrorClass);
  } else {
    err.textContent = inp.validationMessage;
    inp.classList.add(cfg.inputErrorClass);
  }
} 

const clearInputValue = (inp, btn, cfg) => {
  if (inp.value === '') {
    btn.disabled = 'disabled';
    btn.classList.add(cfg.inactiveButtonClass);
  } else {
    btn.disabled = '';
    btn.classList.remove(cfg.inactiveButtonClass);
  }
}

const clearValidError = (inp, err, cfg) => {
  err.textContent = '';
  inp.classList.remove(cfg.inputErrorClass);
}

const toggleButtonDisable = (inputs, btn, cfg) => {
  const isFormValid = inputs.every((input) => {
    return input.validity.valid;
  })
  if (isFormValid) {
    btn.classList.remove(cfg.inactiveButtonClass);
    btn.disabled = '';
  } else {
    btn.classList.add(cfg.inactiveButtonClass);
    btn.disabled = 'disabled';
  }
}

const enableValidation = (cfg) => {
  const forms = Array.from(document.querySelectorAll(cfg.formSelector));

  forms.forEach((form) => {
    const allSelector = Array.from(form.querySelectorAll(cfg.inputSelector));
    const buttonSave = form.querySelector(cfg.submitButtonSelector);
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    toggleButtonDisable(allSelector, buttonSave, cfg);
    form.addEventListener('reset', () => {
      setTimeout( () => {
        toggleButtonDisable(allSelector, buttonSave, cfg);
      }, 0);
    });
    allSelector.forEach((inp) => {
      const error = document.querySelector(`#${inp.id}-error`);
      inp.addEventListener('input', () => {
        validCheck(inp, error, cfg);
        toggleButtonDisable(allSelector, buttonSave, cfg);
      })
    })
  })
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_error'
});