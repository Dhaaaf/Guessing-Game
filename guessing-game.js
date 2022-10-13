const readLine = require("readline")

const secretNumber = 80

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const checkGuess = function(num) {
    if (num === secretNumber) {
        console.log("Correct!")
        rl.close()
    }
    if (num < secretNumber) {
        console.log("Too low!")
        return askGuess()
    }
    if (num > secretNumber) {
        console.log("Too high!")
        return askGuess()
    }
    rl.close();
}

const askGuess = function () {
    rl.question("Guess the number?", (answer) => {
        checkGuess(Number(answer))
            // rl.close()
    })
}

askGuess()
