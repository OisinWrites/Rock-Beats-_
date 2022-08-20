const choiceButtons = document.querySelectorAll("[data-choice]")
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

    console.log(cpuChoice)
}
function randomChoice() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[randomIndex]
}
function winner(choice, cpuChoice) {
    return choice.beats === cpuChoice.name
}