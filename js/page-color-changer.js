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
//Step 5: Create updateBackgroundColor function

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

  function updateBackgroundColor() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;

    const rgb = buildRgbString(r, g, b);
    root.style.backgroundColor = rgb;
    console.log(`Background set to ${rgb}`);
  }
});

//step 6  add slider and input event listner
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

  function updateBackgroundColor() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;
    const rgb = buildRgbString(r, g, b);
    root.style.backgroundColor = rgb;
    console.log(`Background set to ${rgb}`);
  }

  redSlider.addEventListener('input', updateBackgroundColor);
  greenSlider.addEventListener('input', updateBackgroundColor);
  blueSlider.addEventListener('input', updateBackgroundColor);
});

//step7:Set initial color and add contrast adjustment
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

  function updateBackgroundColor() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;
    const rgb = buildRgbString(r, g, b);

    root.style.backgroundColor = rgb;

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    document.documentElement.style.color = luminance > 0.6 ? 'black' : 'white';

    console.log(`Background set to ${rgb}`);
  }

  redSlider.addEventListener('input', updateBackgroundColor);
  greenSlider.addEventListener('input', updateBackgroundColor);
  blueSlider.addEventListener('input', updateBackgroundColor);

  updateBackgroundColor();
});
