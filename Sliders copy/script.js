window.onload = function(){
  slideOne();
  slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 1;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
const checkbox = document.getElementById("checkbox");
const valuesContainer = document.getElementById("values-container");
const textContainer = document.getElementById("text-box-container");
const textInput = document.getElementById("text-input");
const submitTextBtn = document.getElementById("submit-text-btn");
let startHour = parseFloat(getHours() + (getMinutes() / 100));
let endHour = parseFloat(getHours() + (getMinutes() / 100));
let sliderOneDay1 = document.getElementById("slider-day1-1");
let sliderTwoDay1 = document.getElementById("slider-day1-2");






checkbox.addEventListener("change", function() {
  if (!this.checked) {
    sliderOne.disabled = true;
    sliderTwo.disabled = true;
    sliderTrack.style.background = "#dadae5";
    valuesContainer.classList.add("hidden");
    textContainer.classList.add("hidden");
    } else {
    sliderOne.disabled = false;
    sliderTwo.disabled = false;
    fillColor();
    valuesContainer.classList.remove("hidden");
    textContainer.classList.remove("hidden"); 
    resetSlideOneToCurrentTime();
  }
});

function resetSlideOneToCurrentTime() {
  sliderOne.value = startHour;
  slideTwo();
  slideOne(); 
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
function fillColor(){
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}
