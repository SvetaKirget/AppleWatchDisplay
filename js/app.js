function createClock() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let year = date.getFullYear();

  if (hours < 10) hours = `0` + hours;
  if (minutes < 10) minutes = `0` + minutes;
  let clock = hours + `:` + minutes;
  document.getElementById(`clock`).innerHTML = clock;
  document.getElementById(`year`).innerHTML = year;
  setInterval(createClock(), 1000);
};

createClock();