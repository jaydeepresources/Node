var nums = [1, 4, 9, 15]

let odds = nums.filter(num => num % 2 != 0)
console.log('Just the odd nums:' + odds)

var persons = [
    {
        name: 'John',
        age: 15
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

let voters = persons.filter(person => person.age >= 18)

console.log('Only Voters:')
console.log(voters)