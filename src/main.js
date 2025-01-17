export function createHintFunc() {
    let guessCount = 0; // Tracks the number of guesses made
    let hintCount = 0; // Tracks how many hints have been provided

    return (input) => {
        const hintThreshold = 3; // Number of incorrect guesses before providing a hint
        const answer = 'sheep'; // Correct answer
        const hints = ['white', 'animal', 'baa']; // Array of hints to provide in sequence

        guessCount += 1; // Increment the guess count on every function call

        // Validate input type
        if (typeof input !== 'string') {
            // Throw an error if the input is not a string
            throw new Error(`The input provided is not of type string, ${input}`);
        }

        // Check if the guess matches the correct answer
        if (input.toLowerCase() === answer) {
            return `Correct answer! You guessed in ${guessCount}`;
        } 
        
        // If the guess count meets or exceeds the hint threshold, provide a hint
        if (guessCount >= hintThreshold) {
            // Construct the message using the current hint or all hints if exhausted
            const message = `Incorrect guess... heres a hint: ${hints[hintCount] ?? hints.join(', ')}`;
            hintCount += 1; // Move to the next hint
            return message;
        }

        // Default failure message if no hints are provided yet
        return `Incorrect guess... Attempts: ${guessCount}, first hint given at ${hintThreshold}`;
    };
}
