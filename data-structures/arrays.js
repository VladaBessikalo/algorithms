const arr = [1, 2, 3, 'Vlada'];
arr.unshift(0)

console.log(arr);

// Big-O:
// Insert/remove from end O(1)
// Insert / remove from beginning - O(n) - we need to reassign indexes to each element
// Access - O(1)
// Search - O(n)
// Push / pop - O(1)
// Shift, unshift, concat, slice, splice - O(n)
// forEach, map, filter, reduce - O(n)