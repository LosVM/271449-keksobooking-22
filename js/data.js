// import {getRandomInteger, getRandomFraction} from './util.js';

// const AVATAR_URL = 'img/avatars/user0';
// const TITLE = ['Вашему вниманию представляется: ', 'Хит продаж в Токио!', 'Один из лучших вариантов в Токио!'];
// const TYPE = ['palace', 'flat', 'house', 'bungalow']; 
// const TIME = ['12:00', '13:00', '14:00'];
// const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
// const DESCRIPTION = [
//   'Замечательно место, с панорамным видом на город!',
//   'Объект находится недалеко от аэропорта. Идеально подойдёт для деловых поездок.',
//   'В шаговой доступности находятся множество развлекательных заведений.',
//   'В стоимость бронирования включён бесплатный трансфер от/до аэропорта или вокзала.',
// ];
// const PHOTOS = [
//   'http://o0.github.io/assets/images/tokyo/hotel1.jpg', 
//   'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 
//   'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
// ];

// const PLACES_COUNT = 10;

// // const getRandom = (num1, num2) => {
// //   getRandomInteger(num1, num2);    
// // };

// const createPlace = () => {
//   const x = getRandomFraction(35.65000, 35.75000, 5);
//   const y = getRandomFraction(139.70000, 139.80000, 5);

//   return {
//     author: {
//       avatar: AVATAR_URL + getRandomInteger(1, 8) + '.png',
//     },
//     offer: {
//       title: TITLE[getRandomInteger(0, TITLE.length - 1)],
//       address: x + ', ' + y,
//       price: getRandomInteger(0, 50000),
//       type: TYPE[getRandomInteger(0, TYPE.length - 1)],
//       rooms: getRandomInteger(1, 5),
//       guests: getRandomInteger(1, 8),
//       checkin: TIME[getRandomInteger(0, TIME.length - 1)],
//       checkout: TIME[getRandomInteger(0, TIME.length - 1)],
//       features: FEATURES[getRandomInteger(0, FEATURES.length - 1)],
//       description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
//       photos: PHOTOS[[getRandomInteger(0, PHOTOS.length - 1)]],
//     },    
//     location: {
//       x,
//       y,
//     },
//   };
// };

// // Пуш объектов из функции в новый пустой массив
// const places = () => new Array(PLACES_COUNT).fill(null).map (() => createPlace());

// // export {places};
