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
    let randValue = Math.floor(Math.random() * 2);

    buttons[0].innerHTML = n1 - Math.floor(Math.random() * n1);
    buttons[1].innerHTML = n1 - Math.floor(Math.random() * n1);
    buttons[2].innerHTML = n1 - Math.floor(Math.random() * n1);
    buttons[3].innerHTML = n1 - Math.floor(Math.random() * n1);
   
    ansOpt = Math.floor(Math.random() * 4);
    buttons[ansOpt].innerHTML = answer;
}
