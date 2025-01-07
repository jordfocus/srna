let typeOfQuestion = 0;

function nextQuestionNepoznatNamalitel() {
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
    answer = n2;
    let innerHTMLText = n1 + opSelector + "⬜"
    question.innerHTML = innerHTMLText + " = " + (n1 - n2);

    // console.log("answer: " + answer);
    getOptionsNepoznatNamalitel();
    getQNo();
}

function nextQuestionNepoznatNamalenik() {
    
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
    getOptionsNepoznatNamalenik();
    getQNo();
}

function nextQuestionNepoznatSobirok() {
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
    getOptionsNepoznatSobirok();
    getQNo();

}

function getOptionsNepoznatSobirok() {    
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

function getOptionsNepoznatNamalenik() {    
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

function getOptionsNepoznatNamalitel() {
    
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

function nextQuestion() {
    typeOfQuestion = Math.floor(Math.random() * 3);
    if (typeOfQuestion == 0)
    {
        nextQuestionNepoznatNamalitel();
    }
    else if (typeOfQuestion == 1)
    {
        nextQuestionNepoznatNamalenik();
    }
    else
    {
        nextQuestionNepoznatSobirok();
    }
}

function getOptions() {
    if (typeOfQuestion == 0)
    {
        getOptionsNepoznatNamalitel();
    }
    else if (typeOfQuestion == 1)
    {
        getOptionsNepoznatNamalenik();
    }
    else
    {
        getOptionsNepoznatSobirok();
    }
    
}

function generateSimilarValue(correctAnswerValue, correctAnswerIndex) {
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
