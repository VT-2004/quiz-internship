// --- Full Question Bank (20 questions) ---
const fullQuizData = [
    {
        question: "What is the capital of France?",
        answers: { a: "Berlin", b: "Madrid", c: "Paris", d: "Rome" },
        correctAnswer: "c",
        hint: "It's known as the 'City of Love' and features the Eiffel Tower."
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: { a: "Earth", b: "Mars", c: "Jupiter", d: "Venus" },
        correctAnswer: "b",
        hint: "Its surface is rich in iron oxide."
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: { a: "Atlantic Ocean", b: "Indian Ocean", c: "Arctic Ocean", d: "Pacific Ocean" },
        correctAnswer: "d",
        hint: "It covers about one-third of the surface of Earth."
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: { a: "Vincent van Gogh", b: "Pablo Picasso", c: "Leonardo da Vinci", d: "Claude Monet" },
        correctAnswer: "c",
        hint: "He was a famous Italian Renaissance artist and inventor."
    },
    {
        question: "What is the chemical symbol for water?",
        answers: { a: "O2", b: "H2O", c: "CO2", d: "NaCl" },
        correctAnswer: "b",
        hint: "It consists of two hydrogen atoms and one oxygen atom."
    },
    {
        question: "What is the highest mountain in the world?",
        answers: { a: "K2", b: "Mount Everest", c: "Kangchenjunga", d: "Lhotse" },
        correctAnswer: "b",
        hint: "Located in the Himalayas, its summit is the highest point above sea level."
    },
    {
        question: "Which country is home to the kangaroo?",
        answers: { a: "New Zealand", b: "South Africa", c: "Australia", d: "India" },
        correctAnswer: "c",
        hint: "It's a continent and a country known for its unique marsupials."
    },
    {
        question: "What is the smallest prime number?",
        answers: { a: "0", b: "1", c: "2", d: "3" },
        correctAnswer: "c",
        hint: "It's the only even prime number."
    },
    {
        question: "Which of these is a primary color?",
        answers: { a: "Green", b: "Orange", c: "Purple", d: "Blue" },
        correctAnswer: "d",
        hint: "Mix it with yellow to get green, or with red to get purple."
    },
    {
        question: "How many continents are there?",
        answers: { a: "5", b: "6", c: "7", d: "8" },
        correctAnswer: "c",
        hint: "The number often taught in most English-speaking countries."
    },
    {
        question: "What is the currency of Japan?",
        answers: { a: "Yuan", b: "Won", c: "Yen", d: "Rupee" },
        correctAnswer: "c",
        hint: "Its symbol is a '¥'."
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: { a: "Oxygen", b: "Nitrogen", c: "Carbon Dioxide", d: "Hydrogen" },
        correctAnswer: "c",
        hint: "It's what we exhale and what plants use for photosynthesis."
    },
    {
        question: "What is the fastest land animal?",
        answers: { a: "Lion", b: "Cheetah", c: "Gazelle", d: "Horse" },
        correctAnswer: "b",
        hint: "Known for its distinctive spots and incredible acceleration."
    },
    {
        question: "In what year did the Titanic sink?",
    answers: { a: "1910", b: "1912", c: "1914", d: "1916" },
        correctAnswer: "b",
        hint: "It was on its maiden voyage when it hit an iceberg."
    },
    {
        question: "What is the largest organ in the human body?",
        answers: { a: "Heart", b: "Brain", c: "Skin", d: "Liver" },
        correctAnswer: "c",
        hint: "It covers your entire exterior and protects you."
    },
    {
        question: "Which material is a good conductor of electricity?",
        answers: { a: "Wood", b: "Rubber", c: "Plastic", d: "Copper" },
        correctAnswer: "d",
        hint: "It's a common metal used in electrical wires."
    },
    {
        question: "What is the main ingredient in guacamole?",
        answers: { a: "Tomato", b: "Onion", c: "Avocado", d: "Lime" },
        correctAnswer: "c",
        hint: "A green fruit, often mistaken for a vegetable, rich in healthy fats."
    },
    {
        question: "What is the name of the galaxy our solar system is in?",
        answers: { a: "Andromeda", b: "Triangulum", c: "Whirlpool", d: "Milky Way" },
        correctAnswer: "d",
        hint: "It gets its name from its appearance from Earth, resembling a spilled drink."
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        answers: { a: "Isaac Newton", b: "Galileo Galilei", c: "Albert Einstein", d: "Stephen Hawking" },
        correctAnswer: "c",
        hint: "Known for his equation E=mc²."
    },
    {
        question: "What is the boiling point of water in Celsius?",
        answers: { a: "0°C", b: "50°C", c: "100°C", d: "212°C" },
        correctAnswer: "c",
        hint: "This is the temperature at which water turns to steam at standard atmospheric pressure."
    }
];

let selectedQuizData = []; // This will hold the 5 random questions
let currentQuestionIndex = 0;
let userAnswers = []; // This will be initialized with the length of selectedQuizData

