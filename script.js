const choices = document.querySelectorAll("[choice]")
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

var img = paperImg();
img.src = "assets/images/paper.png";
var img = scissorsImg();
img.src = "assets/images/scissor.png";
var img = lizardImg();
img.src = "assets/images/lizard.png";
var img = spockImg();
img.src = "assets/images/spock.png";