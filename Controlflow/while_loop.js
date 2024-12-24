// Problem 1: Print Numbers from 1 to 10
function printNumbers() {
    let i1 = 1;
    while (i1 <= 10) {
        console.log(i1);
        i1++;
    }
}

// Problem 2: Sum of Natural Numbers
function sumOfNaturalNumbers(n2) {
    let sum2 = 0;
    let i2 = 1;
    while (i2 <= n2) {
        sum2 += i2;
        i2++;
    }
    console.log("Sum of natural numbers:", sum2);
}

// Problem 3: Factorial of a Number
function factorial(num3) {
    let factorial3 = 1;
    let i3 = 1;
    while (i3 <= num3) {
        factorial3 *= i3;
        i3++;
    }
    console.log("Factorial of", num3, "is", factorial3);
}

// Problem 4: Reverse a Number
function reverseNumber(num4) {
    let reverse4 = 0;
    while (num4 > 0) {
        let digit4 = num4 % 10;
        reverse4 = reverse4 * 10 + digit4;
        num4 = Math.floor(num4 / 10);
    }
    console.log("Reversed number:", reverse4);
}

// Problem 5: Count Digits in a Number
function countDigits(num5) {
    let count5 = 0;
    while (num5 > 0) {
        num5 = Math.floor(num5 / 10);
        count5++;
    }
    console.log("Number of digits:", count5);
}

// Problem 6: Print Multiplication Table
function printMultiplicationTable(n6) {
    let i6 = 1;
    while (i6 <= 10) {
        console.log(`${n6} x ${i6} = ${n6 * i6}`);
        i6++;
    }
}

// Problem 7: Find the Largest Digit in a Number
function largestDigit(num7) {
    let largest7 = 0;
    while (num7 > 0) {
        let digit7 = num7 % 10;
        if (digit7 > largest7) {
            largest7 = digit7;
        }
        num7 = Math.floor(num7 / 10);
    }
    console.log("Largest digit is:", largest7);
}

// Problem 8: Fibonacci Series
function fibonacciSeries(n8) {
    let a8 = 0, b8 = 1, i8 = 1;
    console.log("Fibonacci Series:");
    while (i8 <= n8) {
        console.log(a8);
        let temp8 = a8 + b8;
        a8 = b8;
        b8 = temp8;
        i8++;
    }
}

// Problem 9: Check Palindrome
function isPalindrome(num9) {
    let original9 = num9;
    let reverse9 = 0;
    while (num9 > 0) {
        let digit9 = num9 % 10;
        reverse9 = reverse9 * 10 + digit9;
        num9 = Math.floor(num9 / 10);
    }
    console.log("Is palindrome:", original9 === reverse9);
}

// Problem 10: Print Odd Numbers Between Two Values
function printOddNumbers(start10, end10) {
    let i10 = start10;
    console.log("Odd numbers between", start10, "and", end10, ":");
    while (i10 <= end10) {
        if (i10 % 2 !== 0) {
            console.log(i10);
        }
        i10++;
    }
}

// Test the functions
printNumbers();
sumOfNaturalNumbers(5);
factorial(5);
reverseNumber(1234);
countDigits(12345);
printMultiplicationTable(5);
largestDigit(4758);
fibonacciSeries(5);
isPalindrome(121);
printOddNumbers(10, 20);
