// Write a function that returns true if both numbers are:

//     Smaller than 0, OR ...
//     Greater than 0, OR ...
//     Exactly 0

// Otherwise, return false.

// Examples

//     both(6, 2) ➞ true 
//     both(0, 0) ➞ true 
//     both(-1, 2) ➞ false 
//     both(0, 2) ➞ false

// Test Cases

//     both(6, 2) ➞ true
//     both(-6, -9) ➞ true
//     both(6, -2) ➞ false
//     both(0, 0) ➞ true
//     both(100, 1) ➞ true
//     both(-0, 0) ➞ true
//     both(-80, -5000) ➞ true
//     both(6, -999) ➞ false
//     both(-1, 2) ➞ false
//     both(0, 2) ➞ false

const both = (a, b) => {
    return a > 0 && b > 0
}