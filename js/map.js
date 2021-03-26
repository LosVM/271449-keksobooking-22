import {mainForm, mapFilters, mainFormElements, mapFiltersElements, removeFormAttributes} from './page-status.js';
import {renderPlaces} from './render-data.js';

// L - объект библиотеки
/* global L:readonly */
// const L = window.L;

const map = L.map('map-canvas')
  .on('load', () => {
    // событие инициализации карты
    mainForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('ad-form--disabled');
    removeFormAttributes(mainFormElements);
    removeFormAttributes(mapFiltersElements);
  })
  .setView({
    lat: 35.75099366178015, 
    lng: 139.8091531319006,
  }, 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',  {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// создание метки
const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
  // iconAnchor - координаты кончика хвоста метки
});

const mainPinMarker = L.marker(
  {
    lat: 35.75099366178015,
    lng: 139.8091531319006,
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

const addMapMarkers = (places) => {
  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  places.forEach((place) => {
    const marker = L.marker({
      lat: place.location.lat,
      lng: place.location.lng,
    },  {
      icon,
    });

    marker
      .addTo(map)
      .bindPopup(
        renderPlaces(place),
        {
          keepInView: true,
        },
      );
  })
};

export {addMapMarkers};
