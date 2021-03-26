const card = document.querySelector('#card').content.querySelector('.popup');
// const map = document.querySelector('#map-canvas');

const renderPlaces = (place) => {
  const popup = card.cloneNode(true);
  
  popup.querySelector('.popup__title').textContent = place.offer.title;
  popup.querySelector('.popup__text--address').textContent = place.offer.address;
  popup.querySelector('.popup__text--price').textContent = place.offer.price + ' ₽/ночь';

  const accomodationType = popup.querySelector('.popup__type');
  accomodationType.textContent = place.offer.type;
  if (accomodationType.textContent === 'palace') {
    accomodationType.textContent = 'Дворец';
  } else if (accomodationType.textContent === 'flat') {
    accomodationType.textContent = 'Квартира';
  } else if (accomodationType.textContent === 'house') {
    accomodationType.textContent = 'Дом';
  } else if (accomodationType.textContent === 'bungalow') {
    accomodationType.textContent = 'Бунгало';
  }

  popup.querySelector('.popup__text--capacity').textContent = place.offer.rooms + ' комнаты для ' + place.offer.guests + ' гостей.';
  popup.querySelector('.popup__text--time').textContent = 'Заезд после ' + place.offer.checkin + ' выезд до ' + place.offer.checkout;
  popup.querySelector('.popup__features').textContent = place.offer.features;
  popup.querySelector('.popup__description').textContent = place.offer.description;
  popup.querySelector('.popup__photo').src = place.offer.photos;
  popup.querySelector('.popup__avatar').src = place.author.avatar;
  // map.appendChild(popup);
  return popup;
};

export {renderPlaces};
