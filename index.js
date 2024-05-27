const randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptCount = 0;
let remainingAttemptsCount = 10;
let previousValues = [];

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(randomNumber);
    
    const input = document.querySelector('input').value;
    console.log(input);

    const prevAttemptsCount = document.getElementById('attempts');
    const remAttemptsCount = document.getElementById('remaining');
    const hint = document.getElementById('hint');

    if(input == randomNumber){
        const result = document.getElementById('result');
        
        result.innerHTML = `Congrats you guessed the number right`;
        result.style.color="greeen"
    }else{
        if(remainingAttemptsCount == 0){
            remAttemptsCount.style.color = "red"
            remAttemptsCount.innerHTML = `10 attemps finished try again`
        }else{
            attemptCount++;
            remainingAttemptsCount--;

            hint.innerHTML = "guessed number is larger";
            hint.innerHTML = "guessed number is smaller";

            if (input < randomNumber - 10) {
                hint.innerHTML = "Too low! Try guessing a higher number.";
            } else if (input < randomNumber) {
                hint.innerHTML = "Close, but still a bit low.";
            } else if (input > randomNumber + 10) {
                hint.innerHTML = "Too high! Try guessing a lower number.";
            } else if (input > randomNumber) {
                hint.innerHTML = "Close, but still a bit high.";
            }
        
            
            remAttemptsCount.innerHTML = `Remaining Attempts: ${remainingAttemptsCount}`;
            previousValues.push(input);
            prevAttemptsCount.innerHTML = "Previous Attempts: "+previousValues;
        }
        
    }

})



