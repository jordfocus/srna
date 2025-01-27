let n1;
let n2;
let opSelector;
let ansOpt;
let answer;
let qNo = document.getElementById("Qno");
let score = document.getElementById("score");
let question = document.getElementById("question");
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
let audioSuccess = document.getElementById("audio-success");
let audioFail = document.getElementById("audio-fail");
let audioYay = document.getElementById("audio-yay");
let operator = ['+', '-', '*', '/'];

let t;
let correctAnswersCount = 0;

function restart() {
    score.innerHTML = "0";
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

function getQNo() {
    qNo.innerHTML = parseInt(qNo.innerHTML) + 1;
    // console.log("Q no: " + qNo.innerHTML);
}

function getScore() {
    score.innerHTML = parseInt(score.innerHTML) + parseInt(progress.style.width);
    // console.log(score.innerHTML);
}

function doWhenCorrect(i) {
    buttons[i].style.color = "#fff";
    buttons[i].style.backgroundColor = "green";
    if (audioSuccess != null)
    {
        audioSuccess.load();
        audioSuccess.play();
    }
    
    // increase correct answers count
    correctAnswersCount++;
    getScore();
}

function doWhenIncorrect(i) {
    buttons[i].style.color = "#fff";
    buttons[i].style.backgroundColor = "#fb3640";

    if (audioFail != null)
    {    
        audioFail.load();
        audioFail.play();
    }
    // console.log("wrong");
}

function outro(i) {
    setTimeout(() => {
        nextQuestion();
        buttons[i].style.color = "#000";
        buttons[i].style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }, 500);
}

function timed() {
    clearInterval(t);
    
    t = setInterval(() => {
        progress.style.width = (parseFloat(progress.style.width) - 0.2) + "%";
        console.log("called");
        if (parseFloat(progress.style.width) == 0) {
            clearInterval(t);
            nextQuestion();
        }
    }, 100)
}

buttons[0].addEventListener('click', () => {
    if (buttons[0].innerText == answer) {
        doWhenCorrect(0);
    } else {
        doWhenIncorrect(0);
    }
    clearInterval(t);
    outro(0);
});
buttons[1].addEventListener('click', () => {
    if (buttons[1].innerText == answer) {
        doWhenCorrect(1);
    } else {
        doWhenIncorrect(1);
    }
    clearInterval(t);
    outro(1);
});
buttons[2].addEventListener('click', () => {
    if (buttons[2].innerText == answer) {
        doWhenCorrect(2);
    } else {
        doWhenIncorrect(2);;
    }
    clearInterval(t);
    outro(2);
});
buttons[3].addEventListener('click', () => {
    if (buttons[3].innerText == answer) {
        doWhenCorrect(3);
    } else {
        doWhenIncorrect(3);
    }
    clearInterval(t);
    outro(3);
});


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
    let trophyGifElement = "";
    if (correctAnswersCount == 10)
    {
        trophyGifElement = "<div><img class=\"result-image\" src=\"../shared/trophy.webp\" alt=\"image\"></div>";     
        if (audioYay != null)
        {    
            audioYay.load();
            audioYay.play();
        }
    }

    correctAnswers.innerHTML = correctAnswersCount + "/10";

    if (correctAnswersCount > 8) {
        let emoji = "&#128525";
        message.innerHTML = "ОДЛИЧЕН РЕЗУЛТАТ! БРАВО!" + trophyGifElement;
    } else if (correctAnswersCount > 6) {
        let emoji = "&#128531";
        message.innerHTML = "СКОРО ОДЛИЧНО, ДА ПОВЕЖБАМЕ УШТЕ МАЛЦЕ !!" + emoji;
    } else if (correctAnswersCount > 4) {
        let emoji = "&#128549";
        message.innerHTML = "МОЖЕШ И ПОДОБРО, САМО  ТРЕБА ПОВЕЌЕ ВЕЖБАЊЕ" + emoji;
    } else {
        let emoji = "&#128577";
        message.innerHTML = "СО ПОВЕЌЕ РЕШАВАЊЕ ДО ПОДОБРИ РЕЗУЛТАТИ НАРЕДНИОТ ПАТ" + emoji;
    }

    setCorrectAnswersDotColor(correctAnswersCount);
    setCorrectAnswersAndTimeDotColor(fScore.innerText);
}
