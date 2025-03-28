function nextQuestion() {

    progress.style.width = "100%";
    timed();
    // timed();
    fScore.innerHTML = score.innerHTML;
    if (qNo.innerText == "10") {
        whenFinished();
    }
    n1 = Math.floor(Math.random() * 1000);
    n2 = Math.floor(Math.random() * 1000);
    opSelector = "+";

    if (opSelector == "+") {
        for (let i = 0; i < 100; i++) {
            if (n1 + n2 <= 1000
                && n1 >= 100
                && n2 >= 100) {
                break;
            }
            n1 = Math.floor(Math.random() * 1000);
            n2 = Math.floor(Math.random() * 1000);
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

    for (let i = 0; i < 4; i++ && i != ansOpt) {
        if (answer > 60) {
            buttons[i].innerHTML = answer - Math.floor(Math.random() * 59);
        } else if (answer > 30 && answer < 60) {
            buttons[i].innerHTML = answer + Math.floor(Math.random() * 30);
        } 
        else if (answer > 10 && answer < 30) {
            buttons[i].innerHTML = answer + Math.floor(Math.random() * 40);
        }
        else {
            buttons[i].innerHTML = Math.floor(Math.random() * 100);
        }

        if (answer < 0) {
            buttons[i].innerHTML = "-" + buttons[i].innerHTML;
        }
    }
    ansOpt = Math.floor(Math.random() * 4);
    buttons[ansOpt].innerHTML = answer;

    // generate one similar value - value that will end with the same digit as the correct value
    generateSimilarValue(answer, ansOpt);
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
