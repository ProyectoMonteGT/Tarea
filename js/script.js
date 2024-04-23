var questions = [
    { sentence: "She ___ to the store.", options: ['went', 'Clean', 'Pull '], correct: 'went' },
    { sentence: "I ___ a book.", options: ['read', 'Changes', 'Got'], correct: 'read' },
    { sentence: "They ___ to the music.", options: ['Have', 'listen', 'Try'], correct: 'listen' },
    { sentence: "He ___ a movie.", options: ['watches', 'Lie', 'Die'], correct: 'watches' },
    { sentence: "We ___ for a walk.", options: ['Remember ', 'go', 'Worry'], correct: 'go' }
];
var score = 0;
var currentQuestionIndex = 0;

function showQuestion() {
    var question = questions[currentQuestionIndex];
    var questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <div class="question">
            <p>${question.sentence}</p>
            <div class="options">
                ${question.options.map(option => `<div class="option" onclick="checkAnswer('${option}')">${option}</div>`).join('')}
            </div>
        </div>
    `;
}

function checkAnswer(answer) {
    var question = questions[currentQuestionIndex];
    if (answer === question.correct) {
        score++;
        document.getElementById('score').textContent = score;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert('¡Has terminado! Tu puntuación final es: ' + score);
    }
}

showQuestion();