const questionDisplay = document.getElementById('questionDisplay');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitQuizBtn = document.getElementById('submitQuiz');
const restartBtn = document.getElementById('restartBtn');
const resultDiv = document.getElementById('result');
const feedbackMessageDiv = document.getElementById('feedbackMessage');
const detailedResultsDiv = document.getElementById('detailedResults');

// --- Timer Variables and DOM Elements ---
const timerDisplay = document.getElementById('timerDisplay');
const timeSpan = document.getElementById('time');
let timerInterval; // To store the setInterval ID
const MAX_QUESTION_TIME = 20; // 20 seconds per question
let timeLeft = MAX_QUESTION_TIME;
// --- End Timer Variables ---

// --- Hint Variables and DOM Elements ---
const showHintBtn = document.getElementById('showHintBtn');
const hintTextDiv = document.getElementById('hintText');
// --- End Hint Variables ---


// --- Function to select random questions ---
function selectRandomQuestions(numQuestions) {
    const shuffled = [...fullQuizData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
}

// --- Timer Functions ---
function startTimer() {
    clearTimer(); // Clear any existing timer before starting a new one
    timeLeft = MAX_QUESTION_TIME; // Reset time for the new question
    timeSpan.textContent = timeLeft;
    timerDisplay.style.display = 'block'; // Ensure timer is visible during quiz

    timerInterval = setInterval(() => {
        timeLeft--;
        timeSpan.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearTimer();
            // Automatically advance to the next question or submit quiz if it's the last one
            if (currentQuestionIndex < selectedQuizData.length - 1) {
                currentQuestionIndex++;
                loadQuestion(); // Load next question (which will restart the timer)
            } else {
                // If it's the last question and time runs out, submit the quiz
                calculateAndDisplayResults();
            }
        }
    }, 1000); // Update every 1 second
}

function clearTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}
// --- End Timer Functions ---


function initializeQuiz() {
    clearTimer(); // Ensure no timer is running from a previous session
    selectedQuizData = selectRandomQuestions(5); // Select 5 random questions
    currentQuestionIndex = 0;
    userAnswers = new Array(selectedQuizData.length).fill(null); // Initialize user answers
    resultDiv.textContent = '';
    feedbackMessageDiv.textContent = '';
    detailedResultsDiv.innerHTML = ''; // Clear detailed results content
    detailedResultsDiv.style.display = 'none'; // Hide detailed results section

    // Reset hint visibility and state
    hintTextDiv.style.display = 'none';
    showHintBtn.disabled = false;
    showHintBtn.textContent = 'Show Hint';

    loadQuestion(); // This will automatically start the timer for the first question
    updateNavigationButtons();
}

function loadQuestion() {
    clearTimer(); // Clear previous timer before loading a new question
    const currentQuestion = selectedQuizData[currentQuestionIndex];
    questionDisplay.innerHTML = ''; // Clear previous question

    const questionText = document.createElement('div');
    questionText.classList.add('question-text');
    questionText.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    questionDisplay.appendChild(questionText);

    const answersContainer = document.createElement('div');
    answersContainer.classList.add('answers-container');

    for (const option in currentQuestion.answers) {
        const label = document.createElement('label');
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'currentQuestion';
        radioInput.value = option;

        if (userAnswers[currentQuestionIndex] === option) {
            radioInput.checked = true;
        }

        radioInput.addEventListener('change', (event) => {
            userAnswers[currentQuestionIndex] = event.target.value;
        });

        const span = document.createElement('span');
        span.textContent = `${option.toUpperCase()}: ${currentQuestion.answers[option]}`;

        label.appendChild(radioInput);
        label.appendChild(span);
        answersContainer.appendChild(label);
    }
    questionDisplay.appendChild(answersContainer);

    // --- Hint related updates on question load ---
    hintTextDiv.style.display = 'none'; // Hide hint text
    showHintBtn.disabled = false; // Enable hint button for new question
    showHintBtn.textContent = 'Show Hint'; // Reset button text
    if (currentQuestion.hint) {
        showHintBtn.style.display = 'block'; // Show hint button if hint exists
    } else {
        showHintBtn.style.display = 'none'; // Hide hint button if no hint
    }
    // --- End hint related updates ---

    updateNavigationButtons();
    // Clear results and feedback when a new question loads, unless we're viewing results
    if (questionDisplay.style.display !== 'none') {
        resultDiv.textContent = '';
        feedbackMessageDiv.textContent = '';
        detailedResultsDiv.innerHTML = '';
        detailedResultsDiv.style.display = 'none';
    }

    startTimer(); // Start the timer for the newly loaded question
}

function updateNavigationButtons() {
    restartBtn.style.display = 'none';
    questionDisplay.style.display = 'flex'; // Ensure question display is visible
    prevBtn.disabled = currentQuestionIndex === 0;
    prevBtn.style.display = 'block';

    if (currentQuestionIndex === selectedQuizData.length - 1) {
        nextBtn.style.display = 'none';
        submitQuizBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitQuizBtn.style.display = 'none';
    }
}

