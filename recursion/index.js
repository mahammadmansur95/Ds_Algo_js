console.log("<----Factorial of n ----->");

function factorial(n){
    if( n <= 0 ){
        return 1;
    } else {
        return n * factorial(n-1);
    }
};

/**
 * 
 * 
Initial call: factorial(5) is called.
n is 5, which is not less than or equal to 0, so it goes to the else block.
It returns 5 * factorial(4).
Inside factorial(4):
n is 4, which is not less than or equal to 0, so it goes to the else block.
It returns 4 * factorial(3).
Inside factorial(3):
n is 3, which is not less than or equal to 0, so it goes to the else block.
It returns 3 * factorial(2).
Inside factorial(2):
n is 2, which is not less than or equal to 0, so it goes to the else block.
It returns 2 * factorial(1).
Inside factorial(1):
n is 1, which is not less than or equal to 0, so it goes to the else block.
It returns 1 * factorial(0).
Inside factorial(0):
n is 0, which is less than or equal to 0, so it enters the if block.
It logs "coming here if 0" and returns 1.

Now, let's put it all together:
factorial(0) returns 1.
factorial(1) returns 1 * 1 = 1.
factorial(2) returns 2 * 1 = 2.
factorial(3) returns 3 * 2 = 6.
factorial(4) returns 4 * 6 = 24.
factorial(5) returns 5 * 24 = 120
 */

// console.log(factorial(5));

console.log("<----print fib ----->");

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function printFibonacciSequence(count) {
    for (let i = 0; i < count; i++) {
        console.log(fibonacci(i));
    }
}

// Print first 10 Fibonacci numbers
// console.log(printFibonacciSequence(10));

console.log("<---range of numbers ------>");

function rangeOfNumbers(start, end){
    if(end < start){
        return [];
    } else {
        const numbers = rangeOfNumbers(start, end - 1);
        numbers.push(end);
        return numbers;
    }
}

// console.log(rangeOfNumbers(0, 5));

console.log("<----- check palindrome ------->");

function isPalindrome(num) {
    // Convert number to string for easier manipulation
    const str = String(num);
    
    // Base cases
    if (str.length <= 1) {
        return true; // Single digit or empty string is a palindrome
    } else if (str[0] !== str[str.length - 1]) {
        return false; // First and last digits don't match, not a palindrome
    } else {
        // Recur on the substring without the first and last digits
        return isPalindrome(str.substring(1, str.length - 1));
    }
}

// Example usage
// console.log(isPalindrome(121)); // Output: true
// console.log(isPalindrome(12321)); // Output: true
// console.log(isPalindrome(12345)); // Output: false

console.log("<----- reverse a string ------->");

function reverseStr(str){
    if(str === ''){
        return '';
    } else {
        return reverseStr(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseStr('hello'));



