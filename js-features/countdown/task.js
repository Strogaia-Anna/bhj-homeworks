let timerElement = document.getElementById("timer");
let link = document.getElementById("link");

function decreasingTimer (){
   timerElement.textContent = +timerElement.textContent - 1;
   if (+timerElement.textContent === 0) {
        clearInterval(intervalID);
        alert("Вы победили в конкурсе!");
    }
}

function decreasingTimerAdvanced () {
    let timer = timerElement.textContent;
    let timeArray = timer.split(":");
    let hours = +timeArray[0];
    let minutes = +timeArray[1];
    let seconds = +timeArray[2];
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
    }

    if (hours < 10) {
        hours = `0${hours}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    timerElement.textContent = `${hours}:${minutes}:${seconds}`

    if (timerElement.textContent === "00:00:00"){
        clearInterval(intervalID);
        link.click();
        alert("Вы победили в конкурсе!");
    }
}

// let intervalID = setInterval(decreasingTimer, 1000);
let intervalID = setInterval(decreasingTimerAdvanced, 1000);