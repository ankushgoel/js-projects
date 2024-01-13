const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (!height || isNaN(height)) {
    results.innerHTML = `Please provide a valid height in cm`;
  } else if (!weight || isNaN(weight)) {
    results.innerHTML = `Please provide a valid weight in kg`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
