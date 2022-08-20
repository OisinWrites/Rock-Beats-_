const choiceButtons = document.querySelectorAll("[data-choice]")
const recordChart = document.querySelector('[record-choices-chart]')
const CHOICES = [
    {
        name:'rock',
        img: 'div.innerHTML = `<img src="assets/images/rock.png" alt="rock"`',
        beats:['scissors', 'lizard'],
        loses:['paper','spock']
    },
    {
        name:'paper',
        img:"paperImg",
        beats:['rock', 'spock'],
        loses:['scissors', 'lizard']
    },
    {
        name:'scissors',
        img:"scissorsImg",
        beats:['paper','lizard'],
        loses:['rock', 'spock']
    },
    {
        name:'lizard',
        img:'lizardImg',
        beats:['paper', 'spock'],
        loses:['rock', 'scissors']
    },
    {
        name:'spock',
        img:'spockImg',
        beats:['rock', 'scissors'],
        loses:['paper','lizard']
    }
]
choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener(('click'), e => {
       const choiceName = choiceButton.dataset.choice
       const choice = CHOICES.find(choice => choice.name === choiceName)
       makeChoice(choice)
    })
})
function makeChoice(choice) {
    const cpuChoice = randomChoice()
    const playerWinner = winner(choice, cpuChoice)
    const cpuWinner = winner(cpuChoice, choice)
    document.getElementById('player-choice').innerHTML = 
        `<img src="${choice.img}"alt="scissors">`;
    document.getElementById('cpu-choice').innerHTML = 
    `<img src="${cpuChoice.img}"alt="scissors">`;
}
function addChoiceResult(choice, win) {
    const img = document.createElement('img')
    img.innerHTML = src=assets/images/rock.png
    img.classList.add('record-choice')
    if (win) img.classList.add ('winner')
    recordChart.after(img)
}
function randomChoice() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[randomIndex]
}
function winner(choice, cpChoice) {
    return choice.beats === cpChoice.name || choice.beats2 === cpChoice.name
}