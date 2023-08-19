window.onload = function() {
  slideOne();
  slideTwo();
  slideTuesdayOne();
  slideTuesdayTwo();
  slidewednesdayOne();
  slidewednesdayTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let sliderTuesdayOne = document.getElementById("slider-tuesday-1");
let sliderTuesdayTwo = document.getElementById("slider-tuesday-2");
let sliderwednesdayOne = document.getElementById("slider-wednesday-1");
let sliderwednesdayTwo = document.getElementById("slider-wednesday-2");



let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let displayValTuesdayOne = document.getElementById("range1-tuesday");
let displayValTuesdayTwo = document.getElementById("range2-tuesday");
let displayValwednesdayOne = document.getElementById("range1-tuesday");
let displayValwednesdayTwo = document.getElementById("range2-tuesday");



let minGap = 1;
let sliderTrack = document.querySelector(".slider-track");
let sliderTrackTuesday = document.querySelector(".slider-track-tuesday");
let sliderMaxValue = parseFloat(sliderOne.max);
const checkbox = document.getElementById("checkbox");
const tuesdayCheckbox = document.getElementById("tuesday-checkbox");
const valuesContainer = document.getElementById("values-container");
const valuesContainerTuesday = document.getElementById("values-container-tuesday");
const valuesContainerwednesday = document.getElementById("values-container-tuesday");



const textContainer = document.getElementById("text-box-container");
const textInput = document.getElementById("text-input");
const submitTextBtn = document.getElementById("submit-text-btn");
let startHour = parseFloat(getHours() + (getMinutes() / 100));
let endHour = parseFloat(getHours() + (getMinutes() / 100));
let TextBoxFlag;
const mondayCheckbox = document.getElementById("checkbox");
let MondaySlider;
let TuersdaySlider;
let wednesdaySlider;

function TextBoxOpen() {
  if (TextBoxFlag && (MondaySlider == true || TuersdaySlider == true)) {
    textContainer.classList.remove("hidden");
  } else {
    textContainer.classList.add("hidden");
  }
}

mondayCheckbox.addEventListener("change", function () {
  if (!this.checked) {
    MondaySlider = false;
    TextBoxOpen();
    sliderOne.disabled = true;
    sliderTwo.disabled = true;
    sliderTuesdayOne.disabled = true;
    sliderTuesdayTwo.disabled = true;
    sliderTrack.style.background = "#dadae5";
    valuesContainer.classList.add("hidden");
  } else {
    TextBoxFlag = true;
    MondaySlider = true;
    sliderOne.disabled = false;
    sliderTwo.disabled = false;
    if (tuesdayCheckbox.checked) {
      sliderTuesdayOne.disabled = false;
      sliderTuesdayTwo.disabled = false;
    }
    fillColor();

    valuesContainer.classList.remove("hidden");
    if (tuesdayCheckbox.checked) {
      valuesContainerTuesday.classList.remove("hidden");
    }
    TextBoxOpen();

    resetSlideOneToCurrentTime();
  }
});


tuesdayCheckbox.addEventListener("change", function () {
  if (this.checked) {
    TuersdaySlider = true;
    TextBoxFlag = true;
    sliderTuesdayOne.disabled = false;
    sliderTuesdayTwo.disabled = false;
    slideTuesdayOne();
    slideTuesdayTwo();
    valuesContainerTuesday.classList.remove("hidden");
  } else {
    TuersdaySlider = false;
    sliderTuesdayOne.disabled = true;
    sliderTuesdayTwo.disabled = true;
    valuesContainerTuesday.classList.add("hidden");
  }
  TextBoxOpen();
  resetSlideOneToCurrentTime();
  fillColorTuesday();
});


wednesdayCheckbox.addEventListener("change", function () {
  if (this.checked) {
    wednesdaySlider = true;
    TextBoxFlag = true;
    sliderwednesdayOne.disabled = false;
    sliderwednesdayTwo.disabled = false;
    slideTuesdayOne();
    slideTuesdayTwo();
    valuesContainerwednesday.classList.remove("hidden");
  } else {
    wednesdaySlider = false;
    sliderwednesdayOne.disabled = true;
    sliderwednesdayTwo.disabled = true;
    valuesContainerwednesday.classList.add("hidden");
  }
  TextBoxOpen();
  resetSlideOneToCurrentTime();
  fillColorTuesday();
});


function slidewednesdayOne() {
  if (parseFloat(sliderwednesdayTwo.value) - parseFloat(sliderwednesdayTwo.value) <= minGap) {
    sliderwednesdayOne.value = parseFloat(sliderwednesdayTwo.value) - minGap;
  }
  if (sliderwednesdayOne.value <= 11) {
    displayValwednesdayOne.textContent = formatTimeValue(sliderwednesdayOne.value) + " Am";
  } else {
    displayValwednesdayOne.textContent = formatTimeValue(sliderwednesdayOne.value) + " Pm";
  }
  fillColorwednesday();
} 
function slidewednesdaytwo() {
  if (parseFloat(sliderwednesdayTwo.value) - parseFloat(sliderwednesdayOne.value) <= minGap) {
    sliderwednesdayTwo.value = parseFloat(sliderwednesdayOne.value) + minGap;
  }
  if (sliderwednesdayOne.value <= 11) {
    displayValwednesdayTwo.textContent = formatTimeValue(sliderwednesdayTwo.value) + " Pm";
  } else {
    displayValwednesdayTwo.textContent = formatTimeValue(sliderwednesdayTwo.value) + " Am";
  }
  fillColorTuesday();
}

function slideTuesdayOne() {
  if (parseFloat(sliderTuesdayTwo.value) - parseFloat(sliderTuesdayOne.value) <= minGap) {
    sliderTuesdayOne.value = parseFloat(sliderTuesdayTwo.value) - minGap;
  }
  if (sliderTuesdayOne.value <= 11) {
    displayValTuesdayOne.textContent = formatTimeValue(sliderTuesdayOne.value) + " Am";
  } else {
    displayValTuesdayOne.textContent = formatTimeValue(sliderTuesdayOne.value) + " Pm";
  }
  fillColorTuesday();
}

function slideTuesdayTwo() {
  if (parseFloat(sliderTuesdayTwo.value) - parseFloat(sliderTuesdayOne.value) <= minGap) {
    sliderTuesdayTwo.value = parseFloat(sliderTuesdayOne.value) + minGap;
  }
  if (sliderTuesdayOne.value <= 11) {
    displayValTuesdayTwo.textContent = formatTimeValue(sliderTuesdayTwo.value) + " Pm";
  } else {
    displayValTuesdayTwo.textContent = formatTimeValue(sliderTuesdayTwo.value) + " Am";
  }
  fillColorTuesday();
}

function resetSlideOneToCurrentTime() {
  sliderOne.value = parseFloat(getHours() + (getMinutes() / 100));
  sliderTwo.value = parseFloat(getHours() + (getMinutes() / 100));
  slideOne();
  slideTwo();
  slideTuesdayOne();
  slideTuesdayTwo();
}
function getHours() {
    var now = new Date();
    return now.getHours();
}

function getMinutes() {
    var now = new Date();
    return now.getMinutes();
}

sliderOne.value = parseFloat(getHours() + (getMinutes() / 100));
sliderTwo.value = parseFloat(getHours() + (getMinutes() / 100));
slideOne();
slideTwo();

function formatTimeValue(value) {
    var hours = Math.floor(value);
    var minutes = Math.round((value - hours) * 100);
    return hours
}


submitTextBtn.addEventListener("click", function () {
  const enteredText = textInput.value;
  startHour = parseFloat(sliderOne.value);
  endHour = parseFloat(sliderTwo.value);

  const submittedTextElement = document.getElementById("submitted-text");
  if(startHour <= 11 && endHour <= 12){
    submittedTextElement.textContent =  "Output: " + enteredText+ " (" + "Start:_ " +startHour +" Am" + "_End:" +endHour + "_Am)";
  }else if(startHour <= 11 && endHour >= 12){
    submittedTextElement.textContent = "Output: " + enteredText+ " (" + "Start:_" +startHour +" Am" + "_End:" +endHour + "_Pm)";
  }else if(startHour >= 12 && endHour >= 13){
    submittedTextElement.textContent = "Output: " + enteredText+ " (" + "Start:_" +startHour +" Pm" + "_End:" +endHour + "_Pm)";
  }
  textInput.value = "";
});

function slideOne(){
  if(parseFloat(sliderTwo.value) - parseFloat(sliderOne.value) <= minGap){
      sliderOne.value = parseFloat(sliderTwo.value)- minGap;
  }
  if(sliderOne.value <= 11){
    displayValOne.textContent = formatTimeValue(sliderOne.value) + " Am";
  }else{
    displayValOne.textContent = formatTimeValue(sliderOne.value) +" Pm";
  }
  fillColor();
}
function slideTwo(){
  if(parseFloat(sliderTwo.value) - parseFloat(sliderOne.value) <= minGap){
      sliderTwo.value = parseFloat(sliderOne.value) + minGap;
  }
  if(sliderTwo.value >= 11){
    displayValTwo.textContent = formatTimeValue(sliderTwo.value) + " Pm";
  }else{
    displayValTwo.textContent = formatTimeValue(sliderTwo.value) + " Am";

  }
  fillColor();
}

function slideDayTwo(slider, displayVal) {
  if (parseFloat(sliderTwo.value) - parseFloat(slider.value) <= minGap) {
    slider.value = parseFloat(slider.value) + minGap;
  }
  if (slider.value >= 11) {
    displayVal.textContent = formatTimeValue(slider.value) + " Pm";
  } else {
    displayVal.textContent = formatTimeValue(slider.value) + " Am";
  }
  fillColor();
}

function slideDayTwo(slider, displayVal) {
  if (parseFloat(sliderTwo.value) - parseFloat(slider.value) <= minGap) {
    slider.value = parseFloat(slider.value) + minGap;
  }
  if (slider.value >= 11) {
    displayVal.textContent = formatTimeValue(slider.value) + " Pm";
  } else {
    displayVal.textContent = formatTimeValue(slider.value) + " Am";
  }
  fillColor();
}


function fillColor(){
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}
function fillColorTuesday() {
  const percent1 = (sliderTuesdayOne.value / sliderMaxValue) * 100;
  const percent2 = (sliderTuesdayTwo.value / sliderMaxValue) * 100;
  sliderTrackTuesday.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #3264fe ${percent1}%, #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}
function fillColorwednesday() {
  const percent1 = (sliderwednesdayOne.value / sliderMaxValue) * 100;
  const percent2 = (sliderwednesdayTwo.value / sliderMaxValue) * 100;
  sliderTrackwednesday.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #3264fe ${percent1}%, #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}
