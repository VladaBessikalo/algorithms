// function isPowerOfTwo(n) {
//     if (n < 1) {
//         return false;
//     }

//     while (n > 1) {
//         if (n % 2 !== 0) {
//             return false;
//         }
//         n = n / 2;
//     }
//     return true;
// }
// Big-O = O(log n)


// Bitwise Power of two version:

function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }

    return (n & (n-1)) === 0;
}
// Big-O = O(1)

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(10))

