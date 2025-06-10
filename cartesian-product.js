const arrA = [1, 2];
const arrB = [3, 4, 5];

function cartesianProduct(arr1, arr2) {
    const resultArr = [];
    for (let i = 0; i < arr1.length; i++ ) {
        for (let j = 0; j < arr2.length; j++) {
            resultArr.push([arr1[i], arr2[j]]);
        }
    }
    return resultArr;
}

console.log(cartesianProduct(arrA, arrB))

// Big-O = O(m*n)