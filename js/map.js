import {mainForm} from './page-status.js';
import {mapFilters} from './page-status.js';
import {mainFormElements} from './page-status.js';
import {mapFiltersElements} from './page-status.js';
import {removeFormAttributes} from './page-status.js';
import {accomodationsAdd} from './render-data.js';
import {createAdvertisement} from './render-data.js'

// L - объект библиотеки
const map = L.map('map-canvas')
  .on('load', () => {
    // событие инициализации карты
    mainForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('ad-form--disabled');
    removeFormAttributes(mainFormElements);
    removeFormAttributes(mapFiltersElements);
  })
  .setView({
    lat: 35.69413318846634, 
    lng: 139.95300536692068,
  }, 9);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// создание метки
const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
  // iconAnchor - координаты кончика хвоста метки
});

const mainPinMarker = L.marker(
  {
    lat: 35.69413318846634,
    lng: 139.95300536692068,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const addressInput = document.querySelector('#address');

mainPinMarker.on('moveend', (evt) => {
  addressInput.value = evt.target.getLatLng();
  // getLatLng возвращает объект с новыми координатами
});

// mainPinMarker.remove();

accomodationsAdd.forEach((advertisement) => {
  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker({
    lat: advertisement.location.x,
    lng: advertisement.location.y,
  },
  {
    icon,
  },
  );

  marker
    .addTo(map)
    .bindPopup(
      createAdvertisement(advertisement),
      {
        keepInView: true,
      },
    );
});
