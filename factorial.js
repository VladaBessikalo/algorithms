// Factorial //

function factorial(n) {
    if (n < 1) {
        return 1;
    }
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}


console.log(factorial(4)) // 24
console.log(factorial(3)) // 6
console.log(factorial(5)) // 120
// Big-O = O(n) - Leaner