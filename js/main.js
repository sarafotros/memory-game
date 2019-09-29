
var cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png"
},
{
	rank:"queen",	
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png"
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png"
},
{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
		//this.setAttribute('src',cards[cardId].cardImage); //???
	}
};

function flipCard() {
	var cardId = this.getAttribute('data-id');
 	console.log("user fliped " + cards[cardId].rank);
 	console.log("user fliped " + cards[cardId].cardImage);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
};

function checkForMatch() { 
	this.setAttribute('src', cards[cardId].cardImage);
	 if (cardsInPlay.length === 2) {
      if (cardsInPlay[0] === cardsInPlay[1]) {
         alert("You found a match!");
      } else {
         alert("Sorry, try again.");
      }
    }
};

createBoard();
cardsInPlay.push(cards[0]);





