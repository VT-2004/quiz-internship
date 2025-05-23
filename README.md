# Interactive Quiz Application

An engaging and responsive quiz application built with HTML, CSS, and JavaScript. Test your knowledge with a set of randomly selected questions, timed responses, and helpful hints.

## Table of Contents

* [Features](#features)
* [How to Use](#how-to-use)
* [File Structure](#file-structure)
* [Technologies Used](#technologies-used)
* [Responsive Design](#responsive-design)
* [Future Enhancements](#future-enhancements)
* [Credits](#credits)
* [License](#license)

## Features

* **Random Questions:** Each quiz session presents 5 random questions from a larger pool.
* **Timed Questions:** Each question has a 20-second timer; if time runs out, it automatically advances to the next question.
* **Navigation:** "Previous" and "Next" buttons allow users to navigate through questions.
* **Hints:** A "Show Hint" button provides a clue for the current question (can be used once per question).
* **Detailed Results:** After submitting, view your total score and a breakdown of each question, showing your answer, the correct answer, and whether you got it right or wrong.
* **Restart Option:** Easily restart the quiz with a new set of random questions.
* **Responsive Design:** Adapts seamlessly to various screen sizes, from mobile phones to desktop monitors.
* **Engaging Background:** Features a looping background video for an immersive experience.

## How to Use

1.  **Create Project Folder:** Make a new folder on your computer (e.g., `interactive-quiz`).
2.  **Create Files:** Inside this folder, create three new files:
    * `index.html`
    * `style.css`
    * `script.js`
3.  **Copy-Paste Code:**
    * Copy the HTML content provided in the previous response and paste it into `index.html`.
    * Copy the CSS content and paste it into `style.css`.
    * Copy the JavaScript content and paste it into `script.js`.
4.  **Open in Browser:** Navigate to the `interactive-quiz` folder and simply open the `index.html` file in your web browser.

## File Structure

The project is organized into three distinct files for clarity and maintainability:
interactive-quiz/
├── index.html     <-- The main HTML structure of the quiz.
├── style.css      <-- All the CSS rules for styling the quiz and making it responsive.
└── script.js      <-- The JavaScript logic that handles quiz functionality, timing, and interactions.
## Technologies Used

* **HTML5:** For the basic structure and content of the web page.
* **CSS3:** For styling the quiz, including responsive design elements.
* **JavaScript (ES6+):** For all interactive functionalities, quiz logic, timer, and dynamic content generation.

## Responsive Design

The application is designed to provide an optimal viewing experience across a wide range of devices.

* **Fluid Layouts:** Uses percentages and `max-width` for containers.
* **Relative Units:** Primarily uses `rem` units for font sizes and spacing, allowing elements to scale proportionally.
* **`clamp()` Function:** Utilizes `clamp()` for fluid typography on headings and key text elements, ensuring smooth scaling between minimum and maximum font sizes.
* **Media Queries:** Specific breakpoints are used to adjust layout, font sizes, and button arrangements for better usability on smaller screens (e.g., stacking buttons vertically on mobile).

## Future Enhancements

* **Difficulty Levels:** Implement different difficulty levels for questions.
* **More Question Categories:** Allow users to choose quiz categories (e.g., Science, History, Sports).
* **Progress Bar:** Add a visual indicator of quiz progress.
* **Sound Effects:** Incorporate sound effects for correct/incorrect answers or timer warnings.
* **User Scores History:** Store local user high scores.
* **Question Image/Media Support:** Add the ability to include images or videos in questions.
* **Animated Transitions:** Smoother transitions between questions.

## Credits

* **Background Video:** [https://res.cloudinary.com/doos38nzy/video/upload/v1747913390/sw3spfhclghmtacohscf.mp4](https://res.cloudinary.com/doos38nzy/video/upload/v1747913390/sw3spfhclghmtacohscf.mp4)

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute this code for personal or commercial purposes.
