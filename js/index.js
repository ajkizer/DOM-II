// // Your code goes here
// * [ ] `Click`
// * [ ] `mouseover`
// * [ ] `mouseout`
// * [ ] `keydown`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`

//selectors
const navLink = document.querySelectorAll(".nav a");
const logo = document.querySelector(".logo-heading");
const nav = document.querySelector(".main-navigation");
const body = document.querySelector("body");
const intro = document.querySelector(".intro");
const image = document.querySelector(".intro img");

nav.style.zIndex = "50";

//event listeners
window.addEventListener("mouseup", funBus);
window.addEventListener("resize", resize);
document.addEventListener("copy", copy);
logo.addEventListener("click", turn);
logo.addEventListener("transitionstart", whoa);
logo.addEventListener("transitionend", funBus);

intro.addEventListener("click", toggleShow);

image.addEventListener("contextmenu", getBig);
image.addEventListener("click", shrink);

navLink.forEach(el => el.addEventListener("mouseover", scaleUp));
navLink.forEach(el => el.addEventListener("mouseout", scaleDown));
navLink.forEach(el => el.addEventListener("click", preventDefault));

document.addEventListener("keydown", darkMode);
document.addEventListener("dblclick", dbl);

TweenMax.staggerFrom(
  ".nav-link",
  3,
  { opacity: 0, rotation: 360, delay: 0.5 },
  0.5
);

//Functions

let showIntro = true;
function toggleShow() {
  if (showIntro) {
    intro.textContent = "where did the intro go?";
    showIntro = false;
  } else {
    intro.textContent = "no, really...where did it go?";
    showIntro = true;
  }
}

function preventDefault(e) {
  e.preventDefault();
}

function resize() {
  logo.textContent = `Window size: ${window.innerHeight} x ${
    window.innerWidth
  }`;
}

function copy() {
  alert("copied text");
}

function shrink(e) {
  image.style.transform = "scale(1,1)";
  image.style.zIndex = "-1";
  e.stopPropagation();
}

function getBig(e) {
  image.style.transform = "scale(1.1,1.1)";
  e.stopPropagation();
}

function dbl(e) {
  console.log(e.target);
  console.log(`You double clicked on an ${e.target}`);
}

function whoa() {
  logo.textContent = "WHOA!!";
}

function funBus() {
  logo.textContent = "Fun Bus";
}
let count = 0;
function turn() {
  count += 360;
  logo.style.transition = "1s ease-in";
  logo.style.transform = `rotate(${count}deg)`;
}

function scaleUp(e) {
  navLink.forEach(el => {
    if (el === e.target) {
      el.style.transition = ".1s ease-in";
      el.style.transform = "scale(1.1, 1.1)";
    }
  });
}

function scaleDown(e) {
  navLink.forEach(el => {
    if (el === e.target) {
      el.style.transition = ".1s ease-in";
      el.style.transform = "scale(1, 1)";
    }
  });
}

keyArr = [];
document.addEventListener("keydown", addArr);

function addArr(e) {
  keyArr.push(e.keyCode.toString(10));
}

let toggle = false;
function darkMode() {
  if (keyArr.includes("16") && keyArr.includes("68")) {
    if (toggle === false) {
      body.style.color = "white";
      body.style.background = "black";
      nav.style.background = "black";
      navLink.forEach(link => (link.style.color = "white"));
      keyArr = [];
      toggle = true;
    } else {
      body.style.color = "black";
      body.style.background = "white";
      nav.style.background = "white";
      navLink.forEach(link => (link.style.color = "black"));
      keyArr = [];
      toggle = false;
    }
  }
}
