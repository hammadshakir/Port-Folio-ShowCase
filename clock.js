const clock = document.querySelector(".clock");
const toggle = document.getElementById("themeToggle");
const newPage = document.querySelector(".-stopwatch");
const body = document.body;

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  const format = (num) => num.toString().padStart(2, "0");

  clock.innerText = `${format(hours)}:${format(minutes)}:${format(seconds)} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();

toggle.addEventListener("change", () => {
  body.classList.toggle("night", toggle.checked);
});

newPage.addEventListener("click", () => {
  window.location.href = "stopwatch.html";
});
  
