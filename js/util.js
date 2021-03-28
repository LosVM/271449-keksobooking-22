// функция для получения рандомного целого числа 
const getRandomInteger = (min, max) => {
  if (max <= min) {
    return null;
  }
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

// функция для получения рандомного дробного числа 
const getRandomFraction = (min, max, numberLength) => {
  if (max <= min) {
    return null;
  }
  const rand = min + Math.random() * (max + 0.1 - min);
  return +rand.toFixed(numberLength);
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  
  alertContainer.textContent = message;
  
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 6000);
}

export {getRandomInteger, getRandomFraction, showAlert};
