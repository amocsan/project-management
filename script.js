let button = document.getElementsByClassName("big red button")
let clicks = 0;
button.onclick = function btnPressed () {
    clicks ++;
    document.getElementById("clicks").innerHTML = clicks;
}
document.getElementById("clicks").addEventListener("click", btnPressed);

let red = document.getElementById("rangeRed");
let green = document.getElementById("rangeGreen");
let blue = document.getElementById("rangeBlue");
let color = "rgb(0,0,0)";

function changeColor() {
    let red = document.getElementById('rangeRed').value;
    let green = document.getElementById('rangeGreen').value;
    let blue = document.getElementById('rangeBlue').value;
    let color = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.backgroundColor = color;
    document.getElementById('colorOutput').innerHTML = color;

}

document.getElementById('rangeRed').addEventListener('input',changeColor);
document.getElementById('rangeBlue').addEventListener('input',changeColor);
document.getElementById('rangeGreen').addEventListener('input',changeColor);