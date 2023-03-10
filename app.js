let countEl = document.getElementById("count-el"); 

let saveEl = document.getElementById("save-el");

let welcomeEl = document.getElementById("welcome-el");

// prompt("Tell me your name");
// welcomeEl.innerText = "Welcome Shrunkhal";


let count =0;   

function increment(){
   count = count+1;
   countEl.innerText = count;
   console.log("Increased"+count)
}

function decrement(){
    count = count-1;
    countEl.innerText = count;
    console.log("Decreased"+count);

}

 
function save(){
    //countEl.innerText = count;
    console.log(count+"Saved!!")
    saveEl.innerText +=  count+" - ";
    countEl.innerText = 0;
    count = 0;
}

var textInput = document.getElementById("text-input");
var greyInput = document.getElementById("grey");

greyInput.addEventListener("click",function(){
    textInput.style.fontSize = "100px"
});

function load(){
    document.getElementById("text-input").style.color = "green";
}
function blue(){
    document.getElementById("text-input").style.color = "pink";
}

