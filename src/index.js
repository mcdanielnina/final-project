const number3 = Math.floor((Math.random() * 10) + 1);
const number4 = Math.floor((Math.random() * 10) + 1);
number3.innerHTML= document.getElementById("number1");
number4.innerHTML= document.getElementById("number2");
const checkButton = document.getElementById("check");
const highScoreButton = document.getElementById("high-score");
const clearButton = document.getElementById("clear"); 
const scoreNumber = document.getElementById("score");
const rightWrong = document.getElementById("right-wrong");
let score = 0;




//Answer
var anser = number3 + number4;







checkButton.onclick = function(){
    const checkAnswer = document.getElementById("num-text");
    const value = checkAnswer.value;
    if (checkAnswer.value == anser) 
       {
          rightWrong.innerHTML = "Good Job!";
          
          score++;
          //console.log(score ++);
       }
    else{
        rightWrong.innerHTML = "Try again :), the answer was " + anser;
        score--;
    }
   


       document.getElementById("check").value = "Check";
       document.getElementById("num-text").value = "";                
       document.getElementById("number1").innerHTML = "";
       document.getElementById("number2").innerHTML = ""; 
       number1 = Math.floor((Math.random() * 10) + 1);
       number2 = Math.floor((Math.random() * 10) + 1);
       document.getElementById("number1").innerHTML = number1; 
       document.getElementById("number2").innerHTML = number2;
      
       anser = number1 + number2;
       scoreNumber.innerHTML = "";
       
       scoreNumber.append(score);

       


};


highScoreButton.onclick = function newHighScore(){
    let localStorageName = "digitz";
    let highScore = localStorage.getItem(localStorageName) == null ? 0 : localStorage.getItem(localStorageName);
    if(localStorage.getItem(localStorageName)== null){
        highScore = 0;
    } else {
        highScore = localStorage.getItem(localStorageName);
    }
    highScore = Math.max(score, highScore);
    localStorage.setItem(localStorageName, highScore);
    alert("Your highscore is " + highScore);


}
clearButton.onclick = function clearHighScore(){
    localStorage.clear();
}



    





  

 


