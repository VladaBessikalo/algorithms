// Set - data structure that can hold a collection of values, values must be unique
// can contain a mix of different data types
// dynamically sized
// do not maintain an insertion order
// Sets are iterables. Can use for of loop 

const set = new Set([1, 2, 3, 2]);
set.add(4);
set.add(4);
set.delete(3);
console.log(set.has(4));
console.log("set.size", set.size);
set.clear()


for (const item of set) {
    console.log(item);
}

const arr = [1, 1, 2, 2, 3, 3, 3];
const newSet = new Set(arr)

console.log("newSet", newSet);
