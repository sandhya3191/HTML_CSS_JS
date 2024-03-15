/* This object holds predefined positions for dots on
 the dice face for each possiblr number rolled */
function createDice(number){

    const dotPositionMatrix = {
		1: [
			[50, 50]
		],
		2: [
			[20, 20],
			[80, 80]
		],
		3: [
			[20, 20],
			[50, 50],
			[80, 80]
		],
		4: [
			[20, 20],
			[20, 80],
			[80, 20],
			[80, 80]
		],
		5: [
			[20, 20],
			[20, 80],
			[50, 50],
			[80, 20],
			[80, 80]
		],
		6: [
			[20, 20],
			[20, 80],
			[50, 20],
			[50, 80],
			[80, 20],
			[80, 80]
		]
};

const dice = document.createElement("div"); // creation of <div> element  and assign it to the dice constant

dice.classList.add("dice"); // adding CSS class "dice" to the dice element

/*looping through the dot positions corresponding to the number rolled on the dice. */

for(const dotPosition of dotPositionMatrix[number]){
    const dot = document.createElement("div");

    dot.classList.add("dice-dot");

   /* set the position of the dot within the dice face using CSS custom properties. */

    dot.style.setProperty("--top", dotPosition[0] + "%");
    dot.style.setProperty("--left", dotPosition[1] + "%");


    dice.appendChild(dot); //appending "dot element to the "dice" element
}

return dice;
}

function randomizeDice(diceContainer, numberOfDice){
    diceContainer.innerHTML ="";
    for(let i=0; i<numberOfDice; i++){
        const random =Math.floor((Math.random() * 6)+1);
        const dice = createDice(random);

        diceContainer.appendChild(dice);
    }
}
const number_of_dice=6;
const diceContainer = document.querySelector(".dice-container");
const btnRollDice = document.querySelector(".btn-roll-dice");

randomizeDice(diceContainer, number_of_dice);

btnRollDice.addEventListener("click", () =>{
    const interval = setInterval(() => {
        randomizeDice(diceContainer,number_of_dice);
    }, 50);

    setTimeout(() => clearInterval(interval),1000);
});