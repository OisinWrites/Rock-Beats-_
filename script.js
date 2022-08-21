const rockButton = document.querySelector('[rockButton]');
var cpuChoice;
var winCounter = 0;
var tiesCounter = 0;
var loseCounter = 0;
var numberClicks = 0;

rockButton.addEventListener('click', e => {
    numberClicks ++;
    var playerChoice = 1;
    cpuChoice = randomNo(1, 5);
    var result = determineWin();
    gameEnd();
    countersToScreen();
    console.log(playerChoice, result, cpuChoice, winCounter, tiesCounter, loseCounter)
})

function countersToScreen() {
    document.getElementById('playerscore').innerHTML=winCounter;
    document.getElementById('ties').innerHTML=tiesCounter;
    document.getElementById('cpuscore').innerHTML=loseCounter;
}

function gameEnd() {
    if(winCounter === 3 || loseCounter === 3 || numberClicks === 5){
        
    }
}

function resetButton() {
    winCounter = 0;
    loseCounter = 0;
    tiesCounter = 0;
    numberClicks = 0;
}

function determineWin() {
        if(cpuChoice === 3 || cpuChoice === 4){
            winCounter ++;
            return 'wins against'
        }
        else if(cpuChoice === 2 || cpuChoice === 5){
            loseCounter ++;
            return 'loses to'
        }
        else if(cpuChoice === 1){
            tiesCounter ++;
            return 'ties with'
        }
}

function randomNo(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min)
}

