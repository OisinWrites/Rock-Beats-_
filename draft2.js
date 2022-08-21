//global constants to find in html//
const choiceButtons = document.querySelectorAll("[data-choice]")
const recordChart = document.querySelector('[record-choices-chart]')
const RESULTS = {
    WIN: 'win',
    LOSE: 'lose',
    DRAW: 'draw'
}
const scoreBoard = {
    player: 0,
    cpu: 0,
    draws: 0
}
//objects and arrays for choices//
const CHOICES = [
    {
        name:'rock',
        img:'assets/images/rock.png',
        beats: ['scissors', 'lizard'],
        loses: ['paper', 'spock']
    },
    {
        name:'paper',
        img:"assets/images/paper.png",
        beats: ['rock', 'spock'],
        loses: ['lizard', 'scissors']
    },
    {
        name:'scissors',
        img:"assets/images/scissor.png",
        beats: ['paper', 'lizard'],
        loses: ['rock', 'spock']
    },
    {
        name:'lizard',
        img:'assets/images/lizard.png',
        beats: ['paper', 'spock'],
        loses: ['rock', 'scissors']
    },
    {
        name:'spock',
        img:'assets/images/spock.png',
        beats: ['rock', 'scissors'],
        loses: ['paper', 'lizard']
    }
];
//selecting a choice//
choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener(('click'), e => {
        const playerChoice = CHOICES.find(choice => 
            choice.name === choiceButton.dataset.choice
        );

        playerPlays(playerChoice);
    });
});
//functions the choice calls on//

//function that give feedback to the user//

winCounter = 0;
        loseCounter = 0;
        tiesCounter = 0;
        numberClicks = 0;