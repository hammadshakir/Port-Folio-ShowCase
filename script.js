const home1 = document.querySelector("#home")
const about1 = document.querySelector("#about")
const skill1 = document.querySelector("#skills")
const project1 = document.querySelector("#projects")
const contact1 = document.querySelector("#contact")

const home3 = document.querySelector("#home-bar")
const about3 = document.querySelector("#about-bar")
const skill3 = document.querySelector("#skill-bar")
const project3 = document.querySelector("#project-bar")
const contact3 = document.querySelector("#contact-bar")

const home2 = document.querySelector(".intro")
const about2 = document.querySelector(".about")
const skill2 = document.querySelector(".skills")
const project2 = document.querySelector(".project")
const contact2 = document.querySelector(".contact-area")


home1.addEventListener("click",()=>{
    home2.scrollIntoView({behavior:"smooth",block:"center"})
})
about1.addEventListener("click",()=>{
    about2.scrollIntoView({behavior:"smooth",block:"center"})
})
skill1.addEventListener("click",()=>{
    skill2.scrollIntoView({behavior:"smooth",block:"center"})
})
project1.addEventListener("click",()=>{
    project2.scrollIntoView({behavior:"smooth",block:"center"})
})
contact1.addEventListener("click",()=>{
    contact2.scrollIntoView({behavior:"smooth",block:"center"})
})

home3.addEventListener("click",()=>{
    home2.scrollIntoView({behavior:"smooth",block:"center"})
})
about3.addEventListener("click",()=>{
    about2.scrollIntoView({behavior:"smooth",block:"center"})
})
skill3.addEventListener("click",()=>{
    skill2.scrollIntoView({behavior:"smooth",block:"center"})
})
project3.addEventListener("click",()=>{
    project2.scrollIntoView({behavior:"smooth",block:"center"})
})
contact3.addEventListener("click",()=>{
    contact2.scrollIntoView({behavior:"smooth",block:"center"})
})


  AOS.init({
    duration: 1000,  // 1 second animation
    once: false        // only once animate
  });

  const git = document.querySelector("#git-app")
  git.addEventListener("click",()=>{
window.location.href="again.html"
  })
const tic = document.querySelector("#tic-app")
  tic.addEventListener("click",()=>{
window.location.href="tic.html"
  })
  const weather = document.querySelector("#weather-app")
  weather.addEventListener("click",()=>{
window.location.href="weather.html"
  })
  const clock = document.querySelector("#clock-app")
  clock.addEventListener("click",()=>{
window.location.href="clock.html"
  })
// Select all hover-box elements
const boxes = document.querySelectorAll(".hover-box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Toggle "active" class on tap
    box.classList.toggle("active");
  });
});
const icon = document.querySelector("#icon");
const menu = document.querySelector(".hover-menu");

icon.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!icon.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("active");
  }
});
