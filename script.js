let score = 0;
let level = 1;
let num1, num2, correctAnswer;

function startGame() {
  score = 0;
  level = 1;
  document.getElementById("score").textContent = score;
  document.getElementById("level").textContent = level;
  generateQuestion();
}

function generateQuestion() {
  // Increase difficulty by level (e.g., higher numbers with level increase)
  const maxNumber = level * 10;
  num1 = Math.floor(Math.random() * maxNumber) + 1;
  num2 = Math.floor(Math.random() * maxNumber) + 1;

  // Randomly choose an operator
  const operations = ["+", "-", "*"];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  // Calculate the correct answer
  switch (operation) {
    case "+":
      correctAnswer = num1 + num2;
      break;
    case "-":
      correctAnswer = num1 - num2;
      break;
    case "*":
      correctAnswer = num1 * num2;
      break;
  }

  // Display the question
  document.getElementById("question").textContent = `${num1} ${operation} ${num2}`;
  document.getElementById("answer-input").value = "";
  document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer-input").value);
  
  // Validate the user's answer
  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById("feedback").textContent = "Correct!";
    
    // Increase level every 5 points
    if (score % 5 === 0) {
      level++;
    }
  } else {
    document.getElementById("feedback").textContent = "Incorrect. Try again!";
  }

  // Update score and level on the screen
  document.getElementById("score").textContent = score;
  document.getElementById("level").textContent = level;

  // Generate a new question
  generateQuestion();
}
