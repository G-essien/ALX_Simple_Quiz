
const choice1 = document.querySelector('#choice1');
const choice2 = document.querySelector('#choice2');
const choice3 = document.querySelector('#choice3');

const quiz =document.querySelectorAll('input');
const feedback =document.querySelector('#feedback');
const button =document.querySelector('#submit-answer');

let userAnswer = quiz.forEach( answer => {
    answer.addEventListener('click', () => {
        return answer.value;
    });
});

function checkAnswer(){
    const correctAnswer = "4";
}

if (userAnswer === correctAnswer()){
    feedback.textContent = "Correct! Well done.";
} else {
    feedback.textContent = "That's incorrect. Try again!";
}

button.addEventListener('click', checkAnswer);       












// quiz.forEach( answer => {
//     answer.addEventListener('click', () => {
//         let userAnswer = answer.value;
//         console.log(userAnswer);

//         function checkAnswer(){
//             const correctAnswer = "4";

//             if (userAnswer === correctAnswer){
//                 feedback.textContent = "Correct! Well done.";
//             } else {
//                 feedback.textContent = "That's incorrect. Try again!";
//             }
//         }
//         button.addEventListener('click', checkAnswer);       
//     });
// })
