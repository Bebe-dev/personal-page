var day = document.getElementById('day');
var time = document.getElementById('time');
var utcTime = document.getElementById('utc')

const getDay = () => {
  const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const dayNumber = currentDate.getDay()
  day.innerHTML = `Day: ${week[dayNumber]}`
}
getDay()

const getTime = () => {
  const currentDate = new Date();
  var currentHour = currentDate.getHours() - 1;
  if (currentHour<10){
    currentHour = `0${currentHour}`
  }
  var currentMinutes = currentDate.getMinutes();
  if (currentMinutes<10){
    currentMinutes = `0${currentMinutes}`
  }
  var currentSeconds = currentDate.getSeconds();
  if (currentSeconds<10){
    currentSeconds = `0${currentSeconds}`
  }
  time.innerHTML = `Time: ${currentHour}:${currentMinutes}:${currentSeconds}`

}
setInterval(getTime, 1000);