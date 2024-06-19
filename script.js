/*Oberer Teil*/
let arrayPlayerOne = [];
let arrayPlayerTwo = [];
let arrayPlayerThree = [];
let arrayPlayerFour = [];
let arrayPlayerFive = [];
/*Unterer Teil*/
let underArrayPlayerOne = [];
let underArrayPlayerTwo = [];
let underArrayPlayerThree = [];
let underArrayPlayerFour = [];
let underArrayPlayerFive = [];



document.addEventListener("keyup",function() {
    startGame();
    sum();
    endSum();
    compareSum ();
});
document.addEventListener("click",function() {
    startGame();
    sum();
    endSum();
    compareSum ();
});





function startGame(){

    //For the upper Fields
    const player = ["One", "Two", "Three", "Four", "Five"];
    const field = ["One", "Two", "Three", "Four", "Five", "Six"];
    
    //For the Fields under
    const player2 = ["One", "Two", "Three", "Four", "Five"];
    const field2 = ["dreier", "vierer", "fullHouse", "kleineStrasse", "grosseStrasse", "kniffel", "chance"];
    
    //Set the array to 0 everytime the Game starts.
    arrayPlayerOne = [];
    arrayPlayerTwo = [];
    arrayPlayerThree = [];
    arrayPlayerFour = [];
    arrayPlayerFive = [];
    underArrayPlayerOne = [];
    underArrayPlayerTwo = [];
    underArrayPlayerThree = [];
    underArrayPlayerFour = [];
    underArrayPlayerFive = [];
    
    //Goind through the fields an passing it to calcGame Function
    for (let i = 0; i<player.length; i++){
        for (let e = 0; e<field.length; e++){
        calcGame(player[i], field[e]);
        }
    }
    //Goind through the fields an passing it to calcUnderGame Function
    for (let i = 0; i<player2.length; i++){
        for (let e = 0; e<field2.length; e++){
        calcUnderGame(player2[i], field2[e]);
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

function calcUnderGame(player2, field2){

    let inputID =  field2 + "Player" + player2;
    
    if(player2 === "One"){
        const arrayValue = document.getElementById(inputID).value;
        if(arrayValue > 0){
            underArrayPlayerOne.push(parseInt(arrayValue));
            
            
        }
        
    }
    if(player2 === "Two"){
        const arrayValue = document.getElementById(inputID).value;
        if(arrayValue > 0){
            underArrayPlayerTwo.push(parseInt(arrayValue));
            
            
        }
        
    }
    if(player2 === "Three"){
        const arrayValue = document.getElementById(inputID).value;
        if(arrayValue > 0){
            underArrayPlayerThree.push(parseInt(arrayValue));
            
            
        }
        
    }
    if(player2 === "Four"){
        const arrayValue = document.getElementById(inputID).value;
        if(arrayValue > 0){
            underArrayPlayerFour.push(parseInt(arrayValue));
            
            
        }
        
    }
    if(player2 === "Five"){
        const arrayValue = document.getElementById(inputID).value;
        if(arrayValue > 0){
            underArrayPlayerFive.push(parseInt(arrayValue));
            
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
        let sumUnderID = "comSumUnderforUnder" + input[i];
        
   
        if (input[i] === "One"){

            //Upper
            var Sum = arrayPlayerOne.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
              },0);
              document.getElementById(sumID).innerHTML = Sum;
              doTheRest(Sum, input[i], comID, bonusID, underID);

            //Under
            var Sum2 = underArrayPlayerOne.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
              },0);
              document.getElementById(sumUnderID).innerHTML = Sum2;
        }

        if (input[i] === "Two"){
            //Upper
            var Sum = arrayPlayerTwo.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
              },0);
              document.getElementById(sumID).innerHTML = Sum;
              doTheRest(Sum, input[i], comID, bonusID, underID);

              //Under
            var Sum2 = underArrayPlayerTwo.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
              },0);
              document.getElementById(sumUnderID).innerHTML = Sum2;
        }

        if (input[i] === "Three"){
            //Upper
            var Sum = arrayPlayerThree.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
              },0);
              document.getElementById(sumID).innerHTML = Sum;
              doTheRest(Sum, input[i], comID, bonusID, underID);

               //Under
            var Sum2 = underArrayPlayerThree.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
              },0);
              document.getElementById(sumUnderID).innerHTML = Sum2;
        }

        if (input[i] === "Four"){
            //Upper
            var Sum = arrayPlayerFour.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
              },0);
              document.getElementById(sumID).innerHTML = Sum;
              doTheRest(Sum, input[i], comID, bonusID, underID);

               //Under
            var Sum2 = underArrayPlayerFour.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
              },0);
              document.getElementById(sumUnderID).innerHTML = Sum2;
        }

        if (input[i] === "Five"){
            //Upper
            var Sum = arrayPlayerFive.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
              },0);
              document.getElementById(sumID).innerHTML = Sum;
              doTheRest(Sum, input[i], comID, bonusID, underID);

               //Under
            var Sum2 = underArrayPlayerFive.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
              },0);
              document.getElementById(sumUnderID).innerHTML = Sum2;
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





