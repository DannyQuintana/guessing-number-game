# Guessing Number Game

Welcome to the **Guessing Number Game**! This is a simple yet engaging number guessing game built using HTML, CSS, and JavaScript. Originally part of the [**The Complete JavaScript Course 2025: From Zero to Expert!**](https://www.udemy.com/course/the-complete-javascript-course/), this project has been enhanced with additional features and improvements beyond the original tutorial. Demo the project [**HERE**](https://dannyquintana.github.io/guessing-number-game/)

---

## Features

### Core Gameplay

- **Guess the Number**: The game generates a random number between 1 and 20, and the player has to guess it.
- **Score Tracking**: Each incorrect guess reduces the player's score by 1.
- **High Score**: The highest score achieved during the session is tracked.

### Enhancements

1. **Improved Codebase**: The JavaScript code was refactored to follow the DRY (Don't Repeat Yourself) principle by introducing reusable functions to handle repeated logic.
2. **High Score Persistence**: High scores are saved locally using cookies, ensuring they remain available even after the browser is closed or refreshed.

### Upcoming Features

- **Input Validation**: Ensure users cannot guess numbers below 1 or above 20.
- **Enhanced Notifications**:
  - Change the background color to visually indicate wins or losses.
  - Add additional UI elements to make it clearer whether the user has won or lost.

---

## How to Play

1. Open the game in your browser.
2. Enter a number between 1 and 20 in the input field.
3. Click the **Check!** button to submit your guess.
4. Receive feedback:
   - "Too high!" if your guess is above the target number.
   - "Too low!" if your guess is below the target number.
   - "Winner!" if you guess correctly.
5. Check your score and high score on the screen.
6. Click the **Again!** button to reset the game.

---

## Technologies Used

- **HTML/CSS**: Provided as part of the Udemy course.
- **JavaScript**: Initially from the course but significantly improved and extended.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DannyQuintana/guessing-number-game.git
   ```
2. Navigate to the project directory:
   ```bash
   cd guessing-number-game
   ```
3. Open the `index.html` file in your favorite browser.

---

## Project Files

- `index.html`: The main HTML file for the game interface.
- `style.css`: The CSS file for styling the game.
- `script.js`: The JavaScript file containing game logic and enhancements.

---

## To-Do List

- [ ] Restrict number input to values between 1 and 20.
- [ ] Enhance win/lose notifications:
  - Change the background color dynamically.
  - Add additional UI elements for clearer feedback.

---

## Credits

This project is part of [**The Complete JavaScript Course 2025: From Zero to Expert!**](https://www.udemy.com/course/the-complete-javascript-course/) by Jonas Schmedtmann. The HTML and CSS were provided as part of the course, while the JavaScript was initially from the tutorial but has been significantly improved and extended.

---

## License

This project is for educational purposes and is not intended for commercial use. Please respect the terms of use outlined by the original course and this repository.
