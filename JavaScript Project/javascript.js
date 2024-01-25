function talk(){
    var know = {
        "Hoe gaat het?" : "Goed :))",
        "Aanmelden" : " Ga naar https://www.techniekcollegerotterdam.nl/aanmelden om je te aanmelden :)",
        "Wat voor school is TCR?" : "Wij zijn Techniek College Rotterdam. De grootste mbo-school voor technisch beroepsonderwijs in Rotterdam-Rijnmond. Bij ons vind je technische mbo-opleidingen, cursussen en trainingen voor jongeren én volwassenen. ",
        "Locatie" : "PRINS ALEXANDERLAAN 55 + 3067 GB ROTTERDAM",
        "Wanneer is de open dag?" : " Kom langs op 26 januari van 15.00 tot 20.00 uur of op 27 januari van 10.00 tot 14.00 uur",
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
        document.getElementById('chatLog').innerHTML = "Sorry, ik begrijp je vraag niet 😦 <br>";
    }
}

const questions = [
    {
        question: "Wat doe je met de opleiding Software Developer?",
        answers: [
            { text: "Leren coderen", correct = true},
            { text: "Leren over computers", correct = false},
            { text: "Leren over robotica", correct = false},
            { text: "Leren hoe je moet hacken", correct = false},
        ]
    }
    {
        question: "Welke vak ga je niet krijgen op het Software Developer opleiding?",
        answers: [
            { text: "Nederlands", correct = false},
            { text: "Wiskunde", correct = true},
            { text: "Rekenen", correct = false},
            { text: "Engels", correct = false},
        ]
    }
    {
        question: "Wat heb je NIET nodig om de opleiding Software Developer te volgen?",
        answers: [
            { text: "Wetenschap van programmeren", correct = true},
            { text: "Een laptop", correct = false},
            { text: "Geld", correct = false},
            { text: "Vervoer naar school", correct = false},
        ]
    }
    {
        question: "Met welke programmeertalen gaan we NIET werken?",
        answers: [
            { text: "PHP", correct = false},
            { text: "Javascript", correct = false},
            { text: "C# (C Sharp)", correct = false},
            { text: "Lua", correct = true},
        ]
    }
    {
        question: "Hoeveel herkansingen ga je krijgen per periode?",
        answers: [
            { text: "1", correct = true},
            { text: "2", correct = false},
            { text: "3", correct = false},
            { text: "0", correct = false},
        ]
    }
];

const  questionElement = document.getElementById("question");
const  answerButton = document.getElementById("answer-buttons");
const  nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion (){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo  + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();

