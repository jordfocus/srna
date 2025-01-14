let n1;
let n2;
let opSelector;
let ansOpt;
let answer;
let qNo = document.getElementById("Qno");
let score = document.getElementById("score");
let question = document.getElementById("question");
let currentAmount = document.getElementById("current-amount");
let buttons = document.getElementsByTagName("button");
let start = document.getElementById("start-btn");
let fScore = document.getElementById("final-score");
let correctAnswers = document.getElementById("correct-answers");
let startBox = document.getElementById("start-game");
let gameBox = document.getElementById("in-game");
let endBox = document.getElementById("end-game");
let progress = document.getElementById("progress");
let message = document.getElementById("message");
let resultDot1 = document.getElementById("result-dot-1");
let resultDot2 = document.getElementById("result-dot-2");
let operator = ['+', '-', '*', '/'];

let nextBtn = document.getElementById("next-btn");
let coinOne = document.getElementById("coin-one");
let coinTwo = document.getElementById("coin-two");
let coinFive = document.getElementById("coin-five");
let coinTen = document.getElementById("coin-ten");
let coinFifty = document.getElementById("coin-fifty");

let coinChange = document.getElementById("coin-change");
let thankYou = document.getElementById("thank-you");

let productImage = document.getElementById("product");


// download images from
// https://en.numista.com/catalogue/note208546.html

let t;
let correctAnswersCount = 0;

const moneyButtons = document.querySelectorAll("button");
const minValue = 0;
const maxValue = 20;

function recalculate()
{
    
    let total = parseInt(coinOne.innerHTML)
    + parseInt(coinTwo.innerHTML)*2 
    + parseInt(coinFive.innerHTML)*5 
    + parseInt(coinTen.innerHTML)*10;

    currentAmount.innerHTML = total;

    if (total == answer)
    {
        if (thankYou != null)
        {
            thankYou.load();
            thankYou.play();
        }
        nextQuestion();
    }
}

function startQuiz() {
    // score.innerHTML = "0";
    qNo.innerHTML = "0";
    nextQuestion();

    gameBox.style.display = "block"
    startBox.style.display = "none";
    endBox.style.display = "none";
    // timer.style.display = "block";

    // reset correct answers counter
    correctAnswersCount = 0;

    addEventListenersToButtons();
}

function restart() {
    // score.innerHTML = "0";
    qNo.innerHTML = "0";
    nextQuestion();

    gameBox.style.display = "block"
    startBox.style.display = "none";
    endBox.style.display = "none";
    timer.style.display = "block";

    // reset correct answers counter
    correctAnswersCount = 0;
}

function whenFinished() {
    console.log("Finished.")
    gameBox.style.display = "none"
    startBox.style.display = "none";
    endBox.style.display = "flex";
    lastmessage();
}

function timed() {
    // clearInterval(t);
    
    // t = setInterval(() => {
    //     progress.style.width = (parseFloat(progress.style.width) - 0.2) + "%";
    //     console.log("called");
    //     if (parseFloat(progress.style.width) == 0) {
    //         clearInterval(t);
    //         nextQuestion();
    //     }
    // }, 100)
}

function getQNo() {
    qNo.innerHTML = parseInt(qNo.innerHTML) + 1;
    // console.log("Q no: " + qNo.innerHTML);
}

function getScore() {
    score.innerHTML = parseInt(score.innerHTML) + parseInt(progress.style.width);
    // console.log(score.innerHTML);
}

function addEventListenersToButtons() {
    console.log("Adding event listeners to buttons...");
    moneyButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          // 1. Get the clicked element
          const element = event.currentTarget;
          // 2. Get the parent
          const parent = element.parentNode;
          // 3. Get the number (within the parent)
          const numberContainer = parent.querySelector(".number");
          const number = parseFloat(numberContainer.textContent);
          // 4. Get the minus and plus buttons
          const increment = parent.querySelector(".plus");
          const decrement = parent.querySelector(".minus");
          // 5. Change the number based on click (either plus or minus)
          const newNumber = element.classList.contains("plus")
            ? number + 1
            : number - 1;
          numberContainer.textContent = newNumber;
          console.log(newNumber);
          recalculate();
          // 6. Disable and enable buttons based on number value (and undim number)
          if (newNumber <= minValue) {
            decrement.disabled = true;
            numberContainer.classList.add("dim");
            // Make sure the button won't get stuck in active state (Safari)
            element.blur();
          } else if (newNumber > minValue && newNumber < maxValue) {
            decrement.disabled = false;
            increment.disabled = false;
            numberContainer.classList.remove("dim");
          } else if (newNumber >= maxValue) {
            increment.disabled = true;
            numberContainer.textContent = `${newNumber}`;
            element.blur();
          }

          // 7. Play sound
          if (coinChange != null)
          {
            coinChange.load();
            coinChange.play();
          }

        });
      });
      
}

function setNewProductImage() {
    var productImagePath = "./img/"+Math.floor((Math.random()*10))+"-product.jpg";
    productImage.src = productImagePath;
}
function nextQuestion() {
    //addEventListenersToButtons();

    //progress.style.width = "100%";
    timed();
    // timed();
    // fScore.innerHTML = score.innerHTML;
    if (qNo.innerText == "10") {
        whenFinished();
    }
    answer = Math.floor(Math.random() * 150)+1;

    question.innerHTML = "ЦЕНА: " + answer + " денари.";

    getOptions();
    getQNo();
    resetButtonValues();    
    setNewProductImage();
}

function resetButtonValues()
{
    coinOne.innerHTML = "0";
    coinTwo.innerHTML = "0";
    coinFive.innerHTML = "0";
    coinTen.innerHTML = "0";
    currentAmount.innerHTML = "0";
}

function getOptions() {

    // for (let i = 0; i < 4; i++ && i != ansOpt) {
    //     if (answer > 100) {
    //         buttons[i].innerHTML = answer + Math.floor(Math.random() * answer * 0.4);
    //     } else if (answer > 30 && answer < 100) {
    //         buttons[i].innerHTML = answer + Math.floor(Math.random() * answer * 0.6);
    //     } else {
    //         buttons[i].innerHTML = Math.floor(Math.random() * 100);
    //     }

    //     if (answer < 0) {
    //         buttons[i].innerHTML = "-" + buttons[i].innerHTML;
    //     }
    // }
    // ansOpt = Math.floor(Math.random() * 4);
    // buttons[ansOpt].innerHTML = answer;
}

function setCorrectAnswersDotColor(numberOfCorrectAnswers)
{
    if (numberOfCorrectAnswers > 8)
    {
        resultDot1.style="background-color:green";
    }
    else if (numberOfCorrectAnswers > 5)
    {
        resultDot1.style="background-color:yellow";
    }
    else
    {
        resultDot1.style="background-color:red";
    }
}

function setCorrectAnswersAndTimeDotColor(score)
{
    if (score >= 850)
    {
        resultDot2.style="background-color:green";
    }
    else if (score > 450)
    {
        resultDot2.style="background-color:yellow";
    }
    else
    {
        resultDot2.style="background-color:red";
    }
}

function lastmessage() {
    clearInterval(t);
    let trophyGifElement = "<div><img class=\"result-image\" src=\"../shared/trophy.webp\" alt=\"image\"></div>";     
    
    message.innerHTML = "Браво!" + trophyGifElement;

 

    // setCorrectAnswersDotColor(correctAnswersCount);
    // setCorrectAnswersAndTimeDotColor(fScore.innerText);
}

