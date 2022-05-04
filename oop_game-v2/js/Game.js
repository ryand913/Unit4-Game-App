// Creates game class which contains the phrase properties generated in the game && the logic when a guess is made

class Game {
    constructor(missed,phrases,activePhrase){
    this.missed = 0,
    this.phrases = [
        new Phrase("Happy Birthday To You"),
        new Phrase("Kings and Queens"),
        new Phrase("Diamonds Are A Girls Best Friend"),
        new Phrase("Run Away With Me"),
        new Phrase("Say It Aint So")

    ],
    this.activePhrase = null
    }

  startGame(){
        const overlay = document.getElementById("overlay");
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
       this.activePhrase.addPhraseToDisplay();
    }
    getRandomPhrase(){
        const arrayValue = Math.floor(Math.random() * (this.phrases.length))
        return this.phrases[arrayValue]
    }
//Uses parameter passed in from event handlers in app.js to determine if the selection is correct & update board accordingly
    handleInteraction(choice){

          choice.setAttribute("disabled",'');
          if(this.activePhrase.phrase.includes(choice.textContent)){
              choice.className = 'chosen';
              this.activePhrase.showMatchedLetter(choice.textContent);
              this.checkForWin();
              if (this.checkForWin() === true){
                  this.gameOver();
              }
          }
          else {
              choice.className = 'wrong';
              this.removeLife();
        }

      }
    removeLife() {
        let hearts = document.querySelectorAll("img");
        if(this.missed < 4){
        hearts[this.missed].src = "images/lostHeart.png"
        this.missed += 1;
        }
        else {
            this.gameOver();
        }
    }
    // check if the total letters with the show class is equal to the non-space characters in the phrase property
    checkForWin() {
        const phraseLength = this.activePhrase.phrase.replace(/ /g,"").length;
        const guessLength = document.querySelectorAll('.letter.show').length;
        if (phraseLength === guessLength){
            return true
        }
        else{
            return false
        }
    }
    //show the original home screen based on whether the player wins or not
    gameOver(result) {
        const overlay = document.getElementById("overlay");
        overlay.style.display = '';

        if (this.missed === 4 && this.checkForWin() === false) {
            let textfield = document.querySelector("h1");
            textfield.textContent = "You lost!!!! Try again";
            textfield.className = "lose-message";
            overlay.className = 'lose';           
        }
        else {
            overlay.className = 'win';
            let textfield = document.querySelector("h1");
            textfield.className = "win-message";
            textfield.textContent = "CONGRATS!!!!";

        }
    }
}