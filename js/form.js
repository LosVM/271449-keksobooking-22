import {setFormAttributes, removeFormAttributes} from './page-status.js';

const accommodationType = document.querySelector('#type');
const accommodationPrice = document.querySelector('#price');

accommodationType.addEventListener('change', () => {
  if (accommodationType.value === 'bungalow') {
    accommodationPrice.placeholder = '0';
    accommodationPrice.setAttribute('min', 0);
  } else if (accommodationType.value === 'flat') {
    accommodationPrice.placeholder = '1000';
    accommodationPrice.setAttribute('min', 1000);
  } else if (accommodationType.value === 'house') {
    accommodationPrice.placeholder = '5000';
    accommodationPrice.setAttribute('min', 5000);
  } else if (accommodationType.value === 'palace') {
    accommodationPrice.placeholder = '10000';
    accommodationPrice.setAttribute('min', 10000);
  }
});

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

timeIn.addEventListener('change', () => {
  if (timeIn.value === '12:00') {
    timeOut.value = '12:00';
  } else if (timeIn.value === '13:00') {
    timeOut.value = '13:00';
  } else if (timeIn.value === '14:00') {
    timeOut.value = '14:00';
  }
});

timeOut.addEventListener('change', () => {
  if (timeOut.value === '12:00') {
    timeIn.value = '12:00';
  } else if (timeOut.value === '13:00') {
    timeIn.value = '13:00';
  } else if (timeOut.value === '14:00') {
    timeIn.value = '14:00';
  }
});

const roomsNumber = document.querySelector('#room_number');
const roomsCapacity  = document.querySelector('#capacity');
const capacityItems = roomsCapacity.children;

const removeCapacityAttributes = (index) => {
  roomsCapacity.options[index].removeAttribute('disabled');
};

roomsNumber.addEventListener('change', () => {  
  setFormAttributes(capacityItems);
  
  if (roomsNumber.value === '1') {
    removeCapacityAttributes(2);
    roomsCapacity.value = '1';
  } else if (roomsNumber.value === '2') {
    removeCapacityAttributes(2);
    removeCapacityAttributes(1);
    roomsCapacity.value = '2';
  } else if (roomsNumber.value === '3') {
    removeFormAttributes(capacityItems);
    roomsCapacity.options[3].setAttribute('disabled', 'disabled');
    roomsCapacity.value = '3';
  } else if (roomsNumber.value === '100') {
    removeCapacityAttributes(3);
    roomsCapacity.value = '0';
  }
});
