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
    opSelector = "+";

    if (opSelector == "+") {
        for (let i = 0; i < 100; i++) {
            if (n1 + n2 <= 100
                && n1 > 0
                && n2 > 0) {
                break;
            }
            n1 = Math.floor(Math.random() * 100);
            n2 = Math.floor(Math.random() * 100);
        }

    }

    question.innerHTML = n1 + opSelector + n2;
    answer = n2;
    let innerHTMLText = n1 + opSelector + "⬜"
    question.innerHTML = innerHTMLText + " = " + (n1 + n2);

    // console.log("answer: " + answer);
    getOptions();
    getQNo();

}

function getOptions() {

    for (let i = 0; i < 4; i++ && i != ansOpt) {
        if (n2 > 100) {
            buttons[i].innerHTML = n2 + Math.floor(Math.random() * n2 * 0.4);
        } else if (n2 > 30 && n2 < 100) {
            buttons[i].innerHTML = n2 + Math.floor(Math.random() * n2 * 0.6);
        } else {
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

function lastmessage() {
    clearInterval(t);
    correctAnswers.innerHTML = "Број на точни одговори: "+correctAnswersCount + "/10";
    if (fScore.innerText >= 800) {
        let emoji = "&#128525";
        message.innerHTML = "ОДЛИЧЕН РЕЗУЛТАТ! БРАВО!" + "<div><img class=\"result-image\" src=\"../shared/trophy.webp\" alt=\"image\"></div>";
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
