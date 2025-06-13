const obj = {
    name: "Vlada B",
    age: 31,
    'key': true,
    sayMyName: function() {
        console.log("function", this.name);
        
    }
}

obj.hobby = "running"
delete obj.key

console.log(obj.name);
console.log(obj['age']);
console.log(obj.key);
console.log(obj['key']);
console.log(obj);
obj.sayMyName();

// Object.keys(), Object.values(), Object.entries() - O(n)

// Big-O - insert - O(1), remove - O(1), Access - O(1), Search - O(n)



