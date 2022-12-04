let welcomeE = document.getElementById("welcome-e");
var yourName = "Shrunkhal";
var greet = "Welcome!";

welcomeE.innerText = greet + yourName;
welcomeE.innerText = welcomeE.innerText+" :)"

let countEl = document.getElementById("count-el");
let count = 0;
function increment(){
   count = count+1;
   countEl.innerText = count;
   console.log("clicked!"+" "+count)

}

let saveEl = document.getElementById("save-el")

function Save(){
    var countStr = count + " - "
    saveEl.textContent  += countStr;
    console.log("Saved!! at "+count)
    countEl.innerText =0;
    count=0;
}
