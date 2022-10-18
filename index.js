
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const player1 = document.querySelector(".img1")
const imageSource1 = 'images/dice' + randomNumber1 + ".png"
player1.setAttribute("src", imageSource1)

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const player2 = document.querySelector(".img2")
const imageSource2 = 'images/dice' + randomNumber2 + ".png"
player2.setAttribute("src", imageSource2)

if (randomNumber1 > randomNumber2) {
  const player1Wins = document.querySelector("h1")
  player1Wins.innerHTML = '🚩Player 1 Wins!'
} else if (randomNumber2 > randomNumber1) {
  const player2Wins = document.querySelector("h1")
  player2Wins.innerHTML = 'Player 2 Wins!🚩'
} else {
  document.querySelector("h1").innerHTML = 'Draw!'
}