var playerChoice;
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
//this called on function was necessary 
//as the elements it targets are replaced and returned
//by the resetButton function. When originally returned 
//the querySelectors were not picking up the html ''x'Buttons'.
addEventListeners();
//this function sends the current 'x'Counter value into the correct HTML location
function countersToScreen() {
    document.getElementById('playerscore').innerHTML=winCounter;
    document.getElementById('ties').innerHTML=tiesCounter;
    document.getElementById('cpuscore').innerHTML=loseCounter;
}
//this function is what records the choices made in our best of 3 game into the HTML,
//which can be as many as 5 'fights', but aren't necessary to complete in 5 as 
//the function resetButton restores the innerHTML to empty and their trigger,
//the clickCounter to 0.
function imagesToLog(playerChoice, resultMessage, cpuChoice) {
    var innerlogs = `<span class="logspan" id="player-choice-img">
    <img class="logimgs" src="${playerChoice.img}" alt="${playerChoice.name}">
    </span>
    <span class="logspan" id="relationship-message">
    ${resultMessage}
    </span>
    <span class="logspan" id="computer-choice-img" >
    <img class="logimgs" src="${cpuChoice.img}" alt="${cpuChoice.name}">
    </span>`;
    if (numberClicks === 1) {
        document.getElementById('fight1').innerHTML = innerlogs
    }
    else if(numberClicks === 2) {
        document.getElementById('fight2').innerHTML = innerlogs        
    }
    else if(numberClicks === 3) {
        document.getElementById('fight3').innerHTML = innerlogs        
    }
    else if(numberClicks === 4) {
        document.getElementById('fight4').innerHTML = innerlogs        
    }
    else if(numberClicks === 5) {
        document.getElementById('fight5').innerHTML = innerlogs
    }
}
//this function uses the 'x'Counters to establish if the game is over by checking
//whether either the win or lose Counters reach 3 in a our best of 3 game, or
//the alternative: 5 clicks, 5 fights, have occured, which covers game end conditions
//that include ties. It also tells if no win or lose condition is met then the game is tied.
//When any of the conditions are met it will call on our resetButton function, and on
//our countersToScreen function so that the reset to 0 counters will refresh.
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
//This is our resetButton. It appears when the gameEnd function is trigger by end game conditions.
//It resets both the counters of scores, and the log of moves made. It also replaces itself with the
//original button selection of player moves.
function resetButton() {
    winCounter = 0;
    loseCounter = 0;
    tiesCounter = 0;
    numberClicks = 0;
    document.getElementById('fight1').innerHTML = ""
    document.getElementById('fight2').innerHTML = ""
    document.getElementById('fight3').innerHTML = ""
    document.getElementById('fight4').innerHTML = ""
    document.getElementById('fight5').innerHTML = ""
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
    addEventListeners()
    document.getElementById('actionword').innerHTML = '';
}
//below are 5 'determine win for x' functions. The computers options, and the players buttons
//are each assigned a value between 1-5, inclusively. They are Rock, Paper, Scissors, Lizard, Spock, respectively.
//there is a function for each player button, with responses to the numberical values of RPSLS that is beats, loses, or ties.
//The responses to any pairing are to increment the correct counter up +1, and to return the appropriate message of the 
//relationship between choices, eg:'wins against'.
function determineWinRock() {
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
function determineWinPaper() {
    if(cpuChoice.id === 1 || cpuChoice.id === 5){
        winCounter ++;
        return 'wins against'
    }
    else if(cpuChoice.id === 3 || cpuChoice.id === 4){
        loseCounter ++;
        return 'loses to'
    }
    else if(cpuChoice.id === 2){
        tiesCounter ++;
        return 'ties with'
    }
}
function determineWinScissors() {
    if(cpuChoice.id === 2 || cpuChoice.id === 4){
        winCounter ++;
        return 'wins against'
    }
    else if(cpuChoice.id === 1 || cpuChoice.id === 5){
        loseCounter ++;
        return 'loses to'
    }
    else if(cpuChoice.id === 3){
        tiesCounter ++;
        return 'ties with'
    }
}
function determineWinLizard() {
    if(cpuChoice.id === 2 || cpuChoice.id === 5){
        winCounter ++;
        return 'wins against'
    }
    else if(cpuChoice.id === 1 || cpuChoice.id === 3){
        loseCounter ++;
        return 'loses to'
    }
    else if(cpuChoice.id === 4){
        tiesCounter ++;
        return 'ties with'
    }
}
function determineWinSpock() {
    if(cpuChoice.id === 1 || cpuChoice.id === 3){
        winCounter ++;
        return 'wins against'
    }
    else if(cpuChoice.id === 2 || cpuChoice.id === 4){
        loseCounter ++;
        return 'loses to'
    }
    else if(cpuChoice.id === 5){
        tiesCounter ++;
        return 'ties with'
    }
}
//this small function is the adjustable code for random number generation. It could be adjusted by changing
//the arguments passed through its open brackets on its calling. It doesn't need to be adjustable, as we are
//only dealing with 5 possible choices, but nonetheless, I'm acknowledging that it is so, and I haven't
//elected to make it otherwise.
function randomNo(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//this is it, the main event. These event listeners are the crux of the game and the main input the players have.
//Each of the event listeners are laid out the same, but for each create a static choice of the numberical value
//associated with whichever RPSLS button was clicked. The functions find within the const 'selection' at the top of the 
//page the corresponding object and its arrays, so that each button can be associated with its RPSLS choice and image.
//The click event calls on the other functions above.
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
        var result = determineWinRock();
        gameEnd();
        countersToScreen();
        imagesToLog(playerChoice, result, cpuChoice);
        actionwordsRock();
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
        var result = determineWinPaper();
        gameEnd();
        countersToScreen();
        imagesToLog(playerChoice, result, cpuChoice);
        actionwordsPaper();
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
        var result = determineWinScissors();
        gameEnd();
        countersToScreen();
        imagesToLog(playerChoice, result, cpuChoice);
        actionwordsScissors();
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
        var result = determineWinLizard();
        gameEnd();
        countersToScreen();
        imagesToLog(playerChoice, result, cpuChoice);
        actionwordsLizard();
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
        var result = determineWinSpock();
        gameEnd();
        countersToScreen();
        imagesToLog(playerChoice, result, cpuChoice);
        actionwordsSpock();
    })
}
//----------------------------------------------------------//
//-----additional script beyond the game--------------------//
function actionwordsRock() {
   if (cpuChoice.id === 1){
    document.getElementById('actionword').innerHTML = 'Rock ties with itself';
   }
   else if (cpuChoice.id === 2){
    document.getElementById('actionword').innerHTML = 'Paper covers Rock';
   }
   else if (cpuChoice.id === 3){
    document.getElementById('actionword').innerHTML = 'Rock crushes Scissors';
   }
   else if (cpuChoice.id === 4){
    document.getElementById('actionword').innerHTML = 'Rock crushes Lizard';
   }
   else if (cpuChoice.id === 5){
    document.getElementById('actionword').innerHTML = 'Spock vaporises Rock';
   }
}
function actionwordsPaper() {
    if (cpuChoice.id === 1){
     document.getElementById('actionword').innerHTML = 'Paper covers Rock';
    }
    else if (cpuChoice.id === 2){
     document.getElementById('actionword').innerHTML = 'Paper ties with itself';
    }
    else if (cpuChoice.id === 3){
     document.getElementById('actionword').innerHTML = 'Scissors cuts Paper';
    }
    else if (cpuChoice.id === 4){
     document.getElementById('actionword').innerHTML = 'Lizard eats Paper';
    }
    else if (cpuChoice.id === 5){
     document.getElementById('actionword').innerHTML = 'Paper disproves Spock';
    }
 }
 function actionwordsScissors() {
    if (cpuChoice.id === 1){
     document.getElementById('actionword').innerHTML = 'Rock crushes Scissors';
    }
    else if (cpuChoice.id === 2){
     document.getElementById('actionword').innerHTML = 'Scissors cuts Paper';
    }
    else if (cpuChoice.id === 3){
     document.getElementById('actionword').innerHTML = 'Scissors ties with itself';
    }
    else if (cpuChoice.id === 4){
     document.getElementById('actionword').innerHTML = 'Scissors decapitates Lizard';
    }
    else if (cpuChoice.id === 5){
     document.getElementById('actionword').innerHTML = 'Spock smashes Scissors';
    }
 }
 function actionwordsLizard() {
    if (cpuChoice.id === 1){
     document.getElementById('actionword').innerHTML = 'Rock crushes Lizard';
    }
    else if (cpuChoice.id === 2){
     document.getElementById('actionword').innerHTML = 'Lizard eats Paper';
    }
    else if (cpuChoice.id === 3){
     document.getElementById('actionword').innerHTML = 'Scissors decapitates Lizard';
    }
    else if (cpuChoice.id === 4){
     document.getElementById('actionword').innerHTML = 'Lizard ties with itself';
    }
    else if (cpuChoice.id === 5){
     document.getElementById('actionword').innerHTML = 'Lizard poisons Spock';
    }
 }
 function actionwordsSpock() {
    if (cpuChoice.id === 1){
     document.getElementById('actionword').innerHTML = 'Spock vaporises Rock';
    }
    else if (cpuChoice.id === 2){
     document.getElementById('actionword').innerHTML = 'Paper disproves Spock';
    }
    else if (cpuChoice.id === 3){
     document.getElementById('actionword').innerHTML = 'Spock smashes Scissors';
    }
    else if (cpuChoice.id === 4){
     document.getElementById('actionword').innerHTML = 'Lizard poisons Spock';
    }
    else if (cpuChoice.id === 5){
     document.getElementById('actionword').innerHTML = 'Spock ties with himself';
    }
 }