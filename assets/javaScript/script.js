var playerChoice;
var cpuChoice;
var winCounter = 0;
var tiesCounter = 0;
var loseCounter = 0;
var numberClicks = 0;
const body = document.querySelector("body");
const selections = [
    {
        name: "rock",
        img: "assets/images/rock.png",
        id: 1,
    },
    {
        name: "paper",
        img: "assets/images/paper.png",
        id: 2,
    },
    {
        name: "scissors",
        img: "assets/images/scissor.png",
        id: 3,
    },
    {
        name: "lizard",
        img: "assets/images/lizard.png",
        id: 4
    },
    {
        name: "spock",
        img: "assets/images/spock.png",
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
    document.getElementById("playerscore").innerHTML=winCounter;
    document.getElementById("ties").innerHTML=tiesCounter;
    document.getElementById("cpuscore").innerHTML=loseCounter;
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
    const winReset = '<div class="reset" id="resetButton"><div class="buttonresetcongrat">*Congratulations!!*</div><div class="buttonresetcongrat resetstyling">reset</div></div>';
    const tiesReset = '<div class="reset" id="resetButton"><div class="buttonresettry">Try Again</div><div class="buttonresettry resetstyling">reset</div></div>';
    const loseReset = '<div class="reset" id="resetButton"><div class="buttonresetfail">You Ambitious Fool!</div><div class="buttonresetfail resetstyling">reset</div></div>';
    if (winCounter === 2 && tiesCounter === 2){
        document.getElementById('defeat').innerHTML = '<img class="avatar stickman" src="assets/images/victory.png">';
            document.getElementById('reset-button').innerHTML = winReset;
            document.getElementById('resetButton').addEventListener('click', function(){
                    resetButton();
                    countersToScreen();
                }
            );
            body.classList.add('bodywin');
    }
    else if (loseCounter === 2 && tiesCounter === 2){
        document.getElementById('defeat').innerHTML = '<img class="avatar stickman" src="assets/images/defeat.png">';
            document.getElementById('reset-button').innerHTML = loseReset;
            document.getElementById('resetButton').addEventListener('click', function() {
                    resetButton();
                    countersToScreen();
                }
            );
            body.classList.add('bodylose');
    }
    else if(winCounter === 3 || loseCounter === 3 || numberClicks === 5){
        if(winCounter > loseCounter) {
            document.getElementById('defeat').innerHTML = '<img class="avatar stickman" src="assets/images/victory.png">';
            document.getElementById('reset-button').innerHTML = winReset;
            document.getElementById('resetButton').addEventListener('click', function(){
                    resetButton();
                    countersToScreen();
                }
            );
            body.classList.add('bodywin');
        }
        else if(loseCounter > winCounter) {
            document.getElementById('defeat').innerHTML = '<img class="avatar stickman" src="assets/images/defeat.png">';
            document.getElementById('reset-button').innerHTML = loseReset;
            document.getElementById('resetButton').addEventListener('click', function() {
                    resetButton();
                    countersToScreen();
                }
            );
            body.classList.add('bodylose');
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
    document.getElementById('actionword').innerHTML = `<div class="best">Best of Five</div>`;
    document.getElementById('fight1').innerHTML = "";
    document.getElementById('fight2').innerHTML = "";
    document.getElementById('fight3').innerHTML = "";
    document.getElementById('fight4').innerHTML = "";
    document.getElementById('fight5').innerHTML = "";
    document.getElementById('defeat').innerHTML = '<img class="avatar stickman" src="assets/images/player.png">'
    const buttonSelections = `<span class="choices" id="rockButton">
    <img class="button" src="assets/images/rock.png" alt="rock">
</span>
<span class="choices" id="paperButton">
    <img class="button" src="assets/images/paper.png" alt="paper">
</span>
<span class="choices" id="scissorsButton">
    <img class="button" src="assets/images/scissor.png"alt="scissors">
</span>
<span class="choices" id="lizardButton">
    <img class="button" src="assets/images/lizard.png" alt="lizard">
</span>
<span class="choices" id="spockButton">
    <img class="button" src="assets/images/spock.png" alt="spock">
</span>`;
    document.getElementById('reset-button').innerHTML = buttonSelections;
    addEventListeners()
    body.classList.remove('bodywin');
    body.classList.remove('bodylose');
}
//below are 5 'determine win for x' functions. The computers options, and the players buttons
//are each assigned a value between 1-5, inclusively. They are Rock, Paper, Scissors, Lizard, Spock, respectively.
//there is a function for each player button, with responses to the numberical values of RPSLS that is beats, loses, or ties.
//The responses to any pairing are to increment the correct counter up +1, and to return the appropriate message of the 
//relationship between choices, eg:'wins against'.

//first function on each is to reset the banner which an addition function changes later
function determineWinRock() {
    document.getElementById('banner').innerHTML = 'Rock Beats _';
    document.getElementById('wisely-ier').innerHTML = 'Choose Wisely';
        if(cpuChoice.id === 3 || cpuChoice.id === 4){
            winCounter ++;
            return 'wins against'
        }
        else if(cpuChoice.id === 2 || cpuChoice.id === 5){
            loseCounter ++;
            chooseMoreWisely();
            chooseMoreWiselyAgain();
            return 'loses to'
        }
        else if(cpuChoice.id === 1){
            tiesCounter ++;
            return 'ties with'
        }
}
function determineWinPaper() {
    document.getElementById('banner').innerHTML = 'Rock Beats _';
    h1.classList.add('banner');
    document.getElementById('wisely-ier').innerHTML = 'Choose Wisely';
    if(cpuChoice.id === 1 || cpuChoice.id === 5){
        winCounter ++;
        return 'wins against'
    }
    else if(cpuChoice.id === 3 || cpuChoice.id === 4){
        loseCounter ++;
        chooseMoreWisely();
        chooseMoreWiselyAgain();
        return 'loses to'
    }
    else if(cpuChoice.id === 2){
        tiesCounter ++;
        return 'ties with'
    }
}
function determineWinScissors() {
    document.getElementById('banner').innerHTML = 'Rock Beats _';
    document.getElementById('wisely-ier').innerHTML = 'Choose Wisely';
    if(cpuChoice.id === 2 || cpuChoice.id === 4){
        winCounter ++;
        return 'wins against'
    }
    else if(cpuChoice.id === 1 || cpuChoice.id === 5){
        loseCounter ++;
        if(cpuChoice.id === 1){
            userNameBanner()
        };
        chooseMoreWisely();
        chooseMoreWiselyAgain();
        return 'loses to'
    }
    else if(cpuChoice.id === 3){
        tiesCounter ++;
        return 'ties with'
    }
}
function determineWinLizard() {
    document.getElementById('banner').innerHTML = 'Rock Beats _';
    document.getElementById('wisely-ier').innerHTML = 'Choose Wisely';
    if(cpuChoice.id === 2 || cpuChoice.id === 5){
        winCounter ++;
        return 'wins against'
    }
    else if(cpuChoice.id === 1 || cpuChoice.id === 3){
        loseCounter ++;
        if(cpuChoice.id === 1){
            userNameBanner()
        };
        chooseMoreWisely();
        chooseMoreWiselyAgain();
        return 'loses to'
    }
    else if(cpuChoice.id === 4){
        tiesCounter ++;
        return 'ties with'
    }
}
function determineWinSpock() {
    document.getElementById('banner').innerHTML = 'Rock Beats _';
    document.getElementById('wisely-ier').innerHTML = 'Choose Wisely';
    if(cpuChoice.id === 1 || cpuChoice.id === 3){
        winCounter ++;
        return 'wins against'
    }
    else if(cpuChoice.id === 2 || cpuChoice.id === 4){
        loseCounter ++;
        chooseMoreWisely();
        chooseMoreWiselyAgain();
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
    document.getElementById('rockButton').addEventListener('click', function(){
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
    document.getElementById('paperButton').addEventListener('click', function(){
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
    document.getElementById('scissorsButton').addEventListener('click', function(){
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
    document.getElementById('lizardButton').addEventListener('click', function(){
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
    document.getElementById('spockButton').addEventListener('click', function(){
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

//Functions to give the action words between winning and losing choices in a div
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
 //On click 'player one' should become a form, the submission needs to be taken in by js
var nameSubmission = document.getElementById('username');
var putformhere = document.getElementById('putformhere');
var putplayernamehere = document.getElementById('putplayernamehere');
var randomTitle;
var titleNo = randomNo(1,10);
var playerName;
var banner = document.getElementById('banner');
const playerDefeat = [
    {
    img: 'assets/images/defeat.png'
    }
]
const  h1 = document.querySelector('h1');

nameSubmission.addEventListener('click', function() {
    nameSubmission.innerHTML = '';
    putformhere.innerHTML = '<form id="player-name-form"><input type="text" name="nickname" placeholder="Your name, mortal!" id="player-name"><input type="button" name="submit" onclick="onSubmit()" value="submit"></form>';
})

function onSubmit() {
    playerName = document.getElementById('player-name').value.trim();
    putformhere.innerHTML = "";
    titleGenerator();
    if (playerName === ""){
        putplayernamehere.innerHTML = 'Numbskull' + randomTitle;
    }
    else {
        putplayernamehere.innerHTML = playerName + randomTitle;
    };
 }
function titleGenerator() {
    if (titleNo === 1){
        randomTitle = ', the Oblivious'
    }
    else if (titleNo === 2){
        randomTitle = ', the Undecided?'
    }
    else if (titleNo === 3){
        randomTitle = ', the Bored...'
    }
    else if (titleNo === 4){
        randomTitle = ', the Confident!'
    }
    else if (titleNo === 5){
        randomTitle = ', the Clairvoyant'
    }
    else if (titleNo === 6){
        randomTitle = ', the Quick-Handed'
    }
    else if (titleNo === 7){
        randomTitle = ', the Prosperous'
    }
    else if (titleNo === 8){
        randomTitle = ', the not busy'
    }
    else if (titleNo === 9){
        randomTitle = ', the long lived'
    }
    else if (titleNo === 10){
        randomTitle = ", lady luck's Swindler"
    }
}

function userNameBanner(){
    if (playerName === undefined){
        document.getElementById('banner').innerHTML = 'Rock Beats You';
    }
    // else if (playername === ""){
    //     document.getElementById('banner').innerHTML = 'Rock Beats Numbskull';
    // }
    else {
        document.getElementById('banner').innerHTML = 'Rock Beats ' + playerName;
    };
    banner.classList.add('banner');
}
function chooseMoreWisely(){
    if (numberClicks === 1){
        document.getElementById('wisely-ier').innerHTML = 'Choose more wisely-ier'
    } 
}
function chooseMoreWiselyAgain(){
    if (numberClicks === 2 && loseCounter === 2){
        document.getElementById('wisely-ier').innerHTML = 'Choose even more wisely-ier still'
    } 
}