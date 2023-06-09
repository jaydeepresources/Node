let nums = [1, 4, 9, 15]
let roots = nums.map(Math.sqrt);
console.log("roots of nums are : " + roots);

let persons = [
    {
        name: 'John',
        age: 18
    },
    {
        name: 'Jane',
        age: 19
    },
    {
        name: 'Mary',
        age: 22
    },
]

let names = persons.map(person => person.name.toUpperCase())
console.log('Just names of persons in CAPS:')
console.log(names)