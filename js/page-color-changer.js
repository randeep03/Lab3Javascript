// Wait until the DOM is fully loaded because the script is loaded in <head>
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
});
document.addEventListener('DOMContentLoaded', () => {
  const redSlider = document.getElementById('red');
  const greenSlider = document.getElementById('green');
  const blueSlider = document.getElementById('blue');

  const root = document.documentElement;

  console.log(redSlider, greenSlider, blueSlider, root);
});
