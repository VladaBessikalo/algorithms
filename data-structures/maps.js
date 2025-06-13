// Map - unordered collection of key-value pairs. keys and values - any data type
// to retrieve the value - use corresponding key
// Maps are iterables. Can use for of loop  

// Maps similar to Objects. Difference: 
// 1) Maps are ordered
// 2) in Maps keys and values - any data type
// 3) Objects are not iterables, Maps are.

const map = new Map([['a', 1], ['b', 2]]);
map.set('c', 3); // add new key value pair
console.log(map.has('a'));
map.delete('c');
console.log(map.size);
map.clear();


for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}