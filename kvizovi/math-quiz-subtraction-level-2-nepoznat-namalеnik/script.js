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
    answer = n1;
    let innerHTMLText = "⬜" + opSelector + n2
    question.innerHTML = innerHTMLText + " = " + (n1 - n2);

    // console.log("answer: " + answer);
    getOptions();
    getQNo();

}

function getOptions() {

    for (let i = 0; i < 4; i++ && i != ansOpt) {
        if (n1 > 60) {
            buttons[i].innerHTML = n1 - Math.floor(Math.random() * 59);
        } else if (n1 > 30 && n1 < 60) {
            buttons[i].innerHTML = n1 + Math.floor(Math.random() * 30);
        } 
        else if (n1 > 10 && n1 < 30) {
            buttons[i].innerHTML = n1 + Math.floor(Math.random() * 40);
        }
        else {
            buttons[i].innerHTML = Math.floor(Math.random() * 100);
        }

        if (answer < 0) {
            buttons[i].innerHTML = "-" + buttons[i].innerHTML;
        }
    }
    ansOpt = Math.floor(Math.random() * 4);
    buttons[ansOpt].innerHTML = n1;

    // generate one similar value - value that will end with the same digit as the correct value
    generateSimilarValue(n1, ansOpt);
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
