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
var massMark = 78; // kg
var heightMark = 1.69; //meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * massJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log("Is Mark's BMI higher than John's " + markHigherBMI);
