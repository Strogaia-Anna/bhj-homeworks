let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.onclick = function () {
        if (hole.className.includes( 'hole_has-mole' )) {
            dead.textContent = +dead.textContent + 1;
        } else {
            lost.textContent = +lost.textContent + 1;
        }

        if (+dead.textContent === 10){
            lost.textContent = 0;
            dead.textContent = 0;
            alert("Вы выиграли!")
        }

        if (+lost.textContent === 5){
            lost.textContent = 0;
            dead.textContent = 0;
            alert("Вы проиграли!")
        }
    }
}

function getHole (index) {
   return document.getElementById(`hole${index}`);
}