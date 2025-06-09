// my solution
// function linearSearch(arr, n) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.includes(n)) {
//             return arr.indexOf(n);
//         } else {
//             return -1;
//         }
//     }
// }

// basic solution
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}



console.log(linearSearch([-5, 2, 10, 4, 5], 10));
console.log(linearSearch([-5, 2, 10, 4, 5], 4));
console.log(linearSearch([-5, 2, 10, 4, 5], 120));
console.log(linearSearch([4, 2, 10, 4, 5], 4));

// Big-O - O(n) linear time complexity