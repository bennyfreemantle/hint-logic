import { beforeEach, describe, expect, it } from '@jest/globals';
import { createHintFunc } from '../src/main';

// Group related tests for the hint function
describe('Hint function tests', () => {
    // Declare constants to avoid hardcoding
    const hintThreshold = 3;
    let hint;

    // Re-create the hint function for each test to reset state
    beforeEach(() => {
        hint = createHintFunc();
    });

    it('Should return a success message when the correct answer is guessed', () => {
        const guess = 'sheep';
        const expectedResponse = 'Correct answer! You guessed in 1';

        const result = hint(guess);

        expect(result).toBe(expectedResponse);
    });

    it('Should return a failure message when an incorrect guess is made', () => {
        const guess = 'cow';
        const expectedResponse = `Incorrect guess... Attempts: 1, first hint given at ${hintThreshold}`;

        const result = hint(guess);

        expect(result).toBe(expectedResponse);
    });

    it('Should throw an input validation error if the input is not a string', () => {
        const guess = 123;
        const expectedResponse = `The input provided is not of type string, ${guess}`;

        // Ensure the function call is wrapped so Jest can handle the thrown error
        expect(() => hint(guess)).toThrow(expectedResponse);
    });

    it(`Should provide the first hint after ${hintThreshold} incorrect guesses`, () => {
        const prevGuesses = ['cow', 'pig'];
        const hintGuess = 'chicken';
        // Simulate incorrect guesses to reach the hint threshold
        prevGuesses.forEach((guess) => hint(guess));

        const result = hint(hintGuess);

        expect(result).toBe('Incorrect guess... heres a hint: white');
    });

    it('Should provide the next hint after another incorrect guess', () => {
        const prevGuesses = ['cow', 'pig', 'chicken'];
        const hintGuess = 'goat';
        // Simulate guesses to iterate through hints
        prevGuesses.forEach((guess) => hint(guess));

        const result = hint(hintGuess);

        expect(result).toBe('Incorrect guess... heres a hint: animal');
    });

    it('Should return all hints if all have been used', () => {
        const prevGuesses = ['cow', 'pig', 'chicken', 'goat', 'fish', 'swordfish'];
        const hintGuess = 'elephant';
        // Exhaust all hints and check the response
        prevGuesses.forEach((guess) => hint(guess));

        const result = hint(hintGuess);

        expect(result).toBe('Incorrect guess... heres a hint: white, animal, baa');
    });
});
