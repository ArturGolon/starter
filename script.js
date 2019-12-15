/*VERIABLE AND DATA TYPES */
/*
var firstName = "Artur";

console.log(firstName);

var lastName = "Golon";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);

//Variable naming rules
var _3years = 3;
var johnMark = "JOhn and Mark";
//var if = 23;
*/

/*VERIABLE MUTATION AND TYPE COERCION*/
/*
var firstName = "Artur";
var age = 28;
//TYPE COERCION
console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);
//VERIABLE MUTATION

age = "twenty eight";
job = "driver";
alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);

var lastName = prompt("What is his last Name?");
console.log(firstName + " " + lastName);
*/

/**BASIC OPERATORS */
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
//MATH OPERATORS
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//LOGICAL OPERATORS

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//TYPEOF OPERATOR

console.log(typeof johnOlder);
console.log(typeof ageMark);
console.log(typeof "Mark is older than John");
var x;
console.log(typeof x);
*/
/**OPERATOR PRECEDENCE */
/** 
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
//Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
// Grouping

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = (3 + 5) * 4 - 6;
console.log(x);
//More operators

x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
*/

//**CODING CHALLENGE 1*/
// simple challenge to calculate which BMI is higher
/** 
var massMark = 78; // kg
var heightMark = 1.69; //meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * massJohn);
console.log("Mark " + BMIMark, " John " + BMIJohn);
var markHigherBMI = BMIMark > BMIJohn;
console.log("Is Mark's BMI higher than John's " + markHigherBMI);
*/

//IF / ELSE STATMENT
/*
var firstName = "Artur";
var civilStatus = "single";
if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " Hopefully marry soon");
}

var isMarried = false;
if (isMarried) {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " Hopefully marry soon");
}
var massMark = 78; // kg
var heightMark = 1.69; //meters

var massJohn = 192;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's ");
} else {
  console.log("John's BMI is higher than Mark's ");
}
*/

//BOOLEAN LOGIC
/*
var firstName = "Artur";
var age = 21;

if (age < 13) {
  console.log(firstName + " is a boy");
} else if (age >= 13 && age < 20) {
  console.log(firstName + " is a teenager");
} else if (age >= 20 && age < 30) {
  console.log(firstName + " is a young man");
} else {
  console.log(firstName + " is a man");
}
*/

//THE TERNERY OPERATOR AND SWITCH STATEMENTS
/*
var firstName = "Artur";
var age = 14;
//ternery operator
age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice.");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);
/*
if (age >= 18) {
  var drink = "beer";
} else {
  var drink = "juice";
}*/

//switch statement
/*
var job = "teacher";
switch (job) {
  case "teacher":
  case "instructor":
    console.log(firstName + " teaches kids how to code.");
    break;
  case "driver":
    console.log(firstName + "driver an uber in Poland");
    break;
  case "designer":
    console.log(firstName + "designe cool website's");
    break;
  default:
    console.log(firstName + " dows something else");
}

switch (true) {
  case age < 13:
    console.log(firstName + " is a boy");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + " is a young man");
    break;
  default:
    console.log(firstName + " is a man");
}
*/

//TRUTH AND FALSY VALUES AND EQUALITY OPERATORS

//FALSY VALUES : Undefined , null, 0, '', NaN
//TRUTHY VALUES : NOT falsy values
/*
var height;
height = "3";
if (height || height === 0) {
  console.log("Veriable is defined");
} else {
  console.log("Veriable has NOT been defined");
}

//Equality operators

if (height === 3) {
  console.log("The == operator does type coercion!");
}
*/

//CODING CHALLENGE 2
/*
var scoreJohn = (110 + 120 + 103) / 3;
var scoreMike = (110 + 120 + 103) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log("John's team wins with " + scoreJohn + " points");
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log("Mike's team wind with " + scoreMike + " points");
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
  console.log("Mary's team wind with " + scoreMary + " points");
} else {
  console.log("There is a draw");
}

/*
if (scoreJohn > scoreMike) {
  console.log("John's team wins with " + scoreJohn + " points");
} else if (scoreMike > scoreJohn) {
  console.log("Mike's team wind with " + scoreMike + " points");
} else {
  console.log("There is a draw");
}
*/

//FUNCTIONS
/*
function calculateAge(birthYear) {
  return 2019 - birthYear;
}

var ageArtur = calculateAge(1991);
var ageKasia = calculateAge(1995);
var ageMarek = calculateAge(1966);

console.log(
  "Artur is " + ageArtur + ",",
  "Kasia is " + ageKasia + ",",
  "Marek is " + ageMarek
);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired");
  }
}

yearsUntilRetirement(1991, "Artur");
yearsUntilRetirement(1995, "Kasia");
yearsUntilRetirement(1966, "Marek");
yearsUntilRetirement(1923, "Mirek");
*/

//FUNCTION STATEMENT AND EXPRESSIONS

//EXPRESSION
/*
var whatDoYouDo = function(job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " Teaches kids how to code";
    case "driver":
      return firstName + " Driver an Uber in Poland";
    case "designer":
      return firstName + " Designs beutiful websites";
    default:
      return firstName + " Does something else";
  }
};

console.log(whatDoYouDo("teacher", "Artur"));
console.log(whatDoYouDo("driver", "Kasia"));
console.log(whatDoYouDo("designer", "Marek"));
console.log(whatDoYouDo("retired", "Mirek"));
*/

//ARRAYS
/*
//initialize  new array
var names = ["Artur", "Kasia", "Marek", "Mirek"];
var years = new Array(1991, 1995, 1966, 1921);

console.log(names[1]);
console.log(names.length);

//mutate array data
names[1] = "Robert";
names[names.length] = "Iza";
console.log(names);

//Different data types

var artur = ["Artur", "Kasia", 1991, "designer", false];

artur.push("blue");
artur.unshift("Mr.");
console.log(artur);

artur.pop();
artur.pop();
artur.shift();
console.log(artur);

console.log(artur.indexOf(23));

var isDesigner =
  artur.indexOf("designer") === -1
    ? "Artur is NOT a desginer"
    : "Artur IS a designer";
console.log(isDesigner);
*/

//CODING CHALLENGE 3
/*
function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return percentage * bill;
}
var bills = [124, 48, 268];
var tip = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];

var finalValues = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
console.log(tip, finalValues);
*/

//OBJECTS AND PROPERTIES

//Object literal
var artur = {
  firstName: "Artur",
  lastName: "Golon",
  birthYear: 1991,
  family: ["Kasia", "Marek", "Mirek"],
  job: "coder",
  isMarried: false
};

console.log(artur.firstName);
console.log(artur["lastName"]);
var x = "birthYear";
console.log(artur[x]);

artur.job = "desginer";
artur["isMarried"] = true;
console.log(artur);

// new Object Syntax

var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = 1962;
jane["lastName"] = "Smith";
console.log(jane);
