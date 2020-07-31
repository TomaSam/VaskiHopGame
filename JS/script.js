console.log("Testas");

//HOMEPAGE
//flip image
(function () {
    (".flip").flip({
        trigger: 'click'
    });
});

//HIDE INDEX SHOW 
var homePage = document.getElementById("homePage");
var inputPage = document.getElementById("inputPage");
var start = document.getElementById("start");

start.addEventListener("click", function () {
    homePage.setAttribute("class", "hide");
    inputPage.setAttribute("class", "show");
})

//INPUT PAGE
var form = document.querySelector("form");
var play = document.getElementById("submit");
var namePlace = document.getElementById("player"); //place of player name
var gamePage = document.getElementById("gamePage");
var computerPlace = document.getElementById("computer");

function inputFuction() {
    var name = form["name"].value;

    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("inputName", name);
        namePlace.textContent = localStorage.getItem("inputName");
    } else {
        namePlace.textContent = "Not found name";
    }
    homePage.setAttribute("class", "hide");
    inputPage.setAttribute("class", "hide");
    gamePage.setAttribute("class", "show");
}
play.addEventListener("click", inputFuction);

//GAME PAGE
var winner = document.getElementById("print-winner"); //enter who win round
var round = document.getElementById("round");

var imagePlayer = document.getElementById("img-player"); // place
var imageComputer = document.getElementById("img-computer");

var well = document.getElementById("well"); //take a button
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

var counter = 0;

function count() {
    if (counter < 5) {
        return ++counter;
    }
    //       else {
    //        return printWinner();
    //        hideGameButtons()
    //        return ++counter;

    //  }
}

var computerPoints = 0;
var playerPoints = 0;

function countPlayerPoints() {
    return playerPoints++;
}

function countComputerPoints() {
    return computerPoints++;
}

function showGameInfo() {
    var gameInfo = document.getElementById("gameInfo");
    gameInfo.classList.remove("hide");
}

var buttons = document.getElementById("gameButtons");
var result = document.getElementById("resultButton");

function hideGameButtons() {
    //    buttons.classList.remove("show");
    //    buttons.classList.add("hide");
    if (counter == 5) {
        buttons.setAttribute("class", "hide");
        result.setAttribute("class", "show container-buttons");
    }
}

well.addEventListener("click", function (e) {
    // console.log(well.dataset.index);
    //generate Computer choice       
    var computerRandom = Math.floor((Math.random() * 3) + 1);
    var computerChoice = "IMG/" + computerRandom + ".png";
    // change image
    imagePlayer.setAttribute("src", "IMG/1.png");
    imageComputer.setAttribute("src", computerChoice);
    round.textContent = count(); // print counter

    if (findWinnerRound(well.dataset.index, computerRandom) == "index") {
        winner.textContent = localStorage.getItem("inputName");
        namePlace.setAttribute("class", "winner");
        computerPlace.setAttribute("class", "loser");
        countPlayerPoints();
    } else if (findWinnerRound(well.dataset.index, computerRandom) == "computerRandom") {
        winner.textContent = "Computer";
        computerPlace.setAttribute("class", "winner");
        namePlace.setAttribute("class", "loser");
        countComputerPoints();
    } else {
        winner.textContent = "No-winner";
        computerPlace.setAttribute("class", "loser");
        namePlace.setAttribute("class", "loser");
    }
    showGameInfo();
    hideGameButtons()

})

paper.addEventListener("click", function (e) {
    //generate Computer choice   
    var computerRandom = Math.floor((Math.random() * 3) + 1);
    var computerChoice = "IMG/" + computerRandom + ".png";
    // change image
    imagePlayer.setAttribute("src", "IMG/2.png");
    imageComputer.setAttribute("src", computerChoice);
    round.textContent = count(); // print counter


    if (findWinnerRound(paper.dataset.index, computerRandom) == "index") {
        winner.textContent = localStorage.getItem("inputName");
        namePlace.setAttribute("class", "winner");
        computerPlace.setAttribute("class", "loser");
        countPlayerPoints();
    } else if (findWinnerRound(paper.dataset.index, computerRandom) == "computerRandom") {
        winner.textContent = "Computer";
        computerPlace.setAttribute("class", "winner");
        namePlace.setAttribute("class", "loser");
        countComputerPoints();
    } else {
        winner.textContent = "No-winner";
        computerPlace.setAttribute("class", "loser");
        namePlace.setAttribute("class", "loser");
    }

    showGameInfo();
    hideGameButtons()

})

scissors.addEventListener("click", function (e) {
    //generate Computer choice    
    var computerRandom = Math.floor((Math.random() * 3) + 1);
    var computerChoice = "IMG/" + computerRandom + ".png";
    // change image
    imagePlayer.setAttribute("src", "IMG/3.png");
    imageComputer.setAttribute("src", computerChoice);
    round.textContent = count(); //print counter


    if (findWinnerRound(scissors.dataset.index, computerRandom) == "index") {
        winner.textContent = localStorage.getItem("inputName");
        namePlace.setAttribute("class", "winner");
        computerPlace.setAttribute("class", "loser");
        countPlayerPoints();
    } else if (findWinnerRound(scissors.dataset.index, computerRandom) == "computerRandom") {
        winner.textContent = "Computer";
        computerPlace.setAttribute("class", "winner");
        namePlace.setAttribute("class", "loser");
        countComputerPoints();
    } else if (findWinnerRound(scissors.dataset.index, computerRandom) == "nowin") {
        winner.textContent = "No-winner";
        computerPlace.setAttribute("class", "loser");
        namePlace.setAttribute("class", "loser");
    }

    showGameInfo();
    hideGameButtons()

})

function findWinnerRound(index, computerRandom) {
    if (index == 1 && computerRandom == 2) {
        return "computerRandom";
    } else if (index == 1 && computerRandom == 3) {
        return "index";
    } else if (index == 2 && computerRandom == 1) {
        return "index";
    } else if (index == 2 && computerRandom == 3) {
        return "computerRandom";
    } else if (index == 3 && computerRandom == 1) {
        return "computerRandom";
    } else if (index == 3 && computerRandom == 2) {
        return "index";
    } else {
        return "nowin";
    }
}

var getResult = document.getElementById("result");
getResult.addEventListener("click", function (e) {
    printWinner();
})

// WINNER PAGE print winner in the last page.
var winnerPage = document.getElementById("winnerPage");
var winnerOfGame = document.getElementById("winnerOfGame");

function printWinner() {
    homePage.setAttribute("class", "hide");
    inputPage.setAttribute("class", "hide");
    gamePage.setAttribute("class", "hide");
    winnerPage.setAttribute("class", "show");

    if (countComputerPoints() > countPlayerPoints()) {
        winnerOfGame.textContent = "Computer";
    } else if (countComputerPoints() < countPlayerPoints()) {
        winnerOfGame.textContent = localStorage.getItem("inputName");
    } else {
        winnerOfGame.textContent = "Both losers";
    }
}

//PLAY AGAIN
var playAgain = document.getElementById("return");

playAgain.addEventListener("click", function () {
    location.reload();
})
