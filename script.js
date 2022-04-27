let chooseButton = document.querySelector(".chooseButton")
let rock = document.querySelector("#rock");
let papper = document.querySelector("#papper");
let scissors = document.querySelector("#scissors");
let myField = document.querySelector(".myField");
let opponentField = document.querySelector(".opponentField");
let result =document.querySelector(".result")

let myChose;

let comp = Math.round((Math.random()*10))


chooseButton.addEventListener("click", (event)=>{

  let target = event.target;
  if(target==rock){
    myChose = getRandomIntInclusive(1,3);
    myField.innerHTML="<img src='/logo/kamen.jpg' width='250px' height='100px'>";
  }else if(target==papper){
    myChose =  getRandomIntInclusive(4,6);
    myField.innerHTML="<img src='/logo/bumaga.jpg' width='250px' height='100px'>";    
  }else if(target==scissors){
    myChose =  getRandomIntInclusive(7,9);
    myField.innerHTML="<img src='/logo/nojni.jpg' width='250px' height='100px'>";    
  }
  aiChoice(myChose);
})

function aiChoice (myChose){
  let aiChoice = getRandomIntInclusive(1,9);
  console.log(aiChoice);
  if (myChose<=3&&aiChoice>=7){
    result.innerHTML = "YOU WIN MFCKR";
    opponentField.innerHTML="<img src='/logo/nojni.jpg' width='250px' height='100px'>"
  } else if(myChose<=3&&aiChoice>=4&&aiChoice<=6){
    result.innerHTML = "YOU LOOSER";
    opponentField.innerHTML="<img src='/logo/bumaga.jpg' width='250px' height='100px'>"; 
  }else if (myChose<=3&&aiChoice<=3){
    result.innerHTML = "The DROW, repeat";
    opponentField.innerHTML="<img src='/logo/kamen.jpg' width='250px' height='100px'>"; 
  }else if(myChose>=4&&myChose<=6&&aiChoice<=3){
    result.innerHTML = "YOU WIN MFCKR";
    opponentField.innerHTML="<img src='/logo/kamen.jpg' width='250px' height='100px'>"; 
  }else if (myChose>=4&&myChose<=6&&aiChoice>=4&&aiChoice<=6){
    result.innerHTML = "The DROW, repeat";
    opponentField.innerHTML="<img src='/logo/bumaga.jpg' width='250px' height='100px'>";
  }else if(myChose>=4&&myChose<=6&&aiChoice>=7){
    result.innerHTML = "YOU LOOSER";
    opponentField.innerHTML="<img src='/logo/nojni.jpg' width='250px' height='100px'>"
  }else if (myChose>=7&&aiChoice>=7){
    result.innerHTML = "The DROW, repeat";
    opponentField.innerHTML="<img src='/logo/nojni.jpg' width='250px' height='100px'>"
  }else if (myChose>=7&&aiChoice>=4&&aiChoice<=6){
    result.innerHTML = "YOU WIN MFCKR";
    opponentField.innerHTML="<img src='/logo/bumaga.jpg' width='250px' height='100px'>"
  }else if (myChose>=7&aiChoice<=3){
    result.innerHTML = "YOU LOOSER";
    opponentField.innerHTML="<img src='/logo/kamen.jpg' width='250px' height='100px'>"; 
  }

}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

   

 