// Неактивное состояние страницы

const mainForm = document.querySelector('.ad-form');
const mainFormElements = mainForm.children;
const mapFilters = document.querySelector('.map__filters');
const mapFiltersElements = mapFilters.children;

mainForm.classList.add('ad-form--disabled');
mapFilters.classList.add('ad-form--disabled');

const setFormAttributes = (data) => {  
  for(let i = 0; i < data.length; i++) {
    const formElement = data[i];
    formElement.setAttribute('disabled', true);
  }
};

const removeFormAttributes = (data) => {
  for(let i = 0; i < data.length; i++) {
    const formElement = data[i];
    // formElement.disabled = false;
    formElement.removeAttribute('disabled');
  }
}

setFormAttributes(mainFormElements);
setFormAttributes(mapFiltersElements);

export {mainForm, mapFilters, mainFormElements, mapFiltersElements, removeFormAttributes};
