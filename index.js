const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action=start]');
const stoptBtn = document.querySelector('[data-action=stop]');
const bodyRef = document.body;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let idTime;

const startColorPicker = () => {
    
    idTime = setInterval(() => {
      const randomID = randomIntegerFromInterval(0, colors.length - 1);
        bodyRef.style.backgroundColor = colors[randomID];        
    }, 1000);
    startBtn.setAttribute('disabled','disabled');
};

const stopColorPicker = () => {
    clearInterval(idTime);
    startBtn.removeAttribute('disabled');
}

startBtn.addEventListener('click', startColorPicker);
stoptBtn.addEventListener('click', stopColorPicker);

