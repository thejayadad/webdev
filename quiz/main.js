const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const nextButton = document.getElementById('next-btn');

const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin"],
        correctAnswer: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Venus", "Mars", "Jupiter"],
        correctAnswer: 1
    },
];

let currentQuestion = 0;

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;

    choicesElement.innerHTML = '';

    question.choices.forEach((choice, index) => {
        const choiceButton = document.createElement('button');
        choiceButton.textContent = choice;
        choiceButton.classList.add('btn');
        choiceButton.addEventListener('click', () => checkAnswer(index));
        choicesElement.appendChild(choiceButton);
    });
}

function checkAnswer(choiceIndex) {
    const isCorrect = choiceIndex === questions[currentQuestion].correctAnswer;

    if (isCorrect) {
        choicesElement.innerHTML = '<p>Correct!</p>';
    } else {
        choicesElement.innerHTML = '<p>Wrong. Try again!</p>';
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        nextButton.style.display = 'block';
    } else {
        nextButton.style.display = 'none';
        choicesElement.innerHTML = '<p>Quiz completed! Thanks for playing.</p>';
    }
}

nextButton.addEventListener('click', () => {
    showQuestion();
    nextButton.style.display = 'none';
});

showQuestion();
