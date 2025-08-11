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
//Step 3: Add slider existence check
document.addEventListener('DOMContentLoaded', () => {
  const redSlider = document.getElementById('red');
  const greenSlider = document.getElementById('green');
  const blueSlider = document.getElementById('blue');
  const root = document.documentElement;

  if (!redSlider || !greenSlider || !blueSlider) {
    console.error('One or more RGB sliders not found in the DOM.');
    return;
  }
});
//Step 4: Create buildRgbString helper
document.addEventListener('DOMContentLoaded', () => {
  const redSlider = document.getElementById('red');
  const greenSlider = document.getElementById('green');
  const blueSlider = document.getElementById('blue');
  const root = document.documentElement;

  if (!redSlider || !greenSlider || !blueSlider) {
    console.error('One or more RGB sliders not found in the DOM.');
    return;
  }

  function buildRgbString(r, g, b) {
    const rr = Math.min(255, Math.max(0, parseInt(r, 10) || 0));
    const gg = Math.min(255, Math.max(0, parseInt(g, 10) || 0));
    const bb = Math.min(255, Math.max(0, parseInt(b, 10) || 0));
    return `rgb(${rr}, ${gg}, ${bb})`;
  }

  console.log(buildRgbString(255, 100, 50)); // test
});

