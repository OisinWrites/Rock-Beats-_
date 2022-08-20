const choiceButtons = document.querySelectorAll("[data-choice]")
const recordChart = document.querySelector('record-choices-chart')
const CHOICES = [
    {
        name:'rock',
        img:'rockImg',
        beats:'scissors',
    },
    {
        name:'paper',
        img:"paperImg",
        beats:'rock', 
        beats:'spock'
    },
    {
        name:'scissors',
        img:"scissorsImg",
        beats:'paper', 
        beats:'lizard'
    },
    {
        name:'lizard',
        img:'lizardImg',
        beats:'paper', 
        beats:'spock'
    },
    {
        name:'spock',
        img:'spockImg',
        beats:'rock', 
        beats:'scissors'
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
    addChoiceResult(choice, playerWinner)
}
function addChoiceResult(choice, win) {
    const span = document.createElement('span')
    span.innerText = choice.img
    span.classList.add('record-choice')
    if (win) span.classList.add ('winner')
    recordChart.after(span)
}
function randomChoice() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[randomIndex]
}
function winner(choice, cpuChoice) {
    return choice.beats === cpuChoice.name
}