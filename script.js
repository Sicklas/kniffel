let arrayPlayerOne = [];
let arrayPlayerTwo = [];
let arrayPlayerThree = [];
let arrayPlayerFour = [];
let arrayPlayerFive = [];

function trigger (){

const input = ["One", "Two", "Three", "Four", "Five"]
for (let i = 0; i<input.length; i++){
    submitPlayers(input[i]);
    }
}

function submitPlayers (input){

    let idInput = "Player" + input;
    let idOutput = "namePlayer" + input;
    let playerOutput = document.getElementById(idInput).value;
    document.getElementById(idOutput).innerHTML = playerOutput;

}

// call the `storeInput` function every second
// setInterval(startGame, 500);
// setInterval(sum, 500);


function startGame(){

    const player = ["One", "Two", "Three", "Four", "Five", "Six"];
    const field = ["One", "Two", "Three", "Four", "Five", "Six"];
    arrayPlayerOne = [];
    arrayPlayerTwo = [];
    arrayPlayerThree = [];
    arrayPlayerFour = [];
    arrayPlayerFive = [];
    for (let i = 0; i<player.length; i++){
        for (let e = 0; e<field.length; e++){
        calcGame(player[i], field[e]);
        }
    }
}

function calcGame(player, field){

    let inputID =  "field" + field + "Player" + player;
    
    if(player === "One"){
        const arrayValue = document.getElementById(inputID).value;
        if(arrayValue > 0){
            arrayPlayerOne.push(parseInt(arrayValue));
            
        }
        
    }
    if(player === "Two"){
        const arrayValue = document.getElementById(inputID).value;
        if(arrayValue > 0){
            arrayPlayerTwo.push(parseInt(arrayValue));
           
        }
        
    }
    if(player === "Three"){
        const arrayValue = document.getElementById(inputID).value;
        if(arrayValue > 0){
            arrayPlayerThree.push(parseInt(arrayValue));
           
        }
        
    }
    if(player === "Four"){
        const arrayValue = document.getElementById(inputID).value;
        if(arrayValue > 0){
            arrayPlayerFour.push(parseInt(arrayValue));
           
        }
        
    }
    if(player === "Five"){
        const arrayValue = document.getElementById(inputID).value;
        if(arrayValue > 0){
            arrayPlayerFive.push(parseInt(arrayValue));
           
        }
        
    }

}



function sum(){
    const input = ["One", "Two", "Three", "Four", "Five"]
    for (let i = 0; i<input.length; i++){

        let comID = "comUpperSumPlayer" + input[i];
        let bonusID = "bonusPlayer" + input[i];
        let sumID = "upperSumPlayer" + input[i];
        let underID = "comSumUpperforUnder" + input[i];
        
   
        if (input[i] === "One"){
            var Sum = arrayPlayerOne.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
              },0);
              document.getElementById(sumID).innerHTML = Sum;
              doTheRest(Sum, input[i], comID, bonusID, underID);
        }

        if (input[i] === "Two"){
            var Sum = arrayPlayerTwo.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
              },0);
              document.getElementById(sumID).innerHTML = Sum;
              doTheRest(Sum, input[i], comID, bonusID, underID);
        }

        if (input[i] === "Three"){
            var Sum = arrayPlayerThree.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
              },0);
              document.getElementById(sumID).innerHTML = Sum;
              doTheRest(Sum, input[i], comID, bonusID, underID);
        }

        if (input[i] === "Four"){
            var Sum = arrayPlayerFour.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
              },0);
              document.getElementById(sumID).innerHTML = Sum;
              doTheRest(Sum, input[i], comID, bonusID, underID);
        }

        if (input[i] === "Five"){
            var Sum = arrayPlayerFive.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
              },0);
              document.getElementById(sumID).innerHTML = Sum;
              doTheRest(Sum, input[i], comID, bonusID, underID);
        }
        
        
    }
}

function doTheRest(Sum, player, comID, bonusID, underID){
    if (Sum >= 63){
        let finalScore = Sum + 35;
        complete(player);
        document.getElementById(comID).innerHTML = finalScore;
        document.getElementById(bonusID).style.backgroundColor = "#e0ffcd";
        document.getElementById(underID).innerHTML = finalScore;
    }
    else{
        document.getElementById(bonusID).innerHTML = "0";
        document.getElementById(comID).innerHTML = Sum;
        document.getElementById(bonusID).style.backgroundColor = "#ff847c";
        document.getElementById(underID).innerHTML = Sum;
    }
}

function complete (player){
    let bonusID = "bonusPlayer" + player;
    let comID = "comUpperSumPlayer" + player;
    


    document.getElementById(bonusID).innerHTML = "35"; 
};

