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

addEventListeners();

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
}

function gameEnd() {
    const winReset = '<div id="resetButton" class="button">Congratulations<br>reset</div>';
    const tiesReset = '<div id="resetButton" class="button">Try Again<br>reset</div>';
    const loseReset = '<div id="resetButton" class="button">You Fool<br>reset</div>';
    if(winCounter === 3 || loseCounter === 3 || numberClicks === 5){
        if(winCounter > loseCounter) {
            document.getElementById('reset-button').innerHTML = winReset;
            document.getElementById('resetButton').addEventListener('click', function(){
                    resetButton();
                    countersToScreen();
                }
            )
        }
        else if(loseCounter > winCounter) {
            document.getElementById('reset-button').innerHTML = loseReset;
            document.getElementById('resetButton').addEventListener('click', function() {
                    resetButton();
                    countersToScreen();
                }
            )
        }
        else {
            document.getElementById('reset-button').innerHTML = tiesReset;
            document.getElementById('resetButton').addEventListener('click', function() {
                    resetButton();
                    countersToScreen();
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
    const buttonSelections = `<span class="choices" rockButton>
    <img class="button" src="assets/images/rock.png" alt="rock">
</span>
<span class="choices" paperButton>
    <img class="button" src="assets/images/paper.png" alt="paper">
</span>
<span class="choices" scissorsButton>
    <img class="button" src="assets/images/scissor.png"alt="scissors">
</span>
<span class="choices" lizardButton>
    <img class="button" src="assets/images/lizard.png" alt="lizard">
</span>
<span class="choices" spockButton>
    <img class="button" src="assets/images/spock.png" alt="spock">
</span>`;
    document.getElementById('reset-button').innerHTML = buttonSelections;
    addEventListeners();
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
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function addEventListeners() {
    document.querySelector('[rockButton]').addEventListener('click', function(){
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
    document.querySelector('[paperButton]').addEventListener('click', function(){
        numberClicks ++;
        var playerChoice = selections.find(s => {
            return s.id === 2
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
    document.querySelector('[scissorsButton]').addEventListener('click', function(){
        numberClicks ++;
        var playerChoice = selections.find(s => {
            return s.id === 3
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
    document.querySelector('[lizardButton]').addEventListener('click', function(){
        numberClicks ++;
        var playerChoice = selections.find(s => {
            return s.id === 4
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
    document.querySelector('[spockButton]').addEventListener('click', function(){
        numberClicks ++;
        var playerChoice = selections.find(s => {
            return s.id === 5
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
}
