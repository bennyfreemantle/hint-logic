# Hint Function Testing

This project demonstrates the testing of a stateful function (`hint`) using Jest. It includes examples of input validation, state management, and providing hints based on the number of incorrect guesses.

## Features

- Validates input type and handles errors appropriately.
- Tracks the number of guesses and provides hints after a threshold is met.
- Comprehensive test coverage to ensure functionality across different scenarios.

## Tasks

- Extend the validation: Do we want specific error messages for numbers, special characters ?
- Can we break this into multiple functions ? `constructMessage` `validateInput` - This would make testing individual, isolated functions easier
- Have an attempt at converting to be class based instead. Classes can often be easier to handle and manipulate state.

## Getting Started

### Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install deps:
    ```bash
    npm install
    ```

### Scripts

- **Run Tests**: Execute the Jest test suite to verify functionality.
    ```bash
    npm run test
    ```

- **Generate Coverage Report**: Create a code coverage report for the project.
    ```bash
    npm run test:coverage
    ```
