const choiceButtons = document.querySelectorAll("[data-choice]")
const recordChart = document.querySelector('[record-choices-chart]')
const CHOICES = [
    {
        name:'rock',
        img:'rockImg',
        beats:'scissors',
        beats2: 'lizard'
    },
    {
        name:'paper',
        img:"paperImg",
        beats:'rock', 
        beats2:'spock'
    },
    {
        name:'scissors',
        img:"scissorsImg",
        beats:'paper', 
        beats2:'lizard'
    },
    {
        name:'lizard',
        img:'lizardImg',
        beats:'paper', 
        beats2:'spock'
    },
    {
        name:'spock',
        img:'spockImg',
        beats:'rock', 
        beats2:'scissors'
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
    addChoiceResult(cpuChoice, cpuWinner)
    addRelationship()
    addChoiceResult(choice, playerWinner)
}
function addChoiceResult(choice, win) {
    const div = document.createElement('div')
    div.innerText = choice.img
    div.classList.add('record-choice')
    if (win) div.classList.add ('winner')
    recordChart.after(div)
}
function addRelationship(winner, loser) {
    if (winner === 'rock') {
        if (loser === 'scissors') return 'smashes'
    }
    if (winner === 'paper') {
        
    }
    if (winner === 'scissors') {
        
    }
    if (winner === 'lizard') {
        
    }
    if (winner === 'spock') {
        
    }
}
function randomChoice() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[randomIndex]
}
function winner(choice, cpChoice) {
    return choice.beats === cpChoice.name || choice.beats2 === cpChoice.name
}