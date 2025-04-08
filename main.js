//Number guessing game

const target = Math.floor(Math.random() * 10) + 1;
let guess = null;

while (guess !== target) {
    guess = parseFloat(prompt("Guess the number between 1-10"));
    console.log(`Target: ${target} Guess: ${guess}`);
    if (guess > target) {
        console.log("Too high")
    } else if (guess < target) {
        console.log("Too low")
    }
}

console.log("Correct number! Congratulations!")
console.log(`Target: ${target} Guess: ${guess}`);
