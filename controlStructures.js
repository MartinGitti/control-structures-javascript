// Task 9, Compulsory Task 1:
// Bullet 2- Declarations & Assigned Values:
let num1 = 10;
let num2 = 20;
let num3 = 30;

// Bullet 3- Comparisons:
/* I've used the math 'max' function that finds the largest value and displays it in the console. */
let maxNum = Math.max(num1, num2);
console.log(maxNum); // The largest value between num1 & num2 is displayed as the output.

/* Bullet 4- Function to determine whether num1 is an even or odd number,
 "0" being an 'even' number and "1" being an 'odd' number: */
function oddorEven(num1) {
    return num1 % 2;
}
console.log("num1 is " + oddorEven(num1) + " .");
console.log("Num1 has an 'even' value assigned to it."); // Num1 results to '0', which means that it is an 'even' number.

// Bullet 5- Function to sort list from largest to smallest value:
valueSort = [num1, num2, num3];
valueSort.sort(function (a, b) { return b - a });
console.log("Largest to smallest: " + valueSort + ".");

// Bullet 6- The Javascript "For" loop to display numbers 0 - 20:
for (forLoop = 0; forLoop <= 20; forLoop++) {
    console.log("This is number " + forLoop);
}
console.log("The end of the 'For' loop!")

// Bullet 7- JavaScript "w​hile" loop​ to display the numbers 0 - 20.
whileLoop = 0;
while (whileLoop <= 20) {
    console.log("This is number " + whileLoop); // Text to display on console as long as the whileLoop is meeting the required condition given.
    whileLoop++;
    if (whileLoop <= 20) {
    } else {
        console.log("The End of the 'While' loop!")
    }
}

// Bullet 8- Function to display all 'even' numbers.
allDetail = [1, 2, 3, 4,];
function allEven(allDetail) {
    return allDetail % 2;
}
console.log("2 is " + allEven(2));
console.log("4 is " + allEven(4)) + "which = Even Number";
console.log("6 is " + allEven(6));
console.log("8 is " + allEven(8));
console.log("10 is " + allEven(10));
console.log("12 is " + allEven(12));
console.log("14 is " + allEven(14));
console.log("16 is " + allEven(16));
console.log("18 is " + allEven(18));
console.log("20 is " + allEven(20));

// Bullet 8- Shorter & easier version, using 'for' loop function to display all 'even' numbers:
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 1) console.log(i);
}

// Bullet 9- Using a 'nested' loop as per the task request:
for (let i = 5; i >= 1; i--) {
    let str = "";
    for (let j = i; j <= 5; j++) {
        str += "*";
    }
    console.log(str);
}

// Bullet 9- This is a easier version that I found browsing the web without using a 'nested' loop:
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

// Bullet 10-
let a = 32; //First positive number
let b = 12;  //Second positive number 
let gcd;
while (a != b) {
    if (a > b) {
        a = a - b;
    }
    else {
        b = b - a;
    }
}
gcd = a;
console.log(gcd);

// The End //