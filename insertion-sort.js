function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let indexOfSortedEl = i - 1;

    while (indexOfSortedEl >= 0 && arr[indexOfSortedEl] > numberToInsert) {
      arr[indexOfSortedEl + 1] = arr[indexOfSortedEl];
      indexOfSortedEl = indexOfSortedEl - 1;
    }
    arr[indexOfSortedEl + 1] = numberToInsert;
  }
}

const arr = [8, 20, -2, 4, -6];
insertionSort(arr);
console.log(arr);

// Big-O = O(n^2)