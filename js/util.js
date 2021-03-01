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

export {getRandomInteger, getRandomFraction};
