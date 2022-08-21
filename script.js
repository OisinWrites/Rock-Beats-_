const rockButton = document.querySelector('[rockButton]');
var cpuChoice;
var winCounter = 0;
var tiesCounter = 0;
var loseCounter = 0;
var numberClicks = 0;

const selections = [
    {
        name: 'rock',
        img: 'assets/images/rock.png',
        id: 1,
    },
    {
        name: 'paper',
        img: 'assets/images/paper.png',
        id: 2,
    },
    {
        name: 'scissors',
        img: 'assets/images/scissor.png',
        id: 3,
    },
    {
        name: 'lizard',
        img: 'assets/images/lizard.png',
        id: 4
    },
    {
        name: 'spock',
        img: 'assets/images/spock.png',
        id: 5,
    },
];

rockButton.addEventListener('click', function(){
    numberClicks ++;
    var playerChoice = selections.find(s => {
        return s.id === 1
    });
    var cpuChoiceId = randomNo(1, 5);
    cpuChoice = selections.find(s => {
        return s.id === cpuChoiceId
    });
    var result = determineWin();
    gameEnd();
    countersToScreen();
    imagesToLog(playerChoice, result, cpuChoice);
})

function countersToScreen() {
    document.getElementById('playerscore').innerHTML=winCounter;
    document.getElementById('ties').innerHTML=tiesCounter;
    document.getElementById('cpuscore').innerHTML=loseCounter;
}

function imagesToLog(playerChoice, resultMessage, cpuChoice) {
    var html = document.getElementById('game-log').innerHTML;
    var newHtml = 
    `<span id="player-choice-img">
    <img class="button" src="${playerChoice.img}" alt="${playerChoice.name}">
    </span>
    <span id="relationship-message">
    ${resultMessage}
    </span>
    <span id="computer-choice-img" >
    <img class="button" src="${cpuChoice.img}" alt="${cpuChoice.name}">
    </span>`;
    document.getElementById('game-log').innerHTML = newHtml + html; 
    // document.getElementById('player-choice-img').innerHTML=
    //     `<img class="button" src="${playerChoice.img}" alt="${playerChoice.name}">`
    // document.getElementById('relationship-message').innerHTML=
    //     `${resultMessage}`
    // document.getElementById('computer-choice-img').innerHTML=
    //     `<img class="button" src="${cpuChoice.img}" alt="${cpuChoice.name}">`
}

function gameEnd() {
    const winReset = '<div id="resetButton" class="button">Congratulations<br>reset</div>';
    const tiesReset = '<div id="resetButton" class="button">Try Again<br>reset</div>';
    const loseReset = '<div id="resetButton" class="button">You Fool<br>reset</div>';
    if(winCounter === 3 || loseCounter === 3 || numberClicks === 5){
        if(winCounter > loseCounter) {
            document.getElementById('reset-button').innerHTML = winReset;
            document.getElementById('reset-button').addEventListener(
                'click', function() {
                    resetButton();
                }
            )
        }
        else if(loseCounter > winCounter) {
            document.getElementById('reset-button').innerHTML = loseReset;
            document.getElementById('reset-button').addEventListener(
                'click', function() {
                    resetButton();
                }
            )
        }
        else {
            document.getElementById('reset-button').innerHTML = tiesReset;
            document.getElementById('reset-button').addEventListener(
                'click', function() {
                    resetButton();
                }
            )
        }
    }
}

function resetButton() {
    winCounter = 0;
    loseCounter = 0;
    tiesCounter = 0;
    numberClicks = 0;
}

function determineWin() {
    console.log(cpuChoice);
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
    return Math.floor(Math.random() * (max - min + 1) + min);
}

