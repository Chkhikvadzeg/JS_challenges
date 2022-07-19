// Create a function that takes the number of wins, draws, and losses and calculates the number of points a football team has obtained so far.

//     wins get 3 points
//     draws get 1 point
//     losses get 0 points

// Examples

//     footballPoints(3, 4, 2) ➞ 13 
//     footballPoints(5, 0, 2) ➞ 15 
//     footballPoints(0, 0, 1) ➞ 0

// Test Cases

//     footballPoints(1, 2, 3) ➞ 5
//     footballPoints(5, 5, 5) ➞ 20
//     footballPoints(1, 0, 0) ➞ 3
//     footballPoints(0, 7, 0) ➞ 7
//     footballPoints(0, 0, 15) ➞ 0

const footballPoints = (win, draw, loss) => {
    return win * 3 + draw
}
