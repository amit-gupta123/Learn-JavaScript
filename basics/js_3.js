// javascript conversion

let age = 45;
console.log(age); //  this will print 45

// In real world, inbb most cases, user / client will be onbe who 
// will provide the value
// there is need to make sure what came in that variable
// and to make it compatible to our use case we may  need  to  typecast  it. 


//to convert it to a particular type we need ti use th1at type1 in c1apital
// heading and trailing whitespaces are ignored while typecasting from string to number
let score = " 45";
let numScore = Number(score);
console.log("with space in front: ",typeof(numScore), " : ",numScore);



//---------------------------------------------------------------------

// Converting a non-numeric string or undefined into a number gives NaN
// NaN means not a Number
// please note that type of nan is number, but the number is not defined.
// NaN is property of global object.

// NaN is unordered,means-> 

// NaN > 1 return false;
// NaN < 1 return false;
// NaN == NaN return false
// isNaN(NaN) returns true

// space coming in between a string does not let it to be converted as a number

// By definition, NaN is the return value from operations which have an undefined numerical result. 
// Hence why, in JavaScript, aside from being part of the global object,
// it is also part of the Number object: Number.NaN. It is still a numeric data type, but it is undefined as a real number.

// NaN also represents any number outside of the ECMAScript domain of definition.
score = "4 5";
numScore = Number(score);
console.log("with space in mid: ",typeof(numScore),": ", numScore);

score = "45 ";
numScore = Number(score)
console.log("with space at last: ",typeof(numScore),": ",numScore);


 // console.log(typeof numScore). this also works.


 let obj = null;

 // null becomes zero while converting in js
 // undefined becomes NaN while converting to Number.
console.log("null converted to number becomes : ",Number(obj));
console.log("undefined converted to number becomes : ", Number(undefined));

let myString = "45";
console.log("A proper string converted to numberbecomes : number", Number(myString))
myString = "45ABC"
console.log("An improper string converted to number becomes : ", Number(myString))

// boolean true in converted to 1
// boolean false is converted to 0


// 1 -> true;
// 0 -> false;
// "" empty strig false
// "anything" -> true;
// other conversion can be done in same way from other dataype
 