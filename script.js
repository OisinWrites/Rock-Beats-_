const rockButton = document.querySelector('[rockButton]');
var cpuChoice;
var winCounter = 0;
var tiesCounter = 0;
var loseCounter = 0;
var numberClicks = 0;

const selections = [
    {
        name: 'lizard',
        img: 'assets/images/lizard.png',
        id: 4
    },
    {
        name: 'rock',
        img: 'assets/images/rock.png',
        id: 1,
    },
];

rockButton.addEventListener('click', e => {
    numberClicks ++;
    var playerChoice = selections.find(s => {return s.id === 1});
    cpuChoice = selections.find(s => {return s.id === 4});
    var result = determineWin();
    gameEnd();
    countersToScreen();
    imagesToLog(playerChoice, result, cpuChoice);
    console.log(playerChoice, result, cpuChoice, winCounter, tiesCounter, loseCounter)
})

function countersToScreen() {
    document.getElementById('playerscore').innerHTML=winCounter;
    document.getElementById('ties').innerHTML=tiesCounter;
    document.getElementById('cpuscore').innerHTML=loseCounter;
}

function imagesToLog(playerChoice, resultMessage, cpuChoice) {
    document.getElementById('player-choice-img').innerHTML=
        `<img class="button" src="${playerChoice.img}" alt="${playerChoice.name}">`
    document.getElementById('relationship-message').innerHTML=
        `${resultMessage}`
    document.getElementById('computer-choice-img').innerHTML=
        `<img class="button" src="${cpuChoice.img}" alt="${cpuChoice.name}">`
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
        if(cpuChoice.id === 3 || cpuChoice.id === 4){
            winCounter ++;
            return 'wins against'
        }
        else if(cpuChoice.id === 2 || cpuChoice.id === 5){
            loseCounter ++;
            return 'loses to'
        }
        else if(cpuChoice.id === 1){
            tiesCounter ++;
            return 'ties with'
        }
}

function randomNo(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min)
}

