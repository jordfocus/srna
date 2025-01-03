let resultDot1 = document.getElementById("result-dot-1");
let resultDot2 = document.getElementById("result-dot-2");

function setCorrectAnswersDotColor(numberOfCorrectAnswers)
{
    if (numberOfCorrectAnswers > 8)
    {
        resultDot1.style="background-color:green";
    }
    else if (numberOfCorrectAnswers > 5)
    {
        resultDot1.style="background-color:yellow";
    }
    else
    {
        resultDot1.style="background-color:red";
    }
}

function setCorrectAnswersAndTimeDotColor(score)
{
    if (score >= 850)
    {
        resultDot2.style="background-color:green";
    }
    else if (score > 450)
    {
        resultDot2.style="background-color:yellow";
    }
    else
    {
        resultDot2.style="background-color:red";
    }
}
