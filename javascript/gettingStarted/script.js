// Log to console
console.log("🙃 Hello from your JS file 🤗");
// Call a hoisted function
imHoisted();
// Write to the document
// scripts are sourced at the end of the HTML file so this will be called at the "foot" of the page
document.write("<br>You are writing to the document from script.js");

// Enter a name, check if empty, return
function runFunction() {
  let person = prompt("Please enter your name");
  if (person != null && person /*Check if string is not empty*/ !== "") {
    document.getElementById("htmlEndpoint").innerHTML =
      "Hello " + person + "! How are you today?";
    console.log(`${person}`);
  } else {
    document.getElementById("htmlEndpoint").innerHTML =
      "Please enter your name and try again.";
  }
}

// Text input box
let input1 = document.getElementById("val1");
let btn = document.getElementById("buttonResults");

btn.addEventListener("click", function () {
  /* Could write as a single line
    document.getElementById('results').innerTEXT = input1.value;
    */
  let val1 = input1.value;
  let res = document.getElementById("results");
  res.innerText = val1;
});

// Playing with functions
// Test1
function sum(a, b, c) {
  console.log(a + b + c);
  return 5;
}

let testSum = sum(1, 3, 5);
console.log(testSum);

// Test2
function sum2(a, b, c) {
  let result = a + b + c;
  return result;
}

let testSum2 = sum2(100, 200, 5);
console.log(testSum2);

// Playing with return

let number = 4;
let anotherNumber = 9;

function add(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

let sumReturnTest = add(number, anotherNumber);
// let product = multiply( prompt("Enter a number:"), number);
console.log(sumReturnTest);
// console.log(product);

// Hoisted function
function imHoisted() {
  console.log("Psssssst... I'm hoisted 😜");
}

const plantNeedsWater = (day) => {
  if (day === "Wednesday") {
    return true;
  } else {
    return "No need to water your little plant 🌵";
  }
};
console.log(plantNeedsWater("Tuesday"));

const plantNeedsWaterConcise = (day) => (day === "Wednesday" ? true : false);
console.log(plantNeedsWaterConcise("Wednesday"));

const squareNum = (num) => num * num;
console.log(squareNum(6));
