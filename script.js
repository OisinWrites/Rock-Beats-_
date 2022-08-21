const rockButton = document.querySelector('[rockButton]');
var cpuChoice;

rockButton.addEventListener('click', e => {
    var playerChoice = 1;
    cpuChoice = randomNo(1, 5);
    var result = determineWin();
        console.log(playerChoice, result, cpuChoice)
    })

function determineWin() {
        if(cpuChoice === 3 || cpuChoice === 4){
            return 'wins against'
        }
        else if(cpuChoice === 2 || cpuChoice === 5){
            return 'loses to'
        }
        else if(cpuChoice === 1){
            return 'ties with'
        }
}

function randomNo(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min)
}