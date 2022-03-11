const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

setInterval(() => {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hour = date.getHours();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hourDegrees = (hour / 12) * 360 + 90;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
}, 1000);
