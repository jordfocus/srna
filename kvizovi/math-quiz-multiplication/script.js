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
    opSelector = "*";

    if (opSelector == "*") {
        for (let i = 0; i < 100; i++) {
            n1 = Math.floor(Math.random() * 10);
            n2 = Math.floor(Math.random() * 10);

            if (n1 * n2 <= 100
                && n1 > 1
                && n2 > 1) {
                break;
            }
        }
    }

    question.innerHTML = n1 + opSelector + n2;
    answer = eval(question.innerHTML);
    question.innerHTML = question.innerHTML + " = ?";

    // console.log("answer: " + answer);
    getOptions();
    getQNo();

}

function getOptions() {
    let randValue = Math.floor(Math.random() * 2);
    buttons[0].innerHTML = randValue == 0 && answer > n1 ? answer - n1 : answer + n1;
    randValue = Math.floor(Math.random() * 2);
    buttons[1].innerHTML = randValue == 0 && answer > n2 ? answer - n2 : answer + n2;
    randValue = Math.floor(Math.random() * 2);
    buttons[2].innerHTML = randValue == 0 && answer > 2*n1 ? answer - 2*n1 : answer + 2*n1;
    randValue = Math.floor(Math.random() * 2);
    buttons[3].innerHTML = randValue == 0 && answer > 2*n2 ? answer - 2*n2 : answer + 2*n2;

    ansOpt = Math.floor(Math.random() * 4);
    buttons[ansOpt].innerHTML = answer;
}

function lastmessage() {
    clearInterval(t);
    correctAnswers.innerHTML = correctAnswersCount + "/10";
    if (fScore.innerText >= 850) {
        let emoji = "&#128525";
        message.innerHTML = "ОДЛИЧЕН РЕЗУЛТАТ! БРАВО!" + "<div><img class=\"result-image\" src=\"../shared/trophy.webp\" alt=\"image\"></div>";
    } else if (fScore.innerText >= 700) {
        let emoji = "&#128531";
        message.innerHTML = "СКОРО ОДЛИЧНО, ДА ПОВЕЖБАМЕ УШТЕ МАЛЦЕ !!" + emoji;
    } else if (fScore.innerText >= 450) {
        let emoji = "&#128549";
        message.innerHTML = "МОЖЕШ И ПОДОБРО, САМО  ТРЕБА ПОВЕЌЕ ВЕЖБАЊЕ" + emoji;
    } else {
        let emoji = "&#128577";
        message.innerHTML = "СО ПОВЕЌЕ РЕШАВАЊЕ ДО ПОДОБРИ РЕЗУЛТАТИ НАРЕДНИОТ ПАТ" + emoji;
    }

    setCorrectAnswersDotColor(correctAnswersCount);
    setCorrectAnswersAndTimeDotColor(fScore.innerText);
}