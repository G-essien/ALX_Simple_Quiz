
function checkAnswer() {
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]').checked.value;
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer); 

// let quiz = document.querySelectorAll('input');
// let feedback = document.querySelector('#feedback');
// let button = document.querySelector('#submit-answer');

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
