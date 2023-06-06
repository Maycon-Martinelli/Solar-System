//Question bank
var questionBank = [
    {
        question: 'Qual é a estrela central do sistema solar?',
        option: ['Vênus', 'Terra', 'Júpiter', 'Sol'],
        answer: 'Sol'
    },
    {
        question: 'Qual é o planeta mais próximo do Sol?',
        option: ['Marte', 'Mercúrio', ' Terra', 'Saturno'],
        answer: 'Mercúrio'
    },
    {
        question: 'Qual é o planeta mais quente do sistema solar?',
        option: ['Júpiter', 'Marte', 'Vênus', 'Urano'],
        answer: 'Vênus'
    },
    {
        question: 'Qual é o único planeta conhecido que tem vida?',
        option: ['Marte', 'Terra', 'Vênus', 'Júpiter'],
        answer: 'Terra'
    },
    {
        question: 'Qual planeta é conhecido como “Planeta Vermelho”?',
        option: ['Vênus', 'Urano', 'Júpiter', 'Marte'],
        answer: 'Marte'
    },
    {
        question: 'Qual é o maior planeta do sistema solar?',
        option: ['Vênus', 'Urano', 'Júpiter', 'Netuno'],
        answer: 'Júpiter'
    },
    {
        question: 'Qual é o planeta com anéis mais famoso do sistema solar?',
        option: ['Saturno', 'Urano', 'Netuno', 'Júpiter'],
        answer: 'Saturno'
    },
    {
        question: 'Qual planeta é conhecido  por sua inclinação axial?',
        option: ['Netuno', 'Urano', 'Saturno', 'Júpiter'],
        answer: 'Urano'
    },
    {
        question: 'Qual planeta tem a mais forte força gravitacional?',
        option: ['Lua', 'Sol', 'Netuno', 'Júpiter'],
        answer: 'Netuno'
    },
]

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

//function to display questions
function displayQuestion() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
}

//function to calculate scores
function calcScore(e) {
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'limegreen';
    }
    else {
        document.getElementById(e.id).style.background = 'tomato';
    }
    setTimeout(nextQuestion, 300);
}

//function to display next question
function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    }
    else {
        points.innerHTML = score + '/' + questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'
    }
}

//click events to next button
next.addEventListener('click', nextQuestion);

//Back to Quiz button event
function backToQuiz() {
    location.reload();
}

//function to check Answers
function checkAnswer() {
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for (var a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();

/*---------------------------*/

// function to display next question
function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    } else {
        points.innerHTML = score + '/' + questionBank.length;

        // Check the score and redirect the user accordingly
        if (score < 6) {
            // Redirecionar para tela "Reprovado"
            window.location.href = "../html/reprovado.html";
        } else {
            // Redirecionar para tela "Aprovado"
            window.location.href = "../html/aprovado.html";
        }
    }
}







