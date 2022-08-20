const choiceButtons = document.querySelectorAll("[data-choice]")
const recordChart = document.querySelector('[record-choices-chart]')
const CHOICES = [
    {
        name:'rock',
        img:'assets/images/rock.png',
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
function winner(choice, cpChoice) {
    return choice.beats === cpChoice.name || choice.beats2 === cpChoice.name
}