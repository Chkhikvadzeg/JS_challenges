// Write a function that takes an integer minutes and converts it to seconds.

// Examples

//     convert(5) ➞ 300 
//     convert(3) ➞ 180 
//     convert(2) ➞ 120

// Test Cases

//     convert(6) ➞ 360
//     convert(4) ➞ 240
//     convert(8) ➞ 480
//     convert(60) ➞ 3600

const convert = (minutes) => {
    return minutes * 60
}