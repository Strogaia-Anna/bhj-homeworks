let clicker = document.getElementById("clicker__counter");
let speedEL = document.getElementById("speed");
let time1;

let image = document.getElementById("cookie")
function changeSizes() {
    image.width = 450 - image.width;
    clicker.textContent = +clicker.textContent + 1;

    if (time1) {
        let time2 = Date.now();
        let speed = (time2 - time1) / (clicker.textContent * 1000);
        speedEL.textContent = speed.toFixed(2);
    } else {
        time1 = Date.now();
    }

}

image.onclick = changeSizes;

