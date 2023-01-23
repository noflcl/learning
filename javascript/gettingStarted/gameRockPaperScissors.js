function setGameTitle() {
  document.getElementById("htmlGameTitle").innerHTML =
    "Roshambo Coming Soon...";
}

// Even though this creates a function, const is still used and hoisting is not available.
const fetchUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    // console.log(userInput);
    return userInput;
  } else {
    // console.log("Error! Not a valid selection 😿");
    return "Error! Not a valid selection 😿";
  }
};

// Get a number between 0 and 2, giving us 3 choices
function fetchComputerChoice() {
  let getRandomNumber = Math.floor(Math.random() * 3);
  switch (getRandomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "Error! System did not make a choice 😿";
  }
}

function determineWinner(fetchUserChoice, fetchComputerChoice) {
  if (fetchUserChoice === fetchComputerChoice) {
    return "Game is a tie 😾!";
  }

  if (fetchUserChoice === "rock") {
    if (fetchComputerChoice === "paper") {
      return "Sorry, computer won 😭!";
    } else {
      return "You have won 🎉!";
    }
  }

  if (fetchUserChoice === "paper") {
    if (fetchComputerChoice === "scissors") {
      return "Sorry, computer won 😭!";
    } else {
      return "You have won 🎉!";
    }
  }

  if (fetchUserChoice === "scissors") {
    if (fetchComputerChoice === "rock") {
      return "Sorry, computer won 😭!";
    } else {
      return "You have won 🎉!";
    }
  }
}

// Once I rewrite fetchfetchUserChoice so that hoisiting is available I can move all code to the top.

// console.log(fetchfetchUserChoice("paper"));
// console.log(fetchComputerChoice());
// console.log(determineWinner(fetchUserChoice("paper"), fetchComputerChoice()));
