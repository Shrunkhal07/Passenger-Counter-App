//-------Counter and Save--------
let countEl = document.getElementById("count-el")
let saveBtn = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")

let count =0;

function increment(){                                                        // FUNCTION
    count = count + 1
    countEl.innerText = count
}

function decrement(){
    count = count - 1;
    countEl.innerText = count;
}

function save() {
    var countStr = count + " - "
    console.log(count + "Saved!");
    saveEl.textContent += countStr
    countEl.innerText = 0;
    count = 0;
}

// -----Change text Color--------
function pink(){
    document.getElementById("text-input").style.color = "pink";
}

function blue(){
    document.getElementById("text-input").style.color =  "blue"
}
function head(){
    document.getElementById("text-input").style.color = "green";
}

//-----Welcome Message----------

let welcomeEl = document.getElementById("welcome-el");
let nameS = " Shrunkhal"

welcomeEl.innerText += nameS;

//------Calculator--------

let num1 = 40;
let num2 = 5;

document.getElementById("input-text1").innerText = num1;
document.getElementById("input-text2").textContent = num2;

let result = 0

let resultEl = document.getElementById("Result-el");

function add() {
    result = num1 + num2
    resultEl.innerText ="Sum is: "+ result;
}

function substract() {
    result = num1 - num2;
    resultEl.innerText ="Difference is: "+ result;
}

function multiply() {
    result = num1 * num2;
    resultEl.innerText = "Product is: "+result;
}

function divide(){
    result = num1/num2;
    resultEl.textContent = result;
}

// ---------Black-Jack Game with IF-Else------------

let player ={                                                               //Objects
    name: "Levi",                                                           // Function inside objects is called as methods
    chips: 125
}
let cards = [ ]                                                             // Arrays
let sum = 0
let hasBlackJack = false                                                    //Boolean
let isAlive = false
let message = " "
let sumEl = document.getElementById("sum-el");
let cardEl = document.querySelector("#card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " "+ player.chips;


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() *13)+1                     // Math inbulit object
    if(randomNumber >10){
        return 10;
    }
    else if (randomNumber ===1){
        return 11;
    }
    else {
        return randomNumber;
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}



function renderGame() {
    if(sum <=20){
        message = "Do you want another card"
    }
    else if(sum ===21){
        message = "Wohoo!! You have won this"
        hasBlackJack = true
    }
    else{
        message ="You are out of the game"
        isAlive = false
    }
    document.getElementById("message-el").textContent = message;
    sumEl.textContent = "Sum "+sum;
    
    //Render out first card and second card
    cardEl.textContent = "Cards: " 
    
    //Render out all the cards
    for(let i =0; i< cards.length; i++){                                         // For loop
        cardEl.textContent += cards[i] + ", "
    }
}

function newCard(){
    if(isAlive ==true && hasBlackJack===false){                               // If Else
        let thirdCard = getRandomCard();
        sum += thirdCard
        cards.push(thirdCard)
        
        
        renderGame()

    }
}

// Practice 
let Countries = ["abc", "india", "usa", "indonesia", "monaco"]

function getHand(){


let ran = Math.floor(Math.random()*5);
return Countries[ran]
}
console.log(getHand())

// Practice 2

let fruit = ["apple", "orange", "apple", "apple", "orange"]

let appleShelf = document.getElementById("apple-shelf")

let orangeShelf = document.getElementById("orange-shelf")

function sortFruit(){
for(let j =0; j<fruit.length; j++){
    if(fruit[j] === "apple"){
        appleShelf.textContent += "apple"

    }
    else{
        orangeShelf.textContent += "orange"
    }
}
}
sortFruit()