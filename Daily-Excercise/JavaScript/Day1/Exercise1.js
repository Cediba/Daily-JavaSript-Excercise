const d = new Date ();
const weekDays = ["sunday","monday","tuesday","wednsday",
"thursday","friday","saturday",];
const getToday = weekDays[d.getDay()];
console.log(`Today is: ${getToday}`);

const
hour = d.getHours(),
minutes = d.getMinutes()
seconds = d.getSeconds();

let prepand = (hour < 12) ? 'AM' : 'PM',
currentTime = () => (`Current time is:  
${hour} ${prepand} ${minutes} : ${seconds}`)
console.log(currentTime());


// print today's day
const timeDisplay = document.querySelector('#timeDisplay');
const dayDisplay = `Today is : ${getToday}
Current Time is: ${hour} PM : ${minutes} : ${seconds}`;

// document.getElementById('timeDisplay').innerHTML = currentTime();
timeDisplay.insertAdjacentHTML('afterbegin', dayDisplay);