function showNextQuestion() {
    clearTimer(); // Clear timer before manually advancing
    if (currentQuestionIndex < selectedQuizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion(); // Load next question (which will restart the timer)
    }
}

function showPreviousQuestion() {
    clearTimer(); // Clear timer before manually going back
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(); // Load previous question (which will restart the timer)
    }
}

function calculateAndDisplayResults() {
    clearTimer(); // Stop the timer when quiz is submitted
    timerDisplay.style.display = 'none'; // Hide timer display on results screen
    showHintBtn.style.display = 'none'; // Hide hint button on results screen
    hintTextDiv.style.display = 'none'; // Hide hint text on results screen


    let score = 0;
    selectedQuizData.forEach((q, index) => {
        if (userAnswers[index] === q.correctAnswer) {
            score++;
        }
    });

    // Hide quiz elements and navigation buttons
    questionDisplay.style.display = 'none';
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    submitQuizBtn.style.display = 'none';

    // Display overall score and feedback message
    resultDiv.textContent = `You scored ${score} out of ${selectedQuizData.length} questions correctly!`;
    if (score === selectedQuizData.length) {
        feedbackMessageDiv.textContent = "Excellent job! You got all of them right!";
        feedbackMessageDiv.style.color = "green";
    } else if (score >= selectedQuizData.length / 2) {
        feedbackMessageDiv.textContent = "Good effort! Keep practicing!";
        feedbackMessageDiv.style.color = "orange";
    } else {
        feedbackMessageDiv.textContent = "You might want to review some topics. Don't give up!";
        feedbackMessageDiv.style.color = "red";
    }

    // --- Populate and display detailed results ---
    detailedResultsDiv.innerHTML = '<h2>Detailed Results:</h2>'; // Clear previous and add title
    detailedResultsDiv.style.display = 'block'; // Make detailed results section visible

    selectedQuizData.forEach((q, index) => {
        const userAnswerCode = userAnswers[index];
        const correctAnswerCode = q.correctAnswer;

        const questionResultItem = document.createElement('div');
        questionResultItem.classList.add('question-result-item');

        // 1. Display Question Text
        const questionText = document.createElement('p');
        questionText.innerHTML = `<strong>Question ${index + 1}:</strong> ${q.question}`;
        questionResultItem.appendChild(questionText);

        // 2. Display User's Answer with Color Coding
        const userAnswerDisplay = document.createElement('p');
        let userAnswerText;
        let userAnswerClass = 'user-answer'; // Base class for styling

        if (userAnswerCode) {
            userAnswerText = `${userAnswerCode.toUpperCase()}: ${q.answers[userAnswerCode]}`;
            if (userAnswerCode === correctAnswerCode) {
                userAnswerClass += ' correct';
            } else {
                userAnswerClass += ' incorrect';
            }
        } else {
            userAnswerText = "Not selected";
            userAnswerClass += ' not-selected';
        }
        userAnswerDisplay.innerHTML = `Your Answer: <span class="${userAnswerClass}">${userAnswerText}</span>`;
        questionResultItem.appendChild(userAnswerDisplay);

        // 3. Display Correct Answer
        const correctAnswerDisplay = document.createElement('p');
        const correctAnswerText = `${correctAnswerCode.toUpperCase()}: ${q.answers[correctAnswerCode]}`;
        correctAnswerDisplay.innerHTML = `Correct Answer: <span class="correct-answer-text">${correctAnswerText}</span>`;
        questionResultItem.appendChild(correctAnswerDisplay);

        // 4. Optionally display the hint here in detailed results
        if (q.hint) {
            const hintInResult = document.createElement('p');
            hintInResult.innerHTML = `<em>Hint Provided:</em> ${q.hint}`;
            hintInResult.style.fontSize = '0.9em';
            hintInResult.style.color = '#6c757d'; /* Muted color for hint */
            questionResultItem.appendChild(hintInResult);
        }

        detailedResultsDiv.appendChild(questionResultItem);
    });

    // Show restart button
    restartBtn.style.display = 'block';
}

function restartQuiz() {
    initializeQuiz(); // Re-initialize the quiz to get new random questions and restart the timer
}

// --- Hint Event Listener ---
showHintBtn.addEventListener('click', () => {
    const currentQuestion = selectedQuizData[currentQuestionIndex];
    if (currentQuestion.hint) {
        hintTextDiv.textContent = currentQuestion.hint;
        hintTextDiv.style.display = 'block'; // Show the hint text
        showHintBtn.disabled = true; // Disable the hint button after showing
        showHintBtn.textContent = 'Hint Shown'; // Change button text
    }
});
// --- End Hint Event Listener ---


// Event Listeners
document.addEventListener('DOMContentLoaded', initializeQuiz); // Start the quiz by initializing it
nextBtn.addEventListener('click', showNextQuestion);
prevBtn.addEventListener('click', showPreviousQuestion);
submitQuizBtn.addEventListener('click', calculateAndDisplayResults);
restartBtn.addEventListener('click', restartQuiz);