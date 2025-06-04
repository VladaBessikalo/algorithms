// Big-O notation

function summation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Fibonacci //

// function fibonacci(n) {
//     const fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i-1] + fib[i-2]
//     }
//     return fib;
// }

// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(7));

// Big-O = O(n) - Leaner


// Factorial of number //

// function factorial(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result = result * i;
//     }
//     return result;
// }
// console.log("factorial of 0", factorial(0))
// console.log("factorial of 1", factorial(1))
// console.log("factorial of 2", factorial(2))
// console.log("factorial of 3", factorial(3))
// console.log("factorial of 4", factorial(4))
// console.log("factorial of 5", factorial(5))
// Big-O = O(n) complexity

// Prime number

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    const isNatural = n / 2;
    return !Number.isInteger(isNatural);
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));
console.log(isPrime(0));
