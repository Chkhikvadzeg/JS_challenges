// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.


// Examples

//     convert(1, 3) ➞ 3780 
//     convert(2, 0) ➞ 7200 
//     convert(0, 0) ➞ 0

// Test Cases

//     convert(1, 0) ➞ 3600
//     convert(1, 3) ➞ 3780
//     convert(0, 30) ➞ 1800

const convert = (h, m) => {
    return (h * 60 + m) * 60;
}