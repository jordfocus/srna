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
let startBox = document.getElementById("start-game");
let gameBox = document.getElementById("in-game");
let endBox = document.getElementById("end-game");
let progress = document.getElementById("progress");
let message = document.getElementById("message");
let t;

function restart() {
    score.innerHTML = "0";
    qNo.innerHTML = "0";
    nextQuestion();

    gameBox.style.display = "block"
    startBox.style.display = "none";
    endBox.style.display = "none";
    timer.style.display = "block";
}

function whenFinished() {
    console.log("Finished.")
    gameBox.style.display = "none"
    startBox.style.display = "none";
    endBox.style.display = "flex";
    lastmessage();
}

function nextQuestion() {

    progress.style.width = "100%";
    timed();
    // timed();
    fScore.innerHTML = score.innerHTML;
    if (qNo.innerText == "10") {
        whenFinished();
    }
    n1 = Math.floor(Math.random() * 100);
    n2 = Math.floor(Math.random() * 100);
    opSelector = "-";

    if (opSelector == "-") {
        for (let i = 0; i < 100; i++) {
            if (n1 > n2
                && n1 > 0
                && n2 > 0) {
                break;
            }
            n1 = Math.floor(Math.random() * 100);
            n2 = Math.floor(Math.random() * 100);
        }

    }

    question.innerHTML = n1 + opSelector + n2;
    answer = eval(question.innerHTML);
    let innerHTMLText = n1 + opSelector + "⬜"
    question.innerHTML = innerHTMLText + " = " + (n1 - n2);

    // console.log("answer: " + answer);
    getOptions();
    getQNo();

}

function getOptions() {

    for (let i = 0; i < 4; i++ && i != ansOpt) {
        if (n2 > 60) {
            buttons[i].innerHTML = n2 - Math.floor(Math.random() * 59);
        } else if (n2 > 30 && n2 < 60) {
            buttons[i].innerHTML = n2 + Math.floor(Math.random() * 30);
        } 
        else if (n2 > 10 && n2 < 30) {
            buttons[i].innerHTML = n2 + Math.floor(Math.random() * 40);
        }
        else {
            buttons[i].innerHTML = Math.floor(Math.random() * 100);
        }

        if (answer < 0) {
            buttons[i].innerHTML = "-" + buttons[i].innerHTML;
        }
    }
    ansOpt = Math.floor(Math.random() * 4);
    buttons[ansOpt].innerHTML = n2;

    // generate one similar value - value that will end with the same digit as the correct value
    generateSimilarValue(n2, ansOpt);
}

function generateSimilarValue(correctAnswerValue, correctAnswerIndex)
{
    let lastDigit = correctAnswerValue % 10;
    if (correctAnswerIndex == 3)
    {
        let similarValueIndex = Math.floor(Math.random() * 3);
        let updatePotentialAnswer = (Math.floor(buttons[similarValueIndex].innerHTML/10)*10) + lastDigit;
        buttons[similarValueIndex].innerHTML = updatePotentialAnswer;
    }
    else if (correctAnswerIndex == 0)
    {
        let similarValueIndex = Math.floor(Math.random() * 3) + 1;
        let updatePotentialAnswer = (Math.floor(buttons[similarValueIndex].innerHTML/10)*10) + lastDigit;
        buttons[similarValueIndex].innerHTML = updatePotentialAnswer;
    }
    else
    {
        let updatePotentialAnswer = (Math.floor(buttons[correctAnswerIndex+1].innerHTML/10)*10) + lastDigit;
        buttons[correctAnswerIndex+1].innerHTML = updatePotentialAnswer;
    }
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
    getScore();
}

function doWhenIncorrect(i) {
    buttons[i].style.color = "#fff";
    buttons[i].style.backgroundColor = "#fb3640";
    // console.log("wrong");
}

function outro(i) {
    setTimeout(() => {
        nextQuestion();
        buttons[i].style.color = "#000";
        buttons[i].style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }, 500);
}

function lastmessage() {
    clearInterval(t);
    if (fScore.innerText >= 800) {
        let emoji = "&#128525";
        message.innerHTML = "ОДЛИЧЕН РЕЗУЛТАТ! БРАВО!" + emoji;
    } else if (fScore.innerText >= 600) {
        let emoji = "&#128531";
        message.innerHTML = "СКОРО ОДЛИЧНО, ДА ПОВЕЖБАМЕ УШТЕ МАЛЦЕ !!" + emoji;
    } else if (fScore.innerText >= 300) {
        let emoji = "&#128549";
        message.innerHTML = "МОЖЕШ И ПОДОБРО, САМО  ТРЕБА ПОВЕЌЕ ВЕЖБАЊЕ" + emoji;
    } else {
        let emoji = "&#128577";
        message.innerHTML = "СО ПОВЕЌЕ РЕШАВАЊЕ ДО ПОДОБРИ РЕЗУЛТАТИ НАРЕДНИОТ ПАТ" + emoji;
    }
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
    if (buttons[0].innerText == n1 - answer) {
        doWhenCorrect(0);
    } else {
        doWhenIncorrect(0);
    }
    clearInterval(t);
    outro(0);
});
buttons[1].addEventListener('click', () => {
    if (buttons[1].innerText == n1 - answer) {
        doWhenCorrect(1);
    } else {
        doWhenIncorrect(1);
    }
    clearInterval(t);
    outro(1);
});
buttons[2].addEventListener('click', () => {
    if (buttons[2].innerText == n1 - answer) {
        doWhenCorrect(2);
    } else {
        doWhenIncorrect(2);;
    }
    clearInterval(t);
    outro(2);
});
buttons[3].addEventListener('click', () => {
    if (buttons[3].innerText == n1 - answer) {
        doWhenCorrect(3);
    } else {
        doWhenIncorrect(3);
    }
    clearInterval(t);
    outro(3);
});
