const game = new Game();
// Create event handling for start button to perform reset actions
const startBtn = document.getElementById("btn__reset");
startBtn.addEventListener("click", event => {
    let ul = document.querySelector("ul");
   let phraseCurrent = ul.children;
   for (let i = 0; i < phraseCurrent.length; i++){
    ul.removeChild(phraseCurrent[i]);
   }
   let keyboardToggle = document.querySelectorAll(".chosen, .wrong");
   for (let i = 0; i < keyboardToggle.length; i++){
       keyboardToggle[i].removeAttribute("disabled");
        keyboardToggle[i].className = "key";
    }
    let hearts = document.querySelectorAll("img");
    for (let i = 0; i < hearts.length; i++){
        hearts[i].src = "images/liveHeart.png"
    }
    game.missed = 0;
    const container = document.querySelector(".main-container");
    container.style.filter = "brightness(100%)";
    game.startGame();
});
// Add event handling for the keyboard buttons and pass the value into the handleInteraction() function
const keyboard = document.getElementById("qwerty");
keyboard.addEventListener("click", e => {
    if (e.target.className === 'key'){
        game.handleInteraction(e.target);
        console.log(e.target);
    }
});
// Add event handling for the keyboard and match it to a corresponding key button
const letters = document.querySelectorAll(".key");
document.addEventListener("keyup", e => {
letters.forEach(letter => {
    if (e.key === letter.textContent){
        game.handleInteraction(letter);
    }
})

});

