// Write a function that takes the base and height of a triangle and return its area.

// Examples

//     triArea(3, 2) ➞ 3 
//     triArea(7, 4) ➞ 14 
//     triArea(10, 10) ➞ 50

// Test Cases

//     triArea(3, 2) ➞ 3
//     triArea(5, 4) ➞ 10
//     triArea(10, 10) ➞ 50
//     triArea(0, 60) ➞ 0
//     triArea(12, 11) ➞ 66

const triArea = (base, height) => {
    return base * height / 2
}