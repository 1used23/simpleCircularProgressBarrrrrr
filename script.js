const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;
const input = document.querySelector('.percent');
const text = document.getElementById('progress-ring__text');

input.addEventListener('change', function() {
  setProgress(input.value);
})

function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset
  text.textContent = percent + '%';
}