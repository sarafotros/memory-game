console.log("Up and running!");

const cards = ["queen","queen","king","king"]; //const or var????
var cardsInPlay = [];


if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}

function flipCard(cardIn) {
	
if (cardsInPlay.length === 2) 
	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You found a match!");
	else {
		alert("Sorry, try again.");
	}
 console.log("user fliped " + cards[cardIn]);
 cardsInPlay.push(cards[cardIn]);
};

flipCard(0);
flipCard(2);
