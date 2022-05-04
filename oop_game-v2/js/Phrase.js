//Creates phrase class that has methods to display the phrase on the page & show the letter that is guessed
const phraseSection = document.querySelector("ul");
class Phrase {
    constructor (phrase) {
    this.phrase = phrase.toLowerCase();
    }
//Update HTML in the ul element with the phrase selected
    addPhraseToDisplay() {
        phraseSection.innerHTML = '';
       const letters =  this.phrase.split('');
       letters.forEach((letter) => {
           if (letter === ' '){
            phraseSection.innerHTML += '<li class="space"> </li>'
            
           }
           else {
            phraseSection.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`
           }
       });
    }
    checkLetter(selection){
            if (this.phrase.includes(selection)){
                return true
            }
                return false
        }
// Show a letter if it is contained within the phrase
    showMatchedLetter(select){
        const createdLetter = phraseSection.children
        for (let i = 0; i < createdLetter.length; i++)
        if (select === createdLetter[i].innerText) {
            createdLetter[i].className = `show letter ${select}"`;
            }   
        }

}   


