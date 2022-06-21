function createClock() {
  const date = new Date();

  let hours = date.getHours(),
    minutes = date.getMinutes(),
    year = date.getFullYear();

  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;
  const clock = `${hours}:${minutes}`;
  
  document.getElementById(`clock`).innerHTML = clock;
  document.getElementById(`year`).innerHTML = year;

  setTimeout("createClock()", 1000);
}
createClock();
