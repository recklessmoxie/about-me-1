
alert('Welcome! For the next 5 minutes I will be interrogating you with a series of yes or no questions about myself. Please enter \'y\' for yes or \'n\' for no. Thank You for playing!');

var userName = prompt('Before we begin, please enter your suedo name here.');


function question1(originLocation) {
  var pTagOne = document.getElementById('ans-one');
  console.log(userName + "\'s answer to where I live is, " + originLocation);
  var low_originLocation = originLocation.toLowerCase();

  if (low_originLocation == 'y' || low_originLocation == 'yes'){
    pTagOne.textContent ="Incorrect, " + userName + ". That is false, you must not be paying attention.";
  } else if (low_originLocation == 'n' || low_originLocation == 'no') {
    pTagOne.textContent= "Congratulations, " + userName + ", it seems as though you know where I live.";
  } else {
    alert("Please enter either 'y' for yes or 'n' for no.");
  }
}
  var originLocation = prompt("First round, " + userName + ". I live in Detroit, MI.");
  question1(originLocation);


function question2(sibling) {
  var pTagTwo = document.getElementById('ans-two');
console.log(userName + " thinks " + sibling + " that I have a sister");
low_sibling = sibling.toLowerCase();

if (low_sibling == 'y' || low_sibling == 'yes'){
  pTagTwo.textContent = "Although he is pretty girly at times, calling my brother my sister is considered incorrect.";
} else if (low_sibling == 'n' || low_sibling == 'no'){
  pTagTwo.textContent = "You are paying attention.";
} else {
  alert("Cmmmon mannn");
}
}
var sibling = prompt ("Do I have a sister?");
question2(sibling);


function question3(education) {
  var pTagThree = document.getElementById('ans-three');
console.log(userName + " says" + education + " to clown school");
low_education = education.toLowerCase();

if (low_education == 'y' || low_education == 'yes'){
   pTagThree.textContent ="I imagine that would be a lot of fun but your answer is incorrect"
}
else if (low_education == 'n' || low_education == 'no') {
   pTagThree.textContent = "Correct!"
}
else {
  alert ("Really, " + userName + "?")
}
}
var education = prompt("I\'m currently going to clown school.");
question3(education);

function question4(degree) {
  var pTagFour = document.getElementById('ans-four');

console.log(userName + " says " + degree + " to the degree question");
low_degree = degree.toLowerCase();

if (low_degree == 'y' || low_degree == 'yes'){
  pTagFour.textContent ="It took me 8 years but heck yes!";
}
else if (low_degree == 'n' || low_degree == 'no'){
   ("I did, in Business Management:)");
}
else {
    pTagFour.textContent ="Check yo self before you wreck yo self!";
}
}
var degree = prompt("I received my bachelors degree.");
question4(degree);

function question5(cityBorn) {
  var pTagFive = document.getElementById('ans-five');
console.log(userName + " says " + cityBorn + " to where I was born");
low_cityBorn = cityBorn.toLowerCase();

if (low_cityBorn == 'y' || low_cityBorn == 'yes'){
  pTagOne.textContent = "You are correct!"
}
else if (low_cityBorn == 'n' || low_cityBorn == 'no'){
pTagFive.textContent = "You\'re correct however Chitown is also referred to as Chicago so you\'re wrong!"
}
else {
  alert ("I'm calling the police! ")
}
}
var cityBorn = prompt ("I was born in Chitown.");
question5(cityBorn);
//As a developer, I want to add a sixth question to my guessing game that takes numeric input, and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer. I will use the isNan() function to ensure that the user is providing valid numeric input.//


  var favNum = 28;
function question6(guessAge) {
  var pTagSix = document.getElementById('ans-six');
  for (var i = 0; i < 4; i++){
  if (guessAge == favNum){
    pTagSix.textContent ='Correct!';
    i = 4;
    console.log(userName + 'guess correctly');
  } else if (guessAge < favNum) {
    pTagSix.textContent ='Too low!';
    console.log(userName + 'guessed low');
  } else if (guessAge > favNum){
    pTagSix.textContent ='Too high!';
    console.log(userName + 'guessed high');
  } else {
    alert('Something went wrong')
    console.log(userName + 'something went unexplainably wrong here');
  }
}
}
var guessAge = parseInt(prompt('Can you correctly guess my age?'));
question6(guessAge);
// As a developer, I want to add a seventh question to my guessing game that accepts multiple possible correct answers that are stored in an array, for instance, "Can you guess a state that I have lived in besides Washington?"

// var lguessHome = prompt('Can you guess a state that I have lived in besides Washington?');
// var guessHome = lguessHome.toLowerCase()
// var correctHome = ['illinois', 'michigan', 'arkansas', 'new york']
//
// for (var i = 0; i < 5; i++){
//   if (guessHome == correctHome){
//     alert('Correct!');
//     i = 5
//     // console.log(userName + 'guessed correctly');
//   }
//   else if (guessHome != correctHome){
//     alert('Incorrect!')
//     guessHome
//     // console.log(userName + 'guessed incorrectly');
//   } else {
//     alert('Please enter letters and not numbers');
//     // console.log(userName + 'did not guess with letters')
//   }
// }
