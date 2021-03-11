import {getRandomInteger, getRandomFraction} from './util.js';

const AVATAR_URL = 'img/avatars/user0';
const TITLE = 'Вашему вниманию представляется ';
const ACCOMMODATION_TYPE = ['palace', 'flat', 'house', 'bungalow']; 
const TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const ACCOMMODATION_DESCRIPTION = 'Здесь будет описание объекта';
const ACCOMMODATION_PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg', 
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];
const LOCATION_X = getRandomFraction(35.65000, 35.75000, 5);
const LOCATION_Y = getRandomFraction(139.70000, 139.80000, 5);
const ACCOMMODATION_ADVERTISEMENT_COUNT = 10;

const createAccomodation = () => {
  return {
    author: {
      avatar: AVATAR_URL + getRandomInteger(1, 8) + '.png',
    },
    offer: {
      title: TITLE,
      address: LOCATION_X + ', ' + LOCATION_Y,
      price: getRandomInteger(0, 5000),
      type: ACCOMMODATION_TYPE[getRandomInteger(0, ACCOMMODATION_TYPE.length -1)],
      rooms: getRandomInteger(1, 5),
      guests: getRandomInteger(1, 8),
      checkin: TIME[getRandomInteger(0, TIME.length -1)],
      checkout: TIME[getRandomInteger(0, TIME.length -1)],
      features: FEATURES[getRandomInteger(0, FEATURES.length -1)],
      description: ACCOMMODATION_DESCRIPTION,
      photos: ACCOMMODATION_PHOTOS[[getRandomInteger(0, ACCOMMODATION_PHOTOS.length -1)]],
    },    
    location: {
      x: LOCATION_X,
      y: LOCATION_Y,
    },
  };
};

// Пуш объектов из функции в новый пустой массив
const createAccomodations = () => new Array(ACCOMMODATION_ADVERTISEMENT_COUNT).fill(null).map (() => createAccomodation());

export {createAccomodations};
