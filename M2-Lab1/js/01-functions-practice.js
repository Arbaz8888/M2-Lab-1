// Function to divide a number by 2 and log the result
function halfNumber(number) {
    const result = number / 2;
    console.log("Half of " + number + " is " + result + ".");
    return result;
}

// Function to square a number and log the result
function squareNumber(number) {
    const result = number * number;
    console.log("The result of squaring the number " + number + " is " + result + ".");
    return result;
}

// Function to calculate the percentage of one number in relation to another
function percentOf(number1, number2) {
    const percentage = (number1 / number2) * 100;
    console.log(number1 + " is " + percentage + "% of " + number2 + ".");
    return percentage;
}

// Function to find the modulus of two numbers and log the result
function findModulus(number1, number2) {
    const modulus = number1 % number2;
    console.log(modulus + " is the modulus of " + number1 + " and " + number2 + ".");
    return modulus;
}

// Testing the functions
const numberToHalf = 10;
const squaredNumber = squareNumber(5);
const percentage = percentOf(2, 4);
const modulusResult = findModulus(10, 4);
