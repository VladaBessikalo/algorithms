// Binary search works only for sorted arrays
 
function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === arr[middleIndex]) {
            return middleIndex;
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binarySearch([-5, 2, 3, 4, 5], 5));
console.log(binarySearch([-5, 2, 3, 4, 5, 7], 4));
console.log(binarySearch([-5, 2, 4, 5, 10], 120));
console.log(binarySearch([-4, 2, 4, 5, 10, 15], 2));

// Big O = O(log n) - logarithmic time complexity