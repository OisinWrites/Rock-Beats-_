const choiceButtons = document.querySelectorAll("[data-choice]")
const recordChart = document.querySelector('record-choices-chart')
const CHOICES = [
    {
        name:'rock',
        img:'rockImg',
        beats:'scissors lizard'
    },
    {
        name:'paper',
        img:"paperImg",
        beats:'rock spock'
    },
    {
        name:'scissors',
        img:"scissorsImg",
        beats:'paper lizard'
    },
    {
        name:'lizard',
        img:'lizardImg',
        beats:'paper spock'
    },
    {
        name:'spock',
        img:'spockImg',
        beats:'rock scissors'
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
    const div = document.createElement('div')
    div.innerText = choice.img
    div.classList.add('record-choice')
    if (win) div.classList.add ('winner')
    recordChart.after(div)
}
function randomChoice() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[randomIndex]
}
function winner(choice, cpuChoice) {
    return choice.beats === cpuChoice.name
}