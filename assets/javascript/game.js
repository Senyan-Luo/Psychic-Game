let computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","v","n","q","t","w"]
let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

let winCount = 0
let lossCount = 0
let guessLeft = 9


document.onkeyup = function(event) {

    let userGuess = event.key;

    renderGame(userGuess, computerGuess);
}



function renderGame(userGuess,computerGuess){
    if(userGuess === computerGuess){
        winCount++
        reset()
        display()
    }
    else{
        guessLeft--
        display()
        if(guessLeft < 1){
            reset()
            lossCount++
        }
    }

    function display(){
        $("#append").append(userGuess + ",")
    }

    let game = document.getElementById('game')

    game.innerHTML = `
      <div>Wins: ${winCount}</div>
      <div>Losses: ${lossCount}</div>
      <div>your guesses left: ${guessLeft}</div>
    `
}
function reset(){
    guessLeft = 9
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}



