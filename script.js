// Mock user data (replace with backend API calls)
let currentUser = null;
let progress = { completedLessons: 0, quizScore: 0 };

// Login Form Submission
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulate authentication (replace with actual auth)
    currentUser = { email };
    document.getElementById('login-page').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    updateProgressUI();
});

// Video Completion Tracking
document.getElementById('https://youtu.be/CaZRQnM-_7c?si=_wyzwCfGmxUUBtSP').addEventListener('ended', () => {
    progress.completedLessons++;
    updateProgressUI();
});

// Quiz Logic (Sample Question)
// Quiz Data (Array of Objects)
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    }
];

// DOM Elements
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-answer");
const quizScoreElement = document.getElementById("quiz-score");

// Quiz Variables
let currentQuestionIndex = 0;
let score = 0;

// Function to Load a Question
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Clear previous options
    optionsElement.innerHTML = "";

    // Add new options
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.classList.add("option");
        optionButton.addEventListener("click", () => selectOption(option));
        optionsElement.appendChild(optionButton);
    });
}

// Function to Handle Option Selection
function selectOption(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];

    // Check if the selected option is correct
    if (selectedOption === currentQuestion.answer) {
        score += 10; // Increase score by 10 for each correct answer
        alert("Correct!");
    } else {
        alert(Wrong! The correct answer is: ${currentQuestion.answer});
    }

    // Move to the next question
    currentQuestionIndex++;

    // Check if the quiz is over
    if (currentQuestionIndex < quizData.length) {
        loadQuestion(); // Load the next question
    } else {
        endQuiz(); // End the quiz
    }

    // Update the quiz score
    quizScoreElement.textContent = score;
}

// Function to End the Quiz
function endQuiz() {
    quizContainer.innerHTML = `<h3>Quiz Over!</h3>
                               <p>Your final score is: ${score}/100</p>`;
}

// Event Listener for Submit Button
submitButton.addEventListener("click", () => {
    if (currentQuestionIndex < quizData.length) {
        loadQuestion(); // Start the quiz
        quizContainer.classList.remove("hidden"); // Show the quiz section
    }
});

// Initialize Quiz (Optional)
// loadQuestion(); // Uncomment this to load the first question automatically

document.getElementById('https://youtu.be/CaZRQnM-_7c?si=_wyzwCfGmxUUBtSP').addEventListener('timeupdate', (e) => {
    // Show quiz after 10 seconds (demo)
    if (e.target.currentTime > 10 && !document.getElementById('quiz-container').classList.contains('hidden')) {
        document.getElementById('quiz-container').classList.remove('hidden');
        loadQuiz();
    }
});

function loadQuiz() {
    document.getElementById('question').textContent = quiz.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    quiz.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsDiv.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    if (selectedIndex === quiz.correctAnswer) {
        progress.quizScore += 50; // Add score
        alert("Correct! 🎉");
    } else {
        alert("Try again! ❌");
    }
    updateProgressUI();
}

// Update Progress UI
function updateProgressUI() {
    document.getElementById('completed-lessons').textContent = progress.completedLessons;
    document.getElementById('quiz-score').textContent = progress.quizScore;
}
