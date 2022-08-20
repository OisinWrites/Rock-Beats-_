const choices = document.querySelectorAll("[data-choice]")
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
choices.forEach(button => {
    button.addEventListener('click', e=> {
       const choiceName = button.dataset.choice
       const choice = CHOICES.find(choice => choice.name === choiceName)
       makeChoice(choiceName)
    })
})
function makeChoice(choice) {
    console.log(choice)
}