// var let and const

const accountId = 123;
/**
 * const varname = value;
 * 
 * variables declared const
 * can not be changed.
 */
console.log(accountId); // will print 123

//accountId = 234 // compiler will not allow it, and will produce type error: Assignment to constant variable.
var email = "abc@gmail.com"
let anotherEmail = "xyz@gmail.com"
city = "Ayodhya"

// instead of printing it console.log() every time, do it using console.table([comma seperated variables names])
console.table([accountId,email,anotherEmail,city]); // prints table of variables.


/**
 * var does not care about scope, while let works within its defined scope.
 * so var can cause unwanted changes at evey place it is used with same name;
 * 
 * let only works within the scope and does not affect 
 * the same named variabale which are beyond the scope.
 * 
 * it is advised to always use let and const, never use var.
 * 
 * variables only decalred but not initialised are undefined in js.
 * 
 */