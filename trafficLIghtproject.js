let stopButtonElement = document.getElementById("stopButton");
let readyButtonElement = document.getElementById("readyButton");
let goButtonElement = document.getElementById("goButton");
let stopBulbElement = document.getElementById("stopLight");
let readyBulbElement = document.getElementById("readyLight");
let goBulbElement = document.getElementById("goLight");

function onClickStopButton() {
    stopButtonElement.style.backgroundColor = "#cf1124";
    readyButtonElement.style.backgroundColor = "#1f1d41";
    goButtonElement.style.backgroundColor = "#1f1d41";
    stopBulbElement.style.backgroundColor = "#cf1124";
    readyBulbElement.style.backgroundColor = "#4b5069";
    goBulbElement.style.backgroundColor = "#4b5069";
}

function onClickReadyButton() {
    stopButtonElement.style.backgroundColor = "#1f1d41";
    readyButtonElement.style.backgroundColor = "#f7c948";
    goButtonElement.style.backgroundColor = "#1f1d41";
    stopBulbElement.style.backgroundColor = "#4b5069";
    readyBulbElement.style.backgroundColor = "#f7c948";
    goBulbElement.style.backgroundColor = "#4b5069";
}

function onClickGoButton() {
    stopButtonElement.style.backgroundColor = "#1f1d41";
    readyButtonElement.style.backgroundColor = "#1f1d41";
    goButtonElement.style.backgroundColor = "#199473";
    stopBulbElement.style.backgroundColor = "#4b5069";
    readyBulbElement.style.backgroundColor = "#4b5069";
    goBulbElement.style.backgroundColor = "#199473";
}