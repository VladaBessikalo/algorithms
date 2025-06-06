function recursiveFibonacci(n) {
    if (n < 2) {
        return n;
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}
// fibonacci [0, 1, 1, 2, 3, 5, 8, 13, 21 ...]
console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(6)) // 8 
console.log(recursiveFibonacci(7)) // 13

// Time complexity Big-O = O(2^n) - recursive