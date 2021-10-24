// get analogClock html element
const analogClock = document.querySelector(".analog_clock");

//maintaining ratio of the parent element
analogClock.style.height = analogClock.offsetWidth+"px";
window.onresize = ()=>{
 analogClock.style.height = analogClock.offsetWidth+"px";
};

//creating and adding content to .analog_clock

//number bar container
let numberContainer = document.createElement("DIV");
numberContainer.setAttribute("class", "analog_clock_number_container");
analogClock.appendChild(numberContainer);

//adding 12 number bar
for(let i=1; i<=12; i++) {
 var number = document.createElement("DIV");
 number.style.transform=`rotate(${i*30}deg)`;
 if(i%3==0) {
  number.setAttribute("class", `analog_clock_number analog_clock_number_${i} analog_clock_number_milestone`);
 } else {
  number.setAttribute("class", `analog_clock_number analog_clock_number_${i}`);
 }
 numberContainer.appendChild(number);
}



//adding clock hands

// adding clock hand container first
const clockHandContainer = document.createElement("DIV");
clockHandContainer.setAttribute("class", "analog_clock_hand_container");
analogClock.appendChild(clockHandContainer);




// adding hour hand

const clockHourHandWrapper = document.createElement("DIV");
clockHourHandWrapper.setAttribute("class", "analog_clock_hour_wrapper analog_clock_wrapper");
clockHandContainer.appendChild(clockHourHandWrapper);


const clockHourHand = document.createElement("DIV");
clockHourHand.setAttribute("class", "analog_clock_hand analog_clock_hour_hand");
clockHourHandWrapper.appendChild(clockHourHand);



// adding minute hand
const clockMinHandWrapper = document.createElement("DIV");
clockMinHandWrapper.setAttribute("class", "analog_clock_min_wrapper analog_clock_wrapper");
clockHandContainer.appendChild(clockMinHandWrapper);

const clockMinuteHand = document.createElement("DIV");
clockMinuteHand.setAttribute("class", "analog_clock_hand analog_clock_minute_hand");
clockMinHandWrapper.appendChild(clockMinuteHand);


// adding second hand
const clockSecHandWrapper = document.createElement("DIV");
clockSecHandWrapper.setAttribute("class", "analog_clock_sec_wrapper analog_clock_wrapper");
clockHandContainer.appendChild(clockSecHandWrapper);

const clockSecondHand = document.createElement("DIV");
clockSecondHand.setAttribute("class", "analog_clock_hand analog_clock_second_hand");
clockSecHandWrapper.appendChild(clockSecondHand);

// adding hand cap

const handCap = document.createElement("DIV");
handCap.setAttribute("class", "analog_clock_hand_cap");
clockHandContainer.appendChild(handCap);







//time setting
const currentTime = new Date();
let analog_clock_seconds = currentTime.getSeconds();
let analog_clock_minutes = currentTime.getMinutes();
let analog_clock_hours = currentTime.getHours();

document.querySelector(".analog_clock_sec_wrapper").style.transform = `rotate(${6*analog_clock_seconds}deg)`;

document.querySelector(".analog_clock_min_wrapper").style.transform = `rotate(${
 (6*analog_clock_minutes) + (analog_clock_seconds/10)
}deg)`;

document.querySelector(".analog_clock_hour_wrapper").style.transform = `rotate(${
 (analog_clock_hours*30)+ (analog_clock_minutes/2) + (analog_clock_seconds/10)
}deg)`;