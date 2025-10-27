const display = document.querySelector(".display");
const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const reset = document.querySelector(".reset");
const back = document.querySelector(".back")

byDefault = "00:00:00";
let second = 0;
let minute = 0;
let hour = 0;
let interval;
let isRunning = false;

btnStart.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(() => {
        if (second === 60) {
            second = 0;
      minute++;
    }
    if (minute === 60) {
      minute = 0;
      hour++;
    }
    second++;
    let sec = second < 10 ? "0" + second : second;
    let min = minute < 10 ? "0" + minute : minute;
    let hr = hour < 10 ? "0" + hour : hour;
    display.innerHTML = `${hr}:${min}:${sec}`;
}, 1000);
}
});

btnStop.addEventListener("click", () => {
  clearInterval(interval);
  isRunning = false;
});

reset.addEventListener("click", () => {
  second = 0;
  minute = 0;
  hour = 0;
  clearInterval(interval);
  display.innerHTML = byDefault;
  isRunning = false;
});


  back.addEventListener("click", () => {
    window.location.href = "clock.html";
  });

