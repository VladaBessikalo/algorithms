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
