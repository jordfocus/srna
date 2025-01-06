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
    opSelector = operator[Math.floor(Math.random() * 4)];

    if (opSelector == "/") {
        for (let i = 0; i < 200; i++) {
            if (n1 % n2 == 0 
                && n1 != 0 
                && n2 != 0 
                && n2 != 1 
                && n1 != n2
                && n1/n2 <= 10) {
                break;
            }
            n1 = Math.floor(Math.random() * 100);
            n2 = Math.floor(Math.random() * 10);
        }
    }

    if (opSelector == "*") {
        for (let i = 0; i < 100; i++) {
            n1 = Math.floor(Math.random() * 10);
            n2 = Math.floor(Math.random() * 10);

            if (n1 * n2 <= 100
                && n1 > 0
                && n2 > 0) {
                break;
            }
        }
    }

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
    answer = eval(question.innerHTML);
    question.innerHTML = question.innerHTML + " = ?";

    // console.log("answer: " + answer);
    getOptions();
    getQNo();

}

function getOptions() {

    for (let i = 0; i < 4; i++ && i != ansOpt) {
        if (answer > 100) {
            buttons[i].innerHTML = answer + Math.floor(Math.random() * answer * 0.4);
        } else if (answer > 30 && answer < 100) {
            buttons[i].innerHTML = answer + Math.floor(Math.random() * answer * 0.6);
        } else {
            buttons[i].innerHTML = Math.floor(Math.random() * 100);
        }

        if (answer < 0) {
            buttons[i].innerHTML = "-" + buttons[i].innerHTML;
        }
    }
    ansOpt = Math.floor(Math.random() * 4);
    buttons[ansOpt].innerHTML = answer;
}
