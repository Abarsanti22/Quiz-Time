let questionHeading = document.querySelector('.quiz-question');
let quizStartBtn = document.querySelector('.quiz-start-btn');
let nextBtn = document.querySelector('.next-question');
let quiztContainer= document.querySelector('.quiz-container');
let quizStartContainer =document.querySelector('.quiz-start');
let timerContainer=document.querySelector('.quiz-timer');
let feedBack= document.querySelector('.feedback');
let timer =document.querySelector('.timer');
let progressBar =document.querySelector('.progress-bar');
let quizScoreContainer =document.querySelector('.quiz-score-container');
let quizScore = document.querySelector('.quiz-score');
let checkBoxes = document.querySelector('.input[type=checkbox]');
let restartQuizBtn = document.querySelector('.restart-btn');
let scoresContainer =document.querySelector('.scores-list');
let scoresLinkContainer =document.querySelector('.scores-link');

let answerElement1 = document.querySelector('#answer1');
let answerElement2 = document.querySelector('#answer2');
let answerElement3 = document.querySelector('#answer3');
let answerElement4 = document.querySelector('#answer4');


let questionIndex = 0;
let timeLeft =60;
let TIMER;
let score = 0;
let initials;



