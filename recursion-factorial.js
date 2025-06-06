function factorialRecursion(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorialRecursion(n-1)
}

console.log(factorialRecursion(4)) // 24
console.log(factorialRecursion(3)) // 6
console.log(factorialRecursion(5)) // 120
console.log(factorialRecursion(0)) // 1
console.log(factorialRecursion(6)) // 720
// = 6 * (5 * (4 * (3 * (2 * (1)))))
// = 6 * (5 * (4 * (3 * (2))))
// = 6 * (5 * (4 * (6)))
// = 6 * (5 * 24)
// = 6 * 120
// = 720

// Big-O = O(n)