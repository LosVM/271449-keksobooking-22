import {mainForm} from './page-status.js';

// const resetButton = document.querySelector('.ad-form__reset');
const pageContainer = document.querySelector('main');
const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);

const showMessage = (message) => {
  pageContainer.append(message);

  message.addEventListener('click', () => {
    message.remove();
  });

  pageContainer.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      message.remove();
    }
    // 'KeyboardEvent: key = 27';
    message.remove();
  });
};

const setMainFormSubmit = (onSuccess) => {
  mainForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://22.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,        
      },
    )
      .then((response) => {
        if (response.ok) {
          onSuccess();
          showMessage(successMessage)
          mainForm.reset();
        } else {
          showMessage(errorMessage);
        }
      })
      .catch(() => {
        showMessage(errorMessage);
      });
  });
};

setMainFormSubmit();
