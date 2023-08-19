window.onload = function() {
  slideOne();
  slideTwo();
  slideTuesdayOne();
  slideTuesdayTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let sliderTuesdayOne = document.getElementById("slider-tuesday-1");
let sliderTuesdayTwo = document.getElementById("slider-tuesday-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let displayValTuesdayOne = document.getElementById("range1-tuesday");
let displayValTuesdayTwo = document.getElementById("range2-tuesday");
let minGap = 1;
let sliderMaxValue = parseFloat(sliderOne.max);

const checkbox = document.getElementById("checkbox");
const tuesdayCheckbox = document.getElementById("tuesday-checkbox");
const valuesContainer = document.getElementById("values-container");
const valuesContainerTuesday = document.getElementById("values-container-tuesday");
const textContainer = document.getElementById("text-box-container");
const textInput = document.getElementById("text-input");
const submitTextBtn = document.getElementById("submit-text-btn");

let startHour = parseFloat(getHours() + (getMinutes() / 100));
let endHour = parseFloat(getHours() + (getMinutes() / 100));
let TextBoxFlag;
let MondaySlider;
let TuesdaySlider;
sliderTuesdayOne.addEventListener("input", slideTuesdayOne);
sliderTuesdayTwo.addEventListener("input", slideTuesdayTwo);

// Wednesday sliders

sliderWednesdayOne.addEventListener("input", slideWednesdayOne);
sliderWednesdayTwo.addEventListener("input", slideWednesdayTwo);

// Thursday sliders

sliderThursdayOne.addEventListener("input", slideThursdayOne);
sliderThursdayTwo.addEventListener("input", slideThursdayTwo);


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

tuesdayCheckbox.addEventListener("change", function() {
  if (this.checked) {
    TuesdaySlider = true;
    TextBoxFlag = true;
    sliderTuesdayOne.disabled = false;
    sliderTuesdayTwo.disabled = false;
    slideTuesdayOne();
    slideTuesdayTwo();
    valuesContainerTuesday.classList.remove("hidden");
  } else {
    TuesdaySlider = false;
    sliderTuesdayOne.disabled = true;
    sliderTuesdayTwo.disabled = true;
    valuesContainerTuesday.classList.add("hidden");
  }
  TextBoxOpen();
  resetSlideOneToCurrentTime(); // Call the function with parentheses
  fillColorTuesday(); // Call the function to fill color and add tracking line
});

wednesdayCheckbox.addEventListener("change", function() {
  if (this.checked) {
    WednesdaySlider = true;
    TextBoxFlag = true;
    sliderWednesdayOne.disabled = false;
    sliderWednesdayTwo.disabled = false;
    slideWednesdayOne(); // Call appropriate function
    slideWednesdayTwo(); // Call appropriate function
    valuesContainerWednesday.classList.remove("hidden"); // Make sure you have valuesContainerWednesday in your HTML
  } else {
    WednesdaySlider = false;
    sliderWednesdayOne.disabled = true;
    sliderWednesdayTwo.disabled = true;
    valuesContainerWednesday.classList.add("hidden");
  }
  TextBoxOpen();
  resetSlideOneToCurrentTime(); // Call the function with parentheses
  fillColorWednesday(); // Call the function to fill color and add tracking line for Wednesday
});

thursdayCheckbox.addEventListener("change", function() {
  if (this.checked) {
    ThursdaySlider = true;
    TextBoxFlag = true;
    sliderThursdayOne.disabled = false;
    sliderThursdayTwo.disabled = false;
    slideThursdayOne();
    slideThursdayTwo();
    valuesContainerThursday.classList.remove("hidden"); // Make sure you have valuesContainerThursday in your HTML
  } else {
    ThursdaySlider = false;
    sliderThursdayOne.disabled = true;
    sliderThursdayTwo.disabled = true;
    valuesContainerThursday.classList.add("hidden");
  }
  TextBoxOpen();
  resetSlideOneToCurrentTime(); // Call the function with parentheses
  fillColorThursday(); // Call the function to fill color and add tracking line for Thursday
});


  const sliderWednesdayOne = document.getElementById("slider-Wednesday-1");
  const sliderWednesdayTwo = document.getElementById("slider-Wednesday-2");
  
  sliderWednesdayOne.addEventListener("input", slideWednesdayOne);
  sliderWednesdayTwo.addEventListener("input", slideWednesdayTwo);
  const sliderThursdayOne = document.getElementById("slider-Thursday-1");
const sliderThursdayTwo = document.getElementById("slider-Thursday-2");

sliderThursdayOne.addEventListener("input", slideThursdayOne);
sliderThursdayTwo.addEventListener("input", slideThursdayTwo);


function slideDayTwo() {
  if (parseFloat(sliderTwo.value) - parseFloat(sliderOne.value) <= minGap) {
    sliderTwo.value = parseFloat(sliderTwo.value) + minGap; // Change to sliderTwo.value
  }
  if (sliderTwo.value >= 11) {
    displayValTwo.textContent = formatTimeValue(sliderTwo.value) + " Pm";
  } else {
    displayValTwo.textContent = formatTimeValue(sliderTwo.value) + " Am";
  }
  fillColor();
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
  sliderOne.value = startHour;
  slideTwo();
  slideOne(); 
  slideDayOne();
  slideDayTwo();
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

function slideDayOne(slider, displayVal) {
  if (parseFloat(sliderTwo.value) - parseFloat(slider.value) <= minGap) {
    slider.value = parseFloat(sliderTwo.value) - minGap;
  }
  if (slider.value <= 11) {
    displayVal.textContent = formatTimeValue(slider.value) + " Am";
  } else {
    displayVal.textContent = formatTimeValue(slider.value) + " Pm";
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

