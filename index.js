var day = document.getElementById('day');
var time = document.getElementById('time');
var utcTime = document.getElementById('utc')
const currentDate = new Date();
const getDay = () => {
  const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const dayNumber = currentDate.getDay()
  day.innerHTML = `Day: ${week[dayNumber]}`
}
getDay()

const getTime = () => {
  var currentHour = currentDate.getHours() - 1;
  if (currentHour<10){
    currentHour = `0${currentHour}`
  }
  var currentMinutes = currentDate.getMinutes();
  if (currentMinutes<10){
    currentMinutes = `0${currentMinutes}`
  }
  time.innerHTML = `Time: ${currentHour}:${currentMinutes}`

}
getTime()