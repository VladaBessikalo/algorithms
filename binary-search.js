// Binary search works only for sorted arrays
function binarySearch(arr, target) {
    if (arr.length === 0) {
        return -1;
    }

    const middleElementIndex = Math.floor(arr.length / 2);

    if (target === arr[middleElementIndex]) {
        return middleElementIndex;
    }

    if (target > arr[middleElementIndex]) {
        for (let i = middleElementIndex + 1; i < arr.length; i++) {
            if (arr[i] === target) {
                return i;
            }
        }
    }

        if (target < arr[middleElementIndex]) {
        for (let i = middleElementIndex - 1; i >= 0; i--) {
            if (arr[i] === target) {
                return i;
            }
        }
    }

    return -1;

}

console.log(binarySearch([-5, 2, 3, 4, 5], 5));
console.log(binarySearch([-5, 2, 3, 4, 5, 7], 4));
console.log(binarySearch([-5, 2, 4, 5, 10], 120));
console.log(binarySearch([-4, 2, 4, 5, 10, 15], 2));