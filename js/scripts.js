// 
// preloader:
window.addEventListener('load', () => document.querySelector('.preloader').classList.add('hidePreloader'));
// End preloader

// 
const coinArray = ["شیر", "خط"];
var score = [0, 0];
const message = document.getElementById("message");
var buttons = document.querySelectorAll("button");
// console.log(buttons);
var playerGuess;
var computerGuess;

var media = document.querySelector("video");

for (var i = 0; i < buttons.length; i++) {
    // console.log(buttons[i]);
    buttons[i].addEventListener("click", playMedia);
    buttons[i].addEventListener("click", function (e) {

        var computerFlip = Math.floor(Math.random() * 2);
        playerGuess = e.target.innerText;
        computerGuess = coinArray[computerFlip];
        console.log(playerGuess);
        console.log(computerGuess);
    });
}

function playMedia() {

    if (media.paused) {
        media.play();
        message.innerHTML = "... در حال شیر یا خط کردن";
    }

}

/////////////////////////////////////////////////////////////

media.addEventListener("ended", EndMedia);
var output;

function EndMedia() {

    media.currentTime = 0;

    if (playerGuess === computerGuess) {

        alert(computerGuess);
        output = ". شما برنده شدید";
        score[0]++;
    } else {

        alert(computerGuess);
        output = ". کامپیوتر برنده شد";
        score[1]++;
    }

    message.innerHTML = output + "<br/> شما: " + score[0] + " | " + "کامپیوتر: " + score[1];

}