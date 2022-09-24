// Problema 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // log Tesla
console.log(otherRandomCar) // log Mercedes

// Problema 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//console.log(name); // name es reservado 
console.log(otherName); // log Elon


// Problema 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;   // password no existe como parametro dentro del objeto
//Predict the output
console.log(password); // log 12345
console.log(hashedPassword); // undefinied por  o existir el parametreo dentro del objeto


// Problema 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //first = 2
const [,,,second] = numbers; // second = 5
const [,,,,,,,,third] = numbers; // third = 2
//Predict the output
console.log(first == second); // false
console.log(first == third); // true

//Problema 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // key = 'value'
const { secondKey } = lastTest; // secondKey = [1, 5, 1, 8, 3, 3]
const [ ,willThisWork] = secondKey; // willThisWork = 5
//Predict the output
console.log(key); // log value
console.log(secondKey); //log [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // log 1
console.log(willThisWork); // log 5



