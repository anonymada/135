var hours = 0,
  minute = 0,
  second = 0,
  milisecond = 0;

let interHours, interMinutes, interSecond, interMiliSecond;

let listInter = [];

function setMilisecond() {
  if (milisecond == 999) {
    milisecond = 0;
  }
  milisecond += 1;
  document.getElementById("mili-second").innerHTML = milisecond + "ms";
}

function setSecond() {
  // commentaire modifié
  if (second == 59) {
    second = 0;
  }
  second += 1;
  document.getElementById("second").innerHTML = second + "s ";
}

function setMinute() {
  if (minute == 59) {
    minute = 0;
  }
  minute += 1;
  document.getElementById("minute").innerHTML = minute + "min ";
}

function setHours() {
  if (hours == 23) {
    hours = 0;
  }
  hours += 1;
  document.getElementById("hours").innerHTML = hours + "h ";
}

function start() {
  interHours = setInterval(setHours, 360000);
  interMinutes = setInterval(setMinute, 60000);
  interSecond = setInterval(setSecond, 1000);
  interMiliSecond = setInterval(setMilisecond, 1);
}

function stop() {
  clearInterval(interMiliSecond);
  clearInterval(interSecond);
  clearInterval(interMinutes);
  clearInterval(hours);
}

function reset() {
  stop();
  let initial = 0;
  document.getElementById("hours").innerHTML = initial + "h ";
  document.getElementById("minute").innerHTML = initial + "min ";
  document.getElementById("second").innerHTML = initial + "s ";
  document.getElementById("mili-second").innerHTML = initial + "ms ";
}

function save() {
  stop();
  listInter.push({ hours, minute, second, milisecond });
  document.getElementById("save").innerHTML = JSON.stringify(listInter);
}
