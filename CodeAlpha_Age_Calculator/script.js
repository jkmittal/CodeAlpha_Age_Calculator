const form = document.getElementById('age-form');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const date = new Date(e.target.date.value);
  const today = new Date();
  const birthDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  result.textContent = `Your age is ${age} years.`;
  result.classList.add('show-animation');

  setTimeout(() => {
    result.classList.remove('show-animation');
  }, 500);
});
