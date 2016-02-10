
alert("Welcome! For the next 5 minutes I will be interrogating you with a series of yes or no questions about myself. Please enter 'y' for yes or 'n' for no. Thank You for playing!");

var userName = prompt("Before we begin, please enter your suedo name here.");

var originLocation = prompt("First round, " + userName + ". I live in Detroit, MI.");
console.log(userName + "\'s answer to where I live is, " + originLocation);
var low_originLocation = originLocation.toLowerCase();

if (low_originLocation == 'y' || low_originLocation == 'yes'){
  alert("Incorrect, " + userName + ". That is false, you must not be paying attention.");
} else if (low_originLocation == 'n' || low_originLocation == 'no') {
  alert("Congratulations, " + userName + ", it seems as though you know where I live.");
} else {
  alert("Please enter either 'y' for yes or 'n' for no.");
}

var sibling = prompt ("Do I have a sister?");
console.log(userName + " thinks " + sibling + " that I have a sister");
low_sibling = sibling.toLowerCase();

if (low_sibling == 'y' || low_sibling == 'yes'){
  alert("Although he is pretty girly at times, calling my brother my sister is considered incorrect.");
} else if (low_sibling == 'n' || low_sibling == 'no'){
  alert("You are paying attention.");
} else {
  alert("Cmmmon mannn");
}

var education = prompt("I\'m currently going to clown school.");
console.log(userName + " says" + education + " to clown school");
low_education = education.toLowerCase();

if (low_education == 'y' || low_education == 'yes'){
  alert("I imagine that would be a lot of fun but your answer is incorrect")
}
else if (low_education == 'n' || low_education == 'no') {
  alert("Correct!")
}
else {
  alert ("Really, " + userName + "?")
}

var degree = prompt("I received my bachelors degree.");
console.log(userName + " says " + degree + " to the degree question");
low_degree = degree.toLowerCase();

if (low_degree == 'y' || low_degree == 'yes'){
  alert("It took me 8 years but heck yes!");
}
else if (low_degree == 'n' || low_degree == 'no'){
  alert ("I did, in Business Management:)");
}
else {
    alert ("Check yo self before you wreck yo self!");
}

var cityBorn = prompt ("I was born in Chitown.");
console.log(userName + " says " + cityBorn + " to where I was born");
low_cityBorn = cityBorn.toLowerCase();

if (low_cityBorn == 'y' || low_cityBorn == 'yes'){
  alert ("You are correct!")
}
else if (low_cityBorn == 'n' || low_cityBorn == 'no'){
  alert ("You\'re correct however Chitown is also referred to as Chicago so you\'re wrong!")
}
else {
  alert ("I'm calling the police! ")
}
