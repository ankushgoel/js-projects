const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[parseInt(Math.random() * 16)];
  }
  return color;
};

let changeColorInterval;
const startChangingColor = function () {
  changeColorInterval = setInterval(function () {
    document.body.style.backgroundColor = randomColor();
  }, 1000);
};

const stopChangingColor = function () {
  clearInterval(changeColorInterval);
  changeColorInterval = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);