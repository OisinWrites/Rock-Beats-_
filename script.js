const rockButton = document.querySelector('[rockButton]');
   
rockButton.addEventListener('click', e => {
        var playerChoice = 1;
            var result = determineWin();
                console.log(result)
    })

function determineWin() {
    const cpuChoice = randomNo(1, 5);
        if(cpuChoice === 3 || cpuChoice === 4){
            return 'win'
        }
        else if(cpuChoice === 2 || cpuChoice === 5){
            return 'lose'
        }
        else if(cpuChoice === 1){
            return 'draw'
        }
}

function randomNo(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min)
}
