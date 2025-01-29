function nextQuestion() {

    progress.style.width = "100%";
    timed();
    // timed();
    fScore.innerHTML = score.innerHTML;
    if (qNo.innerText == "10") {
        whenFinished();
    }
    n1 = Math.floor(Math.random() * 100);
    n2 = 2;
    opSelector = "/";

    if (opSelector == "/") {
        for (let i = 0; i < 200; i++) {
            if (n1 % n2 == 0 
                && n1 != 0 
                && n1 != n2
                && n1/n2 <= 30) {
                break;
            }
            n1 = Math.floor(Math.random() * 100);
            n2 = 2;
        }
    }

    question.innerHTML = n1 + opSelector + n2;
    answer = eval(question.innerHTML);
    question.innerHTML = "Преполови го бројот " + n1;

    // console.log("answer: " + answer);
    getOptions();
    getQNo();

}

function getOptions() {

    for (let i = 0; i < 4; i++ && i != ansOpt) {
        
        let generatedAnswer = Math.floor(Math.random() * 10);
        for (let j = 0; j < 200; j++)
        {
            if (generatedAnswer != 0 
                && generatedAnswer != answer)
            {
                break;
            }

            generatedAnswer = Math.floor(Math.random() * 10);


        }
        buttons[i].innerHTML = generatedAnswer;

        if (answer < 0) {
            buttons[i].innerHTML = "-" + buttons[i].innerHTML;
        }
    }
    ansOpt = Math.floor(Math.random() * 4);
    buttons[ansOpt].innerHTML = answer;
}
