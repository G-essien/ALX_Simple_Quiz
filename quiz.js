
const quiz =document.querySelectorAll('input');
const feedback =document.querySelector('#feedback');
const button =document.querySelector('#submit-answer');

quiz.forEach( answer => {
    answer.addEventListener('click', () => {
        let userAnswer = answer.value;

        function checkAnswer(){
            const correctAnswer = "4";

            if (userAnswer === correctAnswer){
                feedback.textContent = "Correct! Well done.";
            } else {
                feedback.textContent = "That's incorrect. Try again!";
            }
        }

        button.addEventListener('click', checkAnswer);   
            
    });
});

