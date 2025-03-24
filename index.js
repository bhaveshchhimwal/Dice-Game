var randomNumebr1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumebr1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomNumebr2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumebr2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage1;
image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);
if (randomNumebr1 > randomNumebr2) {
    document.querySelector("h1").innerHTML = "Player1 Wins!";
}
else if (randomNumebr1 === randomNumebr2) {
    document.querySelector("h1").innerHTML = "Play Again!";
}

else {
    document.querySelector("h1").innerHTML = "Player2 Wins!";
}
