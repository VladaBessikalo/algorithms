// identify pivot element - can be any element

const arr = [-6, 20, 8, -2, 4];

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];

  let arrLessThanPivotEl = [];
  let arrGraterThanPivotEl = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      arrLessThanPivotEl.push(arr[i]); 
    } else {
      arrGraterThanPivotEl.push(arr[i]); 
    }
  }
  return [
    ...quickSort(arrLessThanPivotEl),
    pivot, 
    ...quickSort(arrGraterThanPivotEl),
  ];
}

const arr2 = [6, 3, 13, 5, 2, 7]

console.log(quickSort(arr));
console.log(quickSort(arr2));

// worst case - O(n^2)
// Avg case - O(nlogn)