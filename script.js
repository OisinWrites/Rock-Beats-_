const rockButton = document.querySelector('[rockButton]');
var cpuChoice;
var winCounter = 0;
var tiesCounter = 0;
var loseCounter = 0;

rockButton.addEventListener('click', e => {
    var playerChoice = 1;
    cpuChoice = randomNo(1, 5);
    var result = determineWin();
        console.log(playerChoice, result, cpuChoice, winCounter, tiesCounter, loseCounter)
    })

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

