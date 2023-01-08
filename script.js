"use strict";

// TEST TUBE
const monEl = document.querySelector(".mon");
const tueEl = document.querySelector(".tue");
const wedEl = document.querySelector(".wed");
const thuEl = document.querySelector(".thu");
const friEl = document.querySelector(".fri");
const satEl = document.querySelector(".sat");
const sunEl = document.querySelector(".sun");
const days = document.querySelectorAll(".days");

// TEXTBOX
const monTextBox = document.querySelector("#mon");
const tueTextBox = document.querySelector("#tue");
const wedTextBox = document.querySelector("#wed");
const thuTextBox = document.querySelector("#thu");
const friTextBox = document.querySelector("#fri");
const satTextBox = document.querySelector("#sat");
const sunTextBox = document.querySelector("#sun");

// DISPLAY AND HIDE
const toggle = function (testTube, box) {
  testTube.classList.add("display");
  box.classList.remove("hide");
  if (testTube != monEl) {
    monEl.classList.remove("display");
    monTextBox.classList.add("hide");
  }
  if (testTube != tueEl) {
    tueEl.classList.remove("display");
    tueTextBox.classList.add("hide");
  }
  if (testTube != wedEl) {
    wedEl.classList.remove("display");
    wedTextBox.classList.add("hide");
  }
  if (testTube != thuEl) {
    thuEl.classList.remove("display");
    thuTextBox.classList.add("hide");
  }
  if (testTube != friEl) {
    friEl.classList.remove("display");
    friTextBox.classList.add("hide");
  }
  if (testTube != satEl) {
    satEl.classList.remove("display");
    satTextBox.classList.add("hide");
  }
  if (testTube != sunEl) {
    sunEl.classList.remove("display");
    sunTextBox.classList.add("hide");
  }
};

// FUNCTION CALL
monEl.addEventListener("click", function () {
  toggle(monEl, monTextBox);
});
tueEl.addEventListener("click", function () {
  toggle(tueEl, tueTextBox);
});
wedEl.addEventListener("click", function () {
  toggle(wedEl, wedTextBox);
});
thuEl.addEventListener("click", function () {
  toggle(thuEl, thuTextBox);
});
friEl.addEventListener("click", function () {
  toggle(friEl, friTextBox);
});
satEl.addEventListener("click", function () {
  toggle(satEl, satTextBox);
});
sunEl.addEventListener("click", function () {
  toggle(sunEl, sunTextBox);
});
