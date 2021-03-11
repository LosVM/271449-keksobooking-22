import {createAccomodations} from './data.js';

const card = document.querySelector('#card').content.querySelector('.popup');
const map = document.querySelector('#map-canvas');
const popup = card.cloneNode(true);

const accomodationsAdd = createAccomodations();

accomodationsAdd.forEach((data) => {  
  popup.querySelector('.popup__title').textContent = data.offer.title;
  popup.querySelector('.popup__text--address').textContent = data.offer.address;
  popup.querySelector('.popup__text--price').textContent = data.offer.price + ' ₽/ночь';

  const accomodationType = popup.querySelector('.popup__type');
  accomodationType.textContent = data.offer.type;
  if (accomodationType.textContent === 'palace') {
    accomodationType.textContent = 'Дворец';
  } else if (accomodationType.textContent === 'flat') {
    accomodationType.textContent = 'Квартира';
  } else if (accomodationType.textContent === 'house') {
    accomodationType.textContent = 'Дом';
  } else if (accomodationType.textContent === 'bungalow') {
    accomodationType.textContent = 'Бунгало';
  }

  popup.querySelector('.popup__text--capacity').textContent = data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей.';
  popup.querySelector('.popup__text--time').textContent = 'Заезд после ' + data.offer.checkin + ' выезд до ' + data.offer.checkout;
  popup.querySelector('.popup__features').textContent = data.offer.features;
  popup.querySelector('.popup__description').textContent = data.offer.description;
  popup.querySelector('.popup__photos').src = data.offer.photos;
  popup.querySelector('.popup__avatar').src = data.author.avatar;  

  map.appendChild(popup);
});