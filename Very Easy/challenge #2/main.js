// Write a function that returns the string "something" joined with a space " " and the given argument a.


// Examples

//     giveMeSomething("is better than nothing") ➞ "something is better than nothing" 
//     giveMeSomething("Bob Jane") ➞ "something Bob Jane" 
//     giveMeSomething("something") ➞ "something something"

// Test Cases

//     giveMeSomething("a") ➞ "something a"
//     giveMeSomething("is cooking") ➞ "something is cooking"
//     giveMeSomething(" is cooking") ➞ "something  is cooking"

const giveMeSomething = (string) => {
    return 'something ' + string;
}