let timer //for the double click
const player = ["One", "Two", "Three", "Four", "Five"];
const field = ["dreier", "vierer", "fullHouse", "kleineStrasse", "grosseStrasse", "kniffel", "chance"];
//Going through the fields
for (let i = 0; i<player.length; i++){
    for (let e = 0; e<field.length; e++){
    let ID = field[e] + "Player" + player[i];


    if(field[e] === "fullHouse"){
document.getElementById(ID).addEventListener('click', event => {
  if (event.detail === 1) {
    timer = setTimeout(() => {
        document.getElementById(ID).value = 25;
        document.getElementById(ID).style.backgroundColor = "#e0ffcd";
        document.getElementById(ID).style.border = "none";
    }, 200)
  }
})
document.getElementById(ID).addEventListener('dblclick', event => {
  clearTimeout(timer)
    document.getElementById(ID).value = 0;
    document.getElementById(ID).style.backgroundColor = "#ff847c";
    document.getElementById(ID).style.border = "none";
})
}

if(field[e] === "kleineStrasse"){
    document.getElementById(ID).addEventListener('click', event => {
      if (event.detail === 1) {
        timer = setTimeout(() => {
            document.getElementById(ID).value = 30;
            document.getElementById(ID).style.backgroundColor = "#e0ffcd";
            document.getElementById(ID).style.border = "none";
        }, 200)
      }
    })
    document.getElementById(ID).addEventListener('dblclick', event => {
      clearTimeout(timer)
        document.getElementById(ID).value = 0;
        document.getElementById(ID).style.backgroundColor = "#ff847c";
        document.getElementById(ID).style.border = "none";
    })
    }
    if(field[e] === "grosseStrasse"){
        document.getElementById(ID).addEventListener('click', event => {
          if (event.detail === 1) {
            timer = setTimeout(() => {
                document.getElementById(ID).value = 40;
                document.getElementById(ID).style.backgroundColor = "#e0ffcd";
                document.getElementById(ID).style.border = "none";
            }, 200)
          }
        })
        document.getElementById(ID).addEventListener('dblclick', event => {
          clearTimeout(timer)
            document.getElementById(ID).value = 0;
            document.getElementById(ID).style.backgroundColor = "#ff847c";
            document.getElementById(ID).style.border = "none";
        })
        }
        if(field[e] === "kniffel"){
            document.getElementById(ID).addEventListener('click', event => {
              if (event.detail === 1) {
                timer = setTimeout(() => {
                    document.getElementById(ID).value = 50;
                    document.getElementById(ID).style.backgroundColor = "#fff1ae";
                    document.getElementById(ID).style.border = "none";
                }, 200)
              }
            })
            document.getElementById(ID).addEventListener('dblclick', event => {
              clearTimeout(timer)
                document.getElementById(ID).value = 0;
                document.getElementById(ID).style.backgroundColor = "#ff847c";
                document.getElementById(ID).style.border = "none";
            })
            }
    }
}

function endSum(){
    for (let i = 0; i<player.length; i++){
        let upperID = "comSumUnderforUnder" + player[i];
        let underID = "comSumUpperforUnder" + player[i];
        let sumID = "endSum" + player[i];
        let value1 = document.getElementById(upperID).innerHTML;
        let value2 = document.getElementById(underID).innerHTML;
        let finalScore = (parseInt(value1)) + (parseInt(value2));
        document.getElementById(sumID).innerHTML = finalScore;
}
}

function compareSum (){
    let value1 = document.getElementById('endSumOne').innerHTML;
    let value2 = document.getElementById('endSumTwo').innerHTML;
    let value3 = document.getElementById('endSumThree').innerHTML;
    let value4 = document.getElementById('endSumFour').innerHTML;
    let value5 = document.getElementById('endSumFive').innerHTML;

    let highestNumber = Math.max(value1, value2, value3, value4, value5);
    
    if(highestNumber == value1){
        document.getElementById('endSumOne').style.backgroundColor = "yellow";
    }
    else{
        document.getElementById('endSumOne').style.backgroundColor = "white";
    }
    if(highestNumber == value2){
        document.getElementById('endSumTwo').style.backgroundColor = "yellow";
    }
    else{
        document.getElementById('endSumTwo').style.backgroundColor = "white";
    }
    if(highestNumber == value3){
        document.getElementById('endSumThree').style.backgroundColor = "yellow";
    }
    else{
        document.getElementById('endSumThree').style.backgroundColor = "white";
    }
    if(highestNumber == value4){
        document.getElementById('endSumFour').style.backgroundColor = "yellow";
    }
    else{
        document.getElementById('endSumFour').style.backgroundColor = "white";
    }
    if(highestNumber == value5){
        document.getElementById('endSumFive').style.backgroundColor = "yellow";
    }
    else{
        document.getElementById('endSumFive').style.backgroundColor = "white";
    }
}