function nextQuestion() {

    progress.style.width = "100%";
    timed();
    // timed();
    fScore.innerHTML = score.innerHTML;
    if (qNo.innerText == "10") {
        whenFinished();
    }
    n1 = Math.floor(Math.random() * 30);
    n2 = 2;
    opSelector = "*";

    if (opSelector == "*") {
        for (let i = 0; i < 100; i++) {
            n1 = Math.floor(Math.random() * 30);
            n2 = 2;

            if (n1 * n2 <= 100
                && n1 > 1
                && n1 < 50) {
                break;
            }
        }
    }

    question.innerHTML = n1 + opSelector + n2;
    answer = eval(question.innerHTML);
    question.innerHTML = "Удвој го бројот " + n1;

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
