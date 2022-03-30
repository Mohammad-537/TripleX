Math.random()

let answerButton = document.querySelector(".Btn");
let textGame = document.querySelector(".game-text");
let resultGame = document.querySelector(".result");
let playAgain = document.querySelector(".btn2");
playAgain.style.display = "none";

let lives = Number(3);
let level = Number(1);
let difficulty = Number(1)


playAgain.addEventListener('click', function(){
    playAgain.style.display = "none";
    answerButton.style.display = "block";
    resultGame.style.display= "block";
    textGame.innerText = `Enter the three numbers in the boxs below`;
    lives = 3;
    level = 1;
    difficulty = 1;
    num1 = Math.floor(Math.random() * difficulty) + 1;
    num2 = Math.floor(Math.random() * difficulty) + 1;
    num3 = Math.floor(Math.random() * difficulty) + 1;
    cal1 = Number(num1 + num2 + num3);
    cal2 = Number(num1 * num2 * num3);
    resultGame.innerHTML = `The 3 numbers of codes add-up to ${cal1}<p>The 3 numbers of codes product to ${cal2}`;
    
});



let num1 = Math.floor(Math.random() * difficulty) + 1;
let num2 = Math.floor(Math.random() * difficulty) + 1;
let num3 = Math.floor(Math.random() * difficulty) + 1;


    if (lives == 0){
        textGame.innetText = `YOU LOSE HERE IS YOU POINTS ${level}`
        
    }
    
  let cal1 = Number(num1 + num2 + num3);
  let cal2 = Number(num1 * num2 * num3);

  
  resultGame.innerHTML = `The 3 numbers of codes add-up to ${cal1}<p>The 3 numbers of codes product to ${cal2}`;
  console.log(cal1,cal2)


  answerButton.addEventListener('click', function () {

    let guess1 = Number(document.querySelector(".ans1").value);
    let guess2 = Number(document.querySelector(".ans2").value);
    let guess3 = Number(document.querySelector(".ans3").value);
    let ans1 = Number(guess1 + guess2 + guess3)
    let ans2 = Number(guess1 * guess2 * guess3)

    
    if (ans1 == cal1 && ans2 == cal2){
        textGame.innerText = `CORRECT NOW IT IS LEVEL ${level} and you have ${lives} attemtps`;  
        difficulty++;
        level++;
        console.log(difficulty, num1)
         num1 = Math.floor(Math.random() * difficulty) + 1;
         num2 = Math.floor(Math.random() * difficulty) + 1;
         num3 = Math.floor(Math.random() * difficulty) + 1;
         cal1 = Number(num1 + num2 + num3);
         cal2 = Number(num1 * num2 * num3);
         resultGame.innerHTML = `The 3 numbers of codes add-up to ${cal1}<p>The 3 numbers of codes product to ${cal2}`;
    }
    else{
        lives--;
        if(lives < 0){
            textGame.innerText = `This your Score ${level - 1} congratulations`;
            playAgain.style.marginLeft = "auto";
            playAgain.style.marginRight = "auto";
            answerButton.style.marginLeft = "auto";
            answerButton.style.marginRight = "auto";
            playAgain.style.display="block";
            answerButton.style.display = "none" ;
            resultGame.style.display= "none";
        }
        else{
            textGame.innerText = `WRONG you have ${lives} attmpes`;

        }
        
    }
    })


   
    
    
    