var questions = [
    {
        question: "Wat doe je met de opleiding Software Developer?",
        answers: [
            { text: "Leren coderen", correct: true},
            { text: "Leren over computers", correct: false},
            { text: "Leren over robotica", correct: false},
            { text: "Leren hoe je moet hacken", correct: false},
        ]
    },
    {
        question: "Welke vak ga je niet krijgen op het Software Developer opleiding?",
        answers: [
            { text: "Nederlands", correct: false},
            { text: "Wiskunde", correct: true},
            { text: "Rekenen", correct: false},
            { text: "Engels", correct: false},
        ]
    },
    {
        question: "Wat heb je NIET nodig om de opleiding Software Developer te volgen?",
        answers: [
            { text: "Wetenschap van programmeren", correct: true},
            { text: "Een laptop", correct: false},
            { text: "Geld", correct: false},
            { text: "Vervoer naar school", correct: false},
        ]
    },
    {
        question: "Met welke programmeertalen gaan we NIET werken?",
        answers: [
            { text: "PHP", correct: false},
            { text: "Javascript", correct: false},
            { text: "C# (C Sharp)", correct: false},
            { text: "Lua", correct: true},
        ]
    },
    {
        question: "Hoeveel herkansingen ga je krijgen per periode?",
        answers: [
            {text: "1", correct: true},
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "0", correct: false},
        ]
    },
    {
        question: "Hoe maak je een comment?",
        answers: [
            { text: "Met ??", correct: false},
            { text: "Met //", correct: true},
            { text: "Met **", correct: false},
            { text: "Met ::", correct: false},
        ]
    },
    {
        question: "Welke programmertaal wordt gebruikt om je website mooi te maken?",
        answers: [
            { text: "HTML", correct: false},
            { text: "C# (C Sharp)", correct: false},
            { text: "Python", correct: false},
            { text: "CSS", correct: true},
        ]
    },
    {
        question: "Hoeveelang duurt het opleiding MBO 4 Software Developer?",
        answers: [
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
        ]
    },
    {
        question: "Welke knop combinatie gebruik je om alle text te selecteren",
        answers: [
            { text: "Ctrl + C", correct: false},
            { text: "Ctrl + B", correct: false},
            { text: "Ctrl + A", correct: true},
            { text: "Ctrl + Z", correct: false},
        ]
    },
    {
        question: "Hoelang duurt 1 periode op Techniek College Rotterdam",
        answers: [
            { text: "12 Weken", correct: false},
            { text: "4 Weken", correct: false},
            { text: "8 Weken", correct: true},
            { text: "9 Weken", correct: false},
        ]
    }
];
    // Your questions array...

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button"); // Corrected ID

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("button");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; // Using backticks for template literals
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();