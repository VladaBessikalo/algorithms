function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
        return middleIndex;
    }
    if (target > middleIndex) {
        return search(arr, target, middleIndex + 1, rightIndex)
    } else {
       return search (arr, target, leftIndex, middleIndex - 1)
    }

}

console.log(recursiveBinarySearch([-5, 2, 3, 4, 5], 5));
console.log(recursiveBinarySearch([-5, 2, 3, 4, 5, 7], 4));
console.log(recursiveBinarySearch([-5, 2, 4, 5, 10], 120));
console.log(recursiveBinarySearch([-4, 2, 4, 5, 10, 15], 2));


// Big-O - O(log n)