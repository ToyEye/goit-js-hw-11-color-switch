

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
    const randomID = randomIntegerFromInterval(0, 5);
    idTime = setInterval(() => {
        // bodyRef.style.backgroundColor = colors[0];
    }, 1000);
};

const stopColorPicker = () => {
    clearInterval(idTime);
}

startBtn.addEventListener('click', startColorPicker);
stoptBtn.addEventListener('click', stopColorPicker);

// ingredients.forEach(ingredient => {
//    const li = document.createElement('li');
//    listEl.appendChild(li);
//    li.textContent = ingredient;
// });