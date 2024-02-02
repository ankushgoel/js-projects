const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[parseInt(Math.random() * 16)];
  }
  return color;
};

const setBGColor = function() {
    document.body.style.backgroundColor = randomColor();
}

let changeColorInterval;
const startChangingColor = function () {
  if (!changeColorInterval) {
    setBGColor()
    changeColorInterval = setInterval(setBGColor, 1000);
  }
};

const stopChangingColor = function () {
  clearInterval(changeColorInterval);
  changeColorInterval = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);