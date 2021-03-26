import './util.js';
import './data.js';
import './render-data.js';
import './page-status.js';
import './map.js';
import './form.js';
import './fetch.js';

import {addMapMarkers} from './map.js';
import {showAlert} from './util.js'; 

fetch ('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((places) => {
    addMapMarkers(places);
  })
  .catch(() => {
    showAlert('Данные не загрузились. Пожалуйста, перезагрузите страницу!');    
  